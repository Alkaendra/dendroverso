import { getPlanetaryAstrophysicalData } from './generate-planets-astrophysical';
import { getPlanetaryHidrosphereData } from './generate-planets-hidrosphere';
import { getPlanetaryGeosphereData } from './generate-planets-geosphere';
import { getPlanetaryAtmosphericalData } from './generate-planets-atmosphere';
import { generateRandomFloat, generateRandomNumber } from '../utils';
import { PLANETARY_MAYOR_TYPES } from '../../../admin/components/admin-commons/admin-models/unhabitable-planet.model';
import {
  PlanetaryType,
  INHABITATED_PLANETARY_CLIMATE_TYPES,
} from '../../../admin/components/admin-commons/admin-models/inhabitated-planet.model';

export const SYSTEM_ZONES = {
  INNER: 'inner',
  HZ: 'zh',
  OUTER: 'outer',
};

export type habitablePlanetRoleType = {
  connectivityMod: number;
  cultural_development_mod: number;
  economical_development_mod: number;
  industrial_development_mod: number;
  label: string;
  maxEnergeticResourcesMod: number;
  maxFoodResourcesMod: number;
  maxIndustrialResourcesMod: number;
  military_development_mod: number;
  pobMod: number;
  technological_development_mod: number;
};

export const HABITABLE_PLANET_ROLE = {
  NATION_CAPITAL: {
    connectivityMod: 60,
    cultural_development_mod: generateRandomNumber(2, 3),
    economical_development_mod: generateRandomNumber(3, 6),
    industrial_development_mod: generateRandomNumber(2, 3),
    label: 'Capital de Nación',
    maxEnergeticResourcesMod: 0,
    maxFoodResourcesMod: 0,
    maxIndustrialResourcesMod: 0,
    military_development_mod: generateRandomNumber(3, 4),
    pobMod: 6,
    technological_development_mod: generateRandomNumber(2, 3),
  },
  REGION_CAPITAL: {
    connectivityMod: 50,
    cultural_development_mod: generateRandomNumber(1, 2),
    economical_development_mod: generateRandomNumber(2, 4),
    industrial_development_mod: generateRandomNumber(1, 2),
    label: 'Capital regional',
    maxEnergeticResourcesMod: 0,
    maxFoodResourcesMod: 0,
    maxIndustrialResourcesMod: 0,
    military_development_mod: generateRandomNumber(1, 2),
    pobMod: 4,
    technological_development_mod: generateRandomNumber(1, 2),
  },
  MAYOR_RESOURCE_PRODUCTOR: {
    connectivityMod: 50,
    cultural_development_mod: 0,
    economical_development_mod: generateRandomNumber(1, 2),
    industrial_development_mod: 0,
    label: 'Productor de Recursos Principal',
    maxEnergeticResourcesMod:
      generateRandomNumber(1, 100) > 70 ? generateRandomNumber(3, 4) : generateRandomNumber(1, 2),
    maxFoodResourcesMod: generateRandomNumber(1, 100) > 70 ? generateRandomNumber(3, 4) : generateRandomNumber(1, 2),
    maxIndustrialResourcesMod:
      generateRandomNumber(1, 100) > 70 ? generateRandomNumber(3, 4) : generateRandomNumber(1, 2),
    military_development_mod: generateRandomNumber(0, 1),
    pobMod: 2,
    technological_development_mod: 0,
  },
  MAYOR_INDUSTRIAL_CENTER: {
    connectivityMod: 40,
    cultural_development_mod: 0,
    economical_development_mod: generateRandomNumber(2, 3),
    industrial_development_mod: generateRandomNumber(3, 4),
    label: 'Productor Industrial Principal',
    maxEnergeticResourcesMod: 0,
    maxFoodResourcesMod: 0,
    maxIndustrialResourcesMod: 0,
    military_development_mod: generateRandomNumber(0, 1),
    pobMod: 2,
    technological_development_mod: 0,
  },
  MINOR_RESOURCE_PRODUCTOR: {
    connectivityMod: 40,
    cultural_development_mod: 0,
    economical_development_mod: generateRandomNumber(1, 2),
    industrial_development_mod: 0,
    label: 'Productor de Recursos Menor',
    maxEnergeticResourcesMod: generateRandomNumber(1, 100) > 70 ? generateRandomNumber(2, 3) : 1,
    maxFoodResourcesMod: generateRandomNumber(1, 100) > 70 ? generateRandomNumber(2, 3) : 1,
    maxIndustrialResourcesMod: generateRandomNumber(1, 100) > 70 ? generateRandomNumber(2, 3) : 1,
    military_development_mod: 0,
    pobMod: 1,
    technological_development_mod: 0,
  },
  MINOR_INDUSTRIAL_CENTER: {
    connectivityMod: 20,
    cultural_development_mod: 0,
    economical_development_mod: generateRandomNumber(1, 2),
    industrial_development_mod: generateRandomNumber(1, 2),
    label: 'Productor Industrial Menor',
    maxEnergeticResourcesMod: 0,
    maxFoodResourcesMod: 0,
    maxIndustrialResourcesMod: 0,
    military_development_mod: 0,
    pobMod: 1,
    technological_development_mod: 0,
  },
  CULTURAL_CENTER: {
    connectivityMod: 20,
    cultural_development_mod: generateRandomNumber(2, 3),
    economical_development_mod: generateRandomNumber(1, 2),
    industrial_development_mod: 0,
    label: 'Centro Cultural',
    maxEnergeticResourcesMod: 0,
    maxFoodResourcesMod: 0,
    maxIndustrialResourcesMod: 0,
    military_development_mod: 0,
    pobMod: 0,
    technological_development_mod: 0,
  },
  RESEARCH_CENTER: {
    connectivityMod: 20,
    cultural_development_mod: 0,
    economical_development_mod: generateRandomNumber(1, 2),
    industrial_development_mod: 0,
    label: 'Centro de Investigación',
    maxEnergeticResourcesMod: 0,
    maxFoodResourcesMod: 0,
    maxIndustrialResourcesMod: 0,
    military_development_mod: 0,
    pobMod: 0,
    technological_development_mod: generateRandomNumber(2, 3),
  },
  MILITARY_BASE: {
    connectivityMod: 30,
    cultural_development_mod: 0,
    economical_development_mod: 0,
    industrial_development_mod: 0,
    label: 'Base Militar',
    maxEnergeticResourcesMod: 0,
    maxFoodResourcesMod: 0,
    maxIndustrialResourcesMod: 0,
    military_development_mod: generateRandomNumber(2, 3),
    pobMod: 0,
    technological_development_mod: generateRandomNumber(1, 2),
  },
  COLONY: {
    connectivityMod: 20,
    cultural_development_mod: 0,
    economical_development_mod: 0,
    industrial_development_mod: 0,
    label: 'Colonia',
    maxEnergeticResourcesMod: 0,
    maxFoodResourcesMod: 0,
    maxIndustrialResourcesMod: 0,
    military_development_mod: 0,
    pobMod: -1,
    technological_development_mod: 0,
  },
  OTHER: {
    connectivityMod: 20,
    cultural_development_mod: 0,
    economical_development_mod: 0,
    industrial_development_mod: 0,
    label: 'Otro',
    maxEnergeticResourcesMod: 0,
    maxFoodResourcesMod: 0,
    maxIndustrialResourcesMod: 0,
    military_development_mod: 0,
    pobMod: -2,
    technological_development_mod: 0,
  },
};

export interface resourcesAndPopulationMods {
  energyResourcesMod: number;
  food_resources_mod: number;
  industrial_resources_mod: number;
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

export const getPlanetMayorType = (systemZone: string): { type: string; label: string } => {
  const generateRandom: number = generateRandomNumber(1, 100);
  const planetaryMayorType: any = {
    ...(systemZone === SYSTEM_ZONES.INNER && {
      ...(generateRandom >= 1 &&
        generateRandom <= 3 && {
          type: 'CA',
          label: PLANETARY_MAYOR_TYPES.ASTEROID,
        }),
      ...(generateRandom >= 4 &&
        generateRandom <= 80 && {
          type: 'R',
          label: PLANETARY_MAYOR_TYPES.ROCKY,
        }),
      ...(generateRandom >= 81 && {
        type: 'G',
        label: PLANETARY_MAYOR_TYPES.GAS_GIANT,
      }),
    }),
    ...(systemZone === SYSTEM_ZONES.HZ && {
      ...(generateRandom >= 1 &&
        generateRandom <= 3 && {
          type: 'CA',
          label: PLANETARY_MAYOR_TYPES.ASTEROID,
        }),
      ...(generateRandom >= 4 &&
        generateRandom <= 43 && {
          type: 'R',
          label: PLANETARY_MAYOR_TYPES.ROCKY,
        }),
      ...(generateRandom >= 44 && {
        type: 'G',
        label: PLANETARY_MAYOR_TYPES.GAS_GIANT,
      }),
    }),
    ...(systemZone === SYSTEM_ZONES.OUTER && {
      ...(generateRandom >= 1 &&
        generateRandom <= 3 && {
          type: 'CA',
          label: PLANETARY_MAYOR_TYPES.ASTEROID,
        }),
      ...(generateRandom >= 4 &&
        generateRandom <= 20 && {
          type: 'R',
          label: PLANETARY_MAYOR_TYPES.ROCKY,
        }),
      ...(generateRandom >= 21 && {
        type: 'G',
        label: PLANETARY_MAYOR_TYPES.GAS_GIANT,
      }),
    }),
  };

  return planetaryMayorType;
};

export const getPlanetSubType = (surfaceTemperature: number, hidrologyPercentage: number, IH: number) => {
  let planetType: PlanetaryType = {} as any;

  if (surfaceTemperature < 0) {
    switch (true) {
      case hidrologyPercentage < 10:
        planetType = {
          energeticResourcesMod: 1,
          food_resources_mod: -2,
          industrial_resources_mod: 0,
          populationMod: -2,
          specialTraitMod: 0,
          terrainTypes: ['Cavernas', 'Páramo helado', 'Glaciar', 'Mar', 'Océano'],
          subTypeCode: INHABITATED_PLANETARY_CLIMATE_TYPES.ARTIC.code, // ART - Ártico, tipo Hoth o Noveria.
          subType: INHABITATED_PLANETARY_CLIMATE_TYPES.ARTIC.type,
        };
        break;
      case hidrologyPercentage >= 10 && hidrologyPercentage < 80:
        planetType = {
          energeticResourcesMod: 1,
          food_resources_mod: -2,
          industrial_resources_mod: 1,
          populationMod: -2,
          specialTraitMod: 0,
          terrainTypes: ['Colinas', 'Mar', 'Océano', 'Taiga', 'Tundra'],
          subTypeCode: INHABITATED_PLANETARY_CLIMATE_TYPES.BOREAL.code, // BOR - Terrestre tipo tundra.
          subType: INHABITATED_PLANETARY_CLIMATE_TYPES.BOREAL.type,
        };
        break;
      case hidrologyPercentage >= 80:
        planetType = {
          energeticResourcesMod: 1,
          food_resources_mod: 1,
          industrial_resources_mod: -1,
          populationMod: -1,
          specialTraitMod: 1,
          terrainTypes: ['Archipiélago', 'Isla', 'Mar', 'Océano'],
          subTypeCode: INHABITATED_PLANETARY_CLIMATE_TYPES.FROZEN_OCEAN.code, // OCH - Terrestre océanico con superficie congelada, tipo Europa.
          subType: INHABITATED_PLANETARY_CLIMATE_TYPES.FROZEN_OCEAN.type,
        };
        break;
    }
  } else if (surfaceTemperature >= 0 && surfaceTemperature < 30) {
    switch (true) {
      case hidrologyPercentage < 10:
        planetType = {
          energeticResourcesMod: 1,
          food_resources_mod: -2,
          industrial_resources_mod: 1,
          populationMod: -2,
          specialTraitMod: 0,
          terrainTypes: ['Colinas', 'Mar', 'Océano', 'Taiga', 'Tundra'],
          subTypeCode: INHABITATED_PLANETARY_CLIMATE_TYPES.BOREAL.code, // BOR - Terrestre tipo tundra.
          subType: INHABITATED_PLANETARY_CLIMATE_TYPES.BOREAL.type,
        };
        break;
      case hidrologyPercentage >= 10 && hidrologyPercentage < 50:
        if (IH > 2) {
          planetType = {
            energeticResourcesMod: 0,
            food_resources_mod: 0,
            industrial_resources_mod: 1,
            populationMod: -1,
            specialTraitMod: 1,
            terrainTypes: ['Cavernas', 'Colinas', 'Llanura', 'Mar', 'Manglar', 'Océano', 'Selva'],
            subTypeCode: INHABITATED_PLANETARY_CLIMATE_TYPES.SAVANNA.code, // SAV - Terrestre tipo savana.
            subType: INHABITATED_PLANETARY_CLIMATE_TYPES.SAVANNA.type,
          };
        } else {
          planetType = {
            energeticResourcesMod: 0,
            food_resources_mod: 2,
            industrial_resources_mod: 1,
            populationMod: 1,
            specialTraitMod: 1,
            terrainTypes: ['Bosque', 'Cavernas', 'Colinas', 'Llanura', 'Mar', 'Manglar', 'Montañas', 'Océano', 'Selva'],
            subTypeCode: INHABITATED_PLANETARY_CLIMATE_TYPES.CONTINENTAL.code, // CON - Terrestre tipo continental, como la Tierra.
            subType: INHABITATED_PLANETARY_CLIMATE_TYPES.CONTINENTAL.type,
          };
        }
        break;
      case hidrologyPercentage >= 50 && hidrologyPercentage < 80:
        if (IH >= 3) {
          planetType = {
            energeticResourcesMod: 0,
            food_resources_mod: 3,
            industrial_resources_mod: 1,
            populationMod: 2,
            specialTraitMod: 2,
            terrainTypes: ['Bosque', 'Cavernas', 'Colinas', 'Llanura', 'Mar', 'Manglar', 'Montañas', 'Océano', 'Selva'],
            subTypeCode: INHABITATED_PLANETARY_CLIMATE_TYPES.GARDEN.code, // JAR - Terrestre tipo jardín.
            subType: INHABITATED_PLANETARY_CLIMATE_TYPES.GARDEN.type,
          };
        } else if (IH === 2) {
          planetType = {
            energeticResourcesMod: 1,
            food_resources_mod: 1,
            industrial_resources_mod: 1,
            populationMod: -1,
            specialTraitMod: 1,
            terrainTypes: ['Cavernas', 'Colinas', 'Mar', 'Manglar', 'Océano', 'Selva', 'Túneles'],
            subTypeCode: INHABITATED_PLANETARY_CLIMATE_TYPES.TROPICAL.code, // SEL - Terrestre tipo selvático
            subType: INHABITATED_PLANETARY_CLIMATE_TYPES.TROPICAL.type,
          };
        } else {
          planetType = {
            energeticResourcesMod: 0,
            food_resources_mod: 2,
            industrial_resources_mod: 1,
            populationMod: 1,
            specialTraitMod: 1,
            terrainTypes: ['Bosque', 'Cavernas', 'Colinas', 'Llanura', 'Mar', 'Manglar', 'Montañas', 'Océano', 'Selva'],
            subTypeCode: INHABITATED_PLANETARY_CLIMATE_TYPES.CONTINENTAL.code, // TC - Terrestre tipo continental, como la Tierra.
            subType: INHABITATED_PLANETARY_CLIMATE_TYPES.CONTINENTAL.type,
          };
        }
        break;
      case hidrologyPercentage >= 80:
        planetType = {
          energeticResourcesMod: 1,
          food_resources_mod: 3,
          industrial_resources_mod: -1,
          populationMod: -1,
          specialTraitMod: 2,
          terrainTypes: ['Archipiélago', 'Isla', 'Mar', 'Océano'],
          subTypeCode: INHABITATED_PLANETARY_CLIMATE_TYPES.OCEANIC.code, // OCE - Terrestre océanico tipo Kamino.
          subType: INHABITATED_PLANETARY_CLIMATE_TYPES.OCEANIC.type,
        };
        break;
    }
  } else {
    switch (true) {
      case hidrologyPercentage < 10:
        planetType = {
          energeticResourcesMod: 1,
          food_resources_mod: -2,
          industrial_resources_mod: 2,
          populationMod: -2,
          specialTraitMod: 0,
          terrainTypes: ['Cavernas', 'Colinas', 'Páramo', 'Lago', 'Montañas', 'Túneles'],
          subTypeCode: INHABITATED_PLANETARY_CLIMATE_TYPES.ARID.code, // ARI - Terrestre tipo árido.
          subType: INHABITATED_PLANETARY_CLIMATE_TYPES.ARID.type,
        };
        break;
      case hidrologyPercentage >= 10 && hidrologyPercentage < 30:
        planetType = {
          energeticResourcesMod: 2,
          food_resources_mod: -2,
          industrial_resources_mod: 2,
          populationMod: -2,
          specialTraitMod: 0,
          terrainTypes: ['Cavernas', 'Colinas', 'Desierto', 'Dunas', 'Montañas', 'Túneles'],
          subTypeCode: INHABITATED_PLANETARY_CLIMATE_TYPES.DESERTIC.code, // TD - Terrestre desértico tipo Arrakis.
          subType: INHABITATED_PLANETARY_CLIMATE_TYPES.DESERTIC.type,
        };
        break;
      case hidrologyPercentage >= 30 && hidrologyPercentage < 50:
        planetType = {
          energeticResourcesMod: 1,
          food_resources_mod: -2,
          industrial_resources_mod: 1,
          populationMod: -3,
          specialTraitMod: 0,
          terrainTypes: ['Bosque', 'Cavernas', 'Manglar', 'Océano', 'Selva'],
          subTypeCode: INHABITATED_PLANETARY_CLIMATE_TYPES.MARSH.code, // PAL - Terrestre pantanoso tipo Dagobah.
          subType: INHABITATED_PLANETARY_CLIMATE_TYPES.MARSH.type,
        };
        break;
      case hidrologyPercentage >= 50 && hidrologyPercentage < 80:
        planetType = {
          energeticResourcesMod: 1,
          food_resources_mod: 1,
          industrial_resources_mod: 1,
          populationMod: -1,
          specialTraitMod: 1,
          terrainTypes: ['Cavernas', 'Colinas', 'Mar', 'Manglar', 'Océano', 'Selva', 'Túneles'],
          subTypeCode: INHABITATED_PLANETARY_CLIMATE_TYPES.TROPICAL.code, // SEL - Terrestre selvático.
          subType: INHABITATED_PLANETARY_CLIMATE_TYPES.TROPICAL.type,
        };
        break;
      case hidrologyPercentage >= 80:
        planetType = {
          energeticResourcesMod: 1,
          food_resources_mod: 3,
          industrial_resources_mod: -1,
          populationMod: -1,
          specialTraitMod: 2,
          terrainTypes: ['Archipiélago', 'Isla', 'Mar', 'Océano'],
          subTypeCode: INHABITATED_PLANETARY_CLIMATE_TYPES.OCEANIC.code, // OCE - Terrestre océanico tipo Kamino.
          subType: INHABITATED_PLANETARY_CLIMATE_TYPES.OCEANIC.type,
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
