import { getPlanetaryAstrophysicalData } from './generate-planets-astrophysical';
import { getPlanetaryHidrosphereData } from './generate-planets-hidrosphere';
import { getPlanetaryGeosphereData } from './generate-planets-geosphere';
import { getPlanetaryAtmosphericalData } from './generate-planets-atmosphere';
import { generateRandomFloat, generateRandomNumber } from '../utils';

export const SYSTEM_ZONES = {
  INNER: 'inner',
  HZ: 'zh',
  OUTER: 'outer',
};

export type habitablePlanetRoleType = {
  label: string;
  pobMod: number;
};

export const HABITABLE_PLANET_ROLE = {
  NATION_CAPITAL: {
    label: 'Capital de Nación',
    pobMod: 6,
  },
  REGION_CAPITAL: {
    label: 'Capital regional',
    pobMod: 4,
  },
  MAYOR_RESOURCE_PRODUCTOR: {
    label: 'Productor de Recursos Principal',
    pobMod: 2,
  },
  MAYOR_INDUSTRIAL_PRODUCTOR: {
    label: 'Productor Industrial Principal',
    pobMod: 2,
  },
  MINOR_RESOURCE_PRODUCTOR: {
    label: 'Productor de Recursos Secundario',
    pobMod: 1,
  },
  MINOR_INDUSTRIAL_PRODUCTOR: {
    label: 'Productor Industrial Secundario',
    pobMod: 1,
  },
  COLONY: {
    label: 'Colonia',
    pobMod: -1,
  },
  OTHER: {
    label: 'Otro',
    pobMod: -2,
  },
};

export interface resourcesAndPopulationMods {
  energyResourcesMod: number;
  foodResourcesMod: number;
  industrialResourcesMod: number;
  populationMod: number;
  specials: string[];
}

// Obtener los límites -en UAs- interior y exterior de la zona habitable en función de la luminosity
export const generateZH = (starLuminosity: number) => ({
  inner: Math.sqrt(starLuminosity) / 1.1,
  outer: Math.sqrt(starLuminosity) / 0.53,
});

// Obtiene la distancia orbital siguiendo la ley de Titus-Bode, en UAs
export const titusBodeLawOrbitalCalculation = (firstPlanetOrbit: number, n: number) => {
  return firstPlanetOrbit + 0.21727 * Math.pow(1.71023, n);
};

export const obtainSystemOrbits = () => {
  let orbits: any = [];
  // Calculamos los límites de la Zona de Habitabilidad del Grupo Estelar
  const HZrange = generateZH(generateRandomNumber(1, 5));
  // En función de esta, obtenemos la posición del planeta dentro del sistema entre tres posibilidades: inner, HZ, outer (interior, ZH, exterior)
  const planetSystemZone = (orbit: number) => {
    if (orbit < HZrange.inner) {
      return SYSTEM_ZONES.INNER;
    } else if (orbit >= HZrange.inner && orbit <= HZrange.outer) {
      return SYSTEM_ZONES.HZ;
    }
    return SYSTEM_ZONES.OUTER;
  };
  // Calculamos la órbita del primer planeta puesto que es un parámetro necesario para la Ley de Titus-Bode de distancimiento orbital
  const firstPlanetOrbit = parseFloat(generateRandomFloat(0, 1).toFixed(3));
  const planetarySystemZoneforFirstPlanet = planetSystemZone(firstPlanetOrbit);
  orbits = [
    ...orbits,
    {
      n: 0,
      orbitalDistance: firstPlanetOrbit,
      hasPlanet: true,
      systemZone: planetarySystemZoneforFirstPlanet,
      planetaryMayorType: getPlanetMayorType(planetarySystemZoneforFirstPlanet),
    },
  ];
  // Calculamos el resto de órbitas
  for (let i = 1; i <= generateRandomNumber(1, 20); i += 1) {
    // Arbitrariamente, obtenemos si una órbita está ocupada por un planeta
    const planetPresenceProb = i <= 10 ? 75 : 60;
    const randomForPlanetPresence = generateRandomNumber(1, 100);
    const calculatedOrbitalDistance = parseFloat(titusBodeLawOrbitalCalculation(firstPlanetOrbit, i).toFixed(3));
    const planetarySystemZone = planetSystemZone(calculatedOrbitalDistance);
    orbits = [
      ...orbits,
      {
        n: i,
        orbitalDistance: calculatedOrbitalDistance,
        hasPlanet: randomForPlanetPresence < planetPresenceProb,
        systemZone: planetarySystemZone,
        planetMayorType: getPlanetMayorType(planetarySystemZone),
      },
    ];
  }
  return orbits;
};

export const getPlanetMayorType = (systemZone: string) => {
  const generateRandom: number = generateRandomNumber(1, 100);
  const planetaryMayorType = {
    ...(systemZone === SYSTEM_ZONES.INNER && {
      ...(generateRandom >= 1 &&
        generateRandom <= 3 && {
          type: 'CA',
          label: 'Cinturón de Asteroides',
        }),
      ...(generateRandom >= 4 &&
        generateRandom <= 50 && {
          type: 'R',
          label: 'Rocoso',
        }),
      ...(generateRandom >= 51 && {
        type: 'G',
        label: 'Gigante Gasesoso',
      }),
    }),
    ...(systemZone === SYSTEM_ZONES.HZ && {
      ...(generateRandom >= 1 &&
        generateRandom <= 3 && {
          type: 'CA',
          label: 'Cinturón de Asteroides',
        }),
      ...(generateRandom >= 4 &&
        generateRandom <= 33 && {
          type: 'R',
          label: 'Rocoso',
        }),
      ...(generateRandom >= 34 && {
        type: 'G',
        label: 'Gigante Gasesoso',
      }),
    }),
    ...(systemZone === SYSTEM_ZONES.OUTER && {
      ...(generateRandom >= 1 &&
        generateRandom <= 3 && {
          type: 'CA',
          label: 'Cinturón de Asteroides',
        }),
      ...(generateRandom >= 4 &&
        generateRandom <= 20 && {
          type: 'R',
          label: 'Rocoso',
        }),
      ...(generateRandom >= 21 && {
        type: 'G',
        label: 'Gigante Gasesoso',
      }),
    }),
  };

  return planetaryMayorType;
};

export const getPlanetSubType = (surfaceTemperature: number, hidrologyPercentage: number, IH: number) => {
  let terTypes: string[] = [];
  let planetType = {
    energeticResourcesMod: 0,
    foodResourcesMod: 0,
    industrialResourcesMod: 0,
    populationMod: 0,
    specialTraitMod: 0,
    terrainTypes: terTypes,
    subTypeCode: '',
    subType: '',
  };

  if (surfaceTemperature < 0) {
    switch (true) {
      case hidrologyPercentage < 10:
        planetType = {
          energeticResourcesMod: 1,
          foodResourcesMod: -2,
          industrialResourcesMod: 0,
          populationMod: -2,
          specialTraitMod: 0,
          terrainTypes: ['Cavernas', 'Páramo helado', 'Glaciar', 'Mar', 'Océano'],
          subTypeCode: 'ART', // ART - Ártico, tipo Hoth o Noveria.
          subType: 'Ártico',
        };
        break;
      case hidrologyPercentage >= 10 && hidrologyPercentage < 80:
        planetType = {
          energeticResourcesMod: 1,
          foodResourcesMod: -2,
          industrialResourcesMod: 1,
          populationMod: -2,
          specialTraitMod: 0,
          terrainTypes: ['Colinas', 'Mar', 'Océano', 'Taiga', 'Tundra'],
          subTypeCode: 'BOR', // BOR - Terrestre tipo tundra.
          subType: 'Boreal',
        };
        break;
      case hidrologyPercentage >= 80:
        planetType = {
          energeticResourcesMod: 1,
          foodResourcesMod: 1,
          industrialResourcesMod: -1,
          populationMod: -1,
          specialTraitMod: 1,
          terrainTypes: ['Archipiélago', 'Isla', 'Mar', 'Océano'],
          subTypeCode: 'OCH', // OCH - Terrestre océanico con superficie congelada, tipo Europa.
          subType: 'Océanico Helado',
        };
        break;
    }
  } else if (surfaceTemperature >= 0 && surfaceTemperature < 30) {
    switch (true) {
      case hidrologyPercentage < 10:
        planetType = {
          energeticResourcesMod: 1,
          foodResourcesMod: -2,
          industrialResourcesMod: 1,
          populationMod: -2,
          specialTraitMod: 0,
          terrainTypes: ['Colinas', 'Mar', 'Océano', 'Taiga', 'Tundra'],
          subTypeCode: 'BOR', // BOR - Terrestre tipo tundra.
          subType: 'Boreal',
        };
        break;
      case hidrologyPercentage >= 10 && hidrologyPercentage < 50:
        if (IH > 2) {
          planetType = {
            energeticResourcesMod: 0,
            foodResourcesMod: 0,
            industrialResourcesMod: 1,
            populationMod: -1,
            specialTraitMod: 1,
            terrainTypes: ['Cavernas', 'Colinas', 'Llanura', 'Mar', 'Manglar', 'Océano', 'Selva'],
            subTypeCode: 'SAV', // SAV - Terrestre tipo savana.
            subType: 'Savana',
          };
        } else {
          planetType = {
            energeticResourcesMod: 0,
            foodResourcesMod: 2,
            industrialResourcesMod: 1,
            populationMod: 1,
            specialTraitMod: 1,
            terrainTypes: ['Bosque', 'Cavernas', 'Colinas', 'Llanura', 'Mar', 'Manglar', 'Montañas', 'Océano', 'Selva'],
            subTypeCode: 'CON', // CON - Terrestre tipo continental, como la Tierra.
            subType: 'Continental',
          };
        }
        break;
      case hidrologyPercentage >= 50 && hidrologyPercentage < 80:
        if (IH >= 3) {
          planetType = {
            energeticResourcesMod: 0,
            foodResourcesMod: 3,
            industrialResourcesMod: 1,
            populationMod: 2,
            specialTraitMod: 2,
            terrainTypes: ['Bosque', 'Cavernas', 'Colinas', 'Llanura', 'Mar', 'Manglar', 'Montañas', 'Océano', 'Selva'],
            subTypeCode: 'JAR', // JAR - Terrestre tipo jardín.
            subType: 'Jardín',
          };
        } else if (IH === 2) {
          planetType = {
            energeticResourcesMod: 1,
            foodResourcesMod: 1,
            industrialResourcesMod: 1,
            populationMod: -1,
            specialTraitMod: 1,
            terrainTypes: ['Cavernas', 'Colinas', 'Mar', 'Manglar', 'Océano', 'Selva', 'Túneles'],
            subTypeCode: 'SEL', // SEL - Terrestre tipo selvático
            subType: 'Selvático',
          };
        } else {
          planetType = {
            energeticResourcesMod: 0,
            foodResourcesMod: 2,
            industrialResourcesMod: 1,
            populationMod: 1,
            specialTraitMod: 1,
            terrainTypes: ['Bosque', 'Cavernas', 'Colinas', 'Llanura', 'Mar', 'Manglar', 'Montañas', 'Océano', 'Selva'],
            subTypeCode: 'CON', // TC - Terrestre tipo continental, como la Tierra.
            subType: 'Continental',
          };
        }
        break;
      case hidrologyPercentage >= 80:
        planetType = {
          energeticResourcesMod: 1,
          foodResourcesMod: 3,
          industrialResourcesMod: -1,
          populationMod: -1,
          specialTraitMod: 2,
          terrainTypes: ['Archipiélago', 'Isla', 'Mar', 'Océano'],
          subTypeCode: 'OCE', // OCE - Terrestre océanico tipo Kamino.
          subType: 'Oceánico',
        };
        break;
    }
  } else {
    switch (true) {
      case hidrologyPercentage < 10:
        planetType = {
          energeticResourcesMod: 1,
          foodResourcesMod: -2,
          industrialResourcesMod: 2,
          populationMod: -2,
          specialTraitMod: 0,
          terrainTypes: ['Cavernas', 'Colinas', 'Páramo', 'Lago', 'Montañas', 'Túneles'],
          subTypeCode: 'ARI', // ARI - Terrestre tipo árido.
          subType: 'Árido',
        };
        break;
      case hidrologyPercentage >= 10 && hidrologyPercentage < 30:
        planetType = {
          energeticResourcesMod: 2,
          foodResourcesMod: -2,
          industrialResourcesMod: 2,
          populationMod: -2,
          specialTraitMod: 0,
          terrainTypes: ['Cavernas', 'Colinas', 'Desierto', 'Dunas', 'Montañas', 'Túneles'],
          subTypeCode: 'DES', // TD - Terrestre desértico tipo Arrakis.
          subType: 'Desértico',
        };
        break;
      case hidrologyPercentage >= 30 && hidrologyPercentage < 50:
        planetType = {
          energeticResourcesMod: 1,
          foodResourcesMod: -2,
          industrialResourcesMod: 1,
          populationMod: -3,
          specialTraitMod: 0,
          terrainTypes: ['Bosque', 'Cavernas', 'Manglar', 'Océano', 'Selva'],
          subTypeCode: 'PAL', // PAL - Terrestre pantanoso tipo Dagobah.
          subType: 'Palustre',
        };
        break;
      case hidrologyPercentage >= 50 && hidrologyPercentage < 80:
        planetType = {
          energeticResourcesMod: 1,
          foodResourcesMod: 1,
          industrialResourcesMod: 1,
          populationMod: -1,
          specialTraitMod: 1,
          terrainTypes: ['Cavernas', 'Colinas', 'Mar', 'Manglar', 'Océano', 'Selva', 'Túneles'],
          subTypeCode: 'SEL', // SEL - Terrestre selvático.
          subType: 'Selvático',
        };
        break;
      case hidrologyPercentage >= 80:
        planetType = {
          energeticResourcesMod: 1,
          foodResourcesMod: 3,
          industrialResourcesMod: -1,
          populationMod: -1,
          specialTraitMod: 2,
          terrainTypes: ['Archipiélago', 'Isla', 'Mar', 'Océano'],
          subTypeCode: 'OCE', // OCE - Terrestre océanico tipo Kamino.
          subType: 'Oceánico',
        };
        break;
    }
  }

  return planetType;
};

export const getTotalPlanetaryIH = (gravityMod: number, atmosphereMod: number, hidrosphereMod: number) => {
  return 1 + gravityMod + atmosphereMod + hidrosphereMod;
};

export const getPlanetSurfaceTemperature = (
  albedo: number,
  starLuminosity: number,
  starRadius: number,
  planetOrbit: number,
  greenhouseEffect: number,
) => {
  const tEff = 5777 * Math.pow(starLuminosity / Math.pow(starRadius, 2), 1 / 4);
  const tEq = tEff * Math.sqrt((starRadius * 695508) / (2 * (planetOrbit * 146900000))) - 273.15;
  return parseFloat(Math.pow((2 / (2 - greenhouseEffect)) * Math.pow(tEq, 4) * (1 - albedo), 1 / 4).toFixed(2));
};

export const generatePlanet: any = () => {
  const astrophy = getPlanetaryAstrophysicalData();
  const hidros = getPlanetaryHidrosphereData(astrophy.size.cod);
  const geos = getPlanetaryGeosphereData(astrophy.density.label, 1, 3, 2);
  // const ZH = generateZH(starLuminosity);
  const atmos = getPlanetaryAtmosphericalData(astrophy.size.cod);
  const IH = getTotalPlanetaryIH(astrophy.gravity.gravityIhMod, atmos.IHmod, hidros.hidrosphereIHMod);
  const planetaryClassification = getPlanetSubType(100, hidros.percentage, IH);

  return {
    astrophysicalData: astrophy,
    atmosphereData: atmos,
    classification: planetaryClassification,
    geosPhereData: geos,
    hidrosphereData: hidros,
  };
};