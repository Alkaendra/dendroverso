import { generateRandomNumber, obtainHexCode, obtainDataFromTable } from '../utils';
import { Sistema, Planeta, PerfilGBENAH } from './generate-sectors-models';
/**
 * @param
 *
 *  localization - En qué región de la galaxia se halla la región
 */
export const generateSuprarregionStarSystems = () => {
  const getSystemsNumber = generateRandomNumber(150, 300);
  const total = generateSystems(getSystemsNumber);
  return total;
};

export const generateSystems = (systemNumber: number) => {
  let connectedSystems: Sistema[] = [];
  let unconnectedSystems: Sistema[] = [];
  let connectivity = 0;
  for (let i = 0; i < systemNumber; i += 1) {
    connectivity = generateRandomNumber(1, 100);
    const system: Sistema = generateStarSystem(i);
    if (connectivity < 85) {
      connectedSystems = [...connectedSystems, system];
    } else {
      unconnectedSystems = [...unconnectedSystems, system];
    }
  }

  const connectedSpaces = generateConnectedSystemsDistribution(connectedSystems);
  const unconnectedSpaces = generateUnconnectedSystemsDistribution(unconnectedSystems);

  const totalDistribution = generateUnconnectedRegionDistribution(connectedSpaces, unconnectedSpaces);
  console.log('EYYYYYYYYY ', connectedSpaces);

  return totalDistribution;
};

export const generateUnconnectedSystemsDistribution = (unconnected: any) => {
  const distributedUnConSystems: any = {};
  const prob = generateRandomNumber(1, 100);
  if (prob < 80) {
    distributedUnConSystems['vacios'] = generateUnconnectedSpace(generateRandomNumber(1, 32), 'vacio');
  } else {
    distributedUnConSystems['vacios'] = [];
  }
  const prob2 = generateRandomNumber(1, 100);
  if (prob2 < 30) {
    distributedUnConSystems['silencios'] = generateUnconnectedSpace(generateRandomNumber(1, 6), 'silencio');
  } else {
    distributedUnConSystems['silencios'] = [];
  }
  const prob3 = generateRandomNumber(1, 100);
  if (prob3 >= 98) {
    distributedUnConSystems['singulos'] = generateUnconnectedSpace(1, 'singulo');
  } else {
    distributedUnConSystems['singulos'] = [];
  }

  const prob4 = generateRandomNumber(1, 100);
  if (prob4 === 100) {
    distributedUnConSystems['llagas'] = generateUnconnectedSpace(1, 'llaga');
  } else {
    distributedUnConSystems['llagas'] = [];
  }

  const totalUnConSpaces =
    distributedUnConSystems['vacios'].length +
    distributedUnConSystems['silencios'].length +
    distributedUnConSystems['singulos'].length +
    distributedUnConSystems['llagas'].length;

  // const probUnConInVoid = distributedUnConSystems['vacios'].length > 0
  //   ? (distributedUnConSystems['vacios'].length / totalUnConSpaces) * 100
  //   : 0;
  const probUnConInSil =
    distributedUnConSystems['silencios'].length > 0
      ? (distributedUnConSystems['silencios'].length / totalUnConSpaces) * 100
      : 0;
  const probUnConInSin =
    distributedUnConSystems['singulos'].length > 0
      ? (distributedUnConSystems['singulos'].length / totalUnConSpaces) * 100
      : 0;

  const probUnConInLla =
    distributedUnConSystems['llagas'].length > 0
      ? (distributedUnConSystems['llagas'].length / totalUnConSpaces) * 100
      : 0;

  unconnected.forEach((u: any) => {
    const probUnConLocationProb = generateRandomNumber(0, 100);
    if (probUnConLocationProb <= probUnConInLla) {
      const pLlag = generateRandomNumber(0, distributedUnConSystems['llagas'].length - 1);
      if (pLlag >= 0 && distributedUnConSystems['llagas'][pLlag]) {
        distributedUnConSystems['llagas'][pLlag].systems.push(u);
      }
    } else if (probUnConLocationProb > probUnConInLla && probUnConLocationProb <= probUnConInSin) {
      const pSing = generateRandomNumber(0, distributedUnConSystems['singulos'].length - 1);
      if (pSing >= 0 && distributedUnConSystems['singulos'][pSing]) {
        distributedUnConSystems['singulos'][pSing].systems.push(u);
      }
    } else if (probUnConLocationProb > probUnConInSin && probUnConLocationProb <= probUnConInSil) {
      const pSil = generateRandomNumber(0, distributedUnConSystems['silencios'].length - 1);
      if (pSil >= 0 && distributedUnConSystems['silencios'][pSil]) {
        distributedUnConSystems['silencios'][pSil].systems.push(u);
      }
    } else {
      const pVac = generateRandomNumber(0, distributedUnConSystems['vacios'].length - 1);
      if (pVac >= 0 && distributedUnConSystems['vacios'][pVac]) {
        distributedUnConSystems['vacios'][pVac].systems.push(u);
      }
    }
  });

  return distributedUnConSystems;
};

export const generateUnconnectedSpace = (number: number, name: string, sector: boolean = false) => {
  let unConSpace: any = [];
  for (let i = 0; i <= number; i++) {
    if (!sector) {
      unConSpace = [
        ...unConSpace,
        {
          name: `${name}-${i}`,
          systems: [],
        },
      ];
    } else {
      unConSpace = [
        ...unConSpace,
        {
          name: `${name}-${i}`,
          systems: [],
          blights: {
            inner_frontier: [],
            inner: [],
          },
          silences: {
            inner_frontier: [],
            inner: [],
          },
          singulae: {
            inner_frontier: [],
            inner: [],
          },
          voids: {
            inner_frontier: [],
            inner: [],
          },
        },
      ];
    }
  }
  return unConSpace;
};

export const generateConnectedSystemsDistribution = (connectedSystems: any) => {
  const sectorsNumber = generateRandomNumber(1, 12);
  const sectors: any[] = generateUnconnectedSpace(sectorsNumber, 'Sector', true);
  connectedSystems.forEach((c: any) => {
    sectors[generateRandomNumber(0, sectors.length - 1)].systems.push(c);
  });

  return sectors;
};

export const generateUnconnectedRegionDistribution = (sectors: any, unconnectedSpaces: any) => {
  const totalSystemsRegionDistribution: any = {
    sectors: [],
    blights: [],
    silences: [],
    singulae: [],
    voids: [],
  };

  totalSystemsRegionDistribution['sectors'] = sectors;

  unconnectedSpaces['vacios'].forEach((u: any) => {
    const rand = generateRandomNumber(1, 100);
    const sector = generateRandomNumber(0, sectors.length - 1);
    if (rand < 10) {
      totalSystemsRegionDistribution['voids'].push(u);
    } else if (rand >= 10 && rand <= 50) {
      totalSystemsRegionDistribution['sectors'][sector]['voids']['inner_frontier'].push(u);
    } else {
      totalSystemsRegionDistribution['sectors'][sector]['voids']['inner'].push(u);
    }
  });

  unconnectedSpaces['silencios'].forEach((u: any) => {
    const rand = generateRandomNumber(1, 100);
    const sector = generateRandomNumber(0, sectors.length - 1);
    if (rand < 10) {
      totalSystemsRegionDistribution['silences'].push(u);
    } else if (rand >= 10 && rand <= 50) {
      totalSystemsRegionDistribution['sectors'][sector]['silences']['inner_frontier'].push(u);
    } else {
      totalSystemsRegionDistribution['sectors'][sector]['silences']['inner'].push(u);
    }
  });

  unconnectedSpaces['singulos'].forEach((u: any) => {
    const rand = generateRandomNumber(1, 100);
    const sector = generateRandomNumber(0, sectors.length - 1);
    if (rand < 10) {
      totalSystemsRegionDistribution['singulae'].push(u);
    } else if (rand >= 10 && rand <= 50) {
      totalSystemsRegionDistribution['sectors'][sector]['singulae']['inner_frontier'].push(u);
    } else {
      totalSystemsRegionDistribution['sectors'][sector]['singulae']['inner'].push(u);
    }
  });

  unconnectedSpaces['llagas'].forEach((u: any) => {
    const rand = generateRandomNumber(1, 100);
    const sector = generateRandomNumber(0, sectors.length - 1);
    if (rand < 10) {
      totalSystemsRegionDistribution['blights'].push(u);
    } else if (rand >= 10 && rand <= 50) {
      totalSystemsRegionDistribution['sectors'][sector]['blights']['inner_frontier'].push(u);
    } else {
      totalSystemsRegionDistribution['sectors'][sector]['blights']['inner'].push(u);
    }
  });

  console.log('Distribution ', totalSystemsRegionDistribution);
  return totalSystemsRegionDistribution;
};

export const obtainHabitablePlanets = (connectedSystems: Sistema[]) => {
  const habPlanets = connectedSystems
    .map(s => s.planets)
    .filter(s => s.length > 0)
    .map(p => p.filter(ph => ph.habitability && ph.breathableGas === 'Oxígeno'))
    .filter(p => p.length > 0);
  console.log('[HAB] ', habPlanets);
};

export const generatePlanetaryType: any[] = [
  {
    max: 50,
    min: 0,
    valueToReturn: {
      planetaryType: 'Rocoso',
    },
  },
  {
    max: 52,
    min: 51,
    valueToReturn: {
      planetaryType: 'Magmático',
    },
  },
  {
    max: 55,
    min: 53,
    valueToReturn: {
      planetaryType: 'Infernal',
    },
  },
  {
    max: 90,
    min: 56,
    valueToReturn: {
      planetaryType: 'Gaseoso',
    },
  },
  {
    max: 100,
    min: 91,
    valueToReturn: {
      planetaryType: 'Cinturón',
    },
  },
];

export const generateRockyPlanetHabitabilityType: any | null = (IH: number, hidrosphere: any, biosphere: any) => {
  switch (true) {
    case hidrosphere.cod === 'G':
      return 'ARI';
    case hidrosphere.cod === 'F':
      return 'DES';
    case IH < 1:
      if (hidrosphere.cod === 'A' || hidrosphere.cod === 'B' || hidrosphere.cod === 'C') {
        return 'OHL';
      }
      return 'HEL';
    case IH === 1:
      if (hidrosphere.cod === 'A' || hidrosphere.cod === 'B' || hidrosphere.cod === 'C') {
        return 'PAN';
      }
      return 'TUN';
    case IH === 2:
      return 'ALP';
    case IH === 3:
      if (hidrosphere.cod === 'A' || hidrosphere.cod === 'B' || hidrosphere.cod === 'C') {
        return 'OCE';
      } else if (biosphere.cod === 'A' || biosphere.cod === 'B') {
        return 'TRO';
      }
      return 'TER';
    case IH > 3:
      return 'JAR';
  }
};

export const generateHabitablePlanetBreathableGas = (type: string) => {
  const breathableGasProb = generateRandomNumber(0, 100);
  let gas = '';

  if (type === 'Rocoso') {
    gas = obtainBrethableGasForRockyWolrds(breathableGasProb);
  } else {
    gas = obtainBrethableGasForGasWolrds(breathableGasProb);
  }

  return gas;
};

export const obtainBrethableGasForRockyWolrds = (prob: number): string => {
  let gas = '';
  switch (true) {
    case prob <= 70:
      gas = 'Oxígeno';
      break;
    case prob > 71 && prob <= 80:
      gas = 'Dióxido de carbono';
      break;
    case prob > 81 && prob <= 90:
      gas = 'Metano';
      break;
    case prob > 91 && prob <= 98:
      gas = 'Amoniaco';
      break;
    default:
      gas = 'Cloro';
      break;
  }
  return gas;
};

export const obtainBrethableGasForGasWolrds = (prob: number): string => {
  let gas = '';
  switch (true) {
    case prob <= 70:
      gas = 'Hidrógeno';
      break;
    default:
      gas = 'Amoniaco';
      break;
  }
  return gas;
};

export const generateWorld = (type: string, index: number): Planeta => {
  const name = `Planeta-${index}`;
  const sizeVars = generateRockyPlanetSize();
  const distancToStarVars = getPlanetaryDistanceToStar();
  const moons: object = getRockyPlanetMoons(generateRandomNumber(1, 100));
  let habitabilityType = 'INH'; // Pror defecto, un planeta es inhabitable
  const rockyPlanetGeosphereVars = getPlanetaryGeology(generateRandomNumber(10, 15), sizeVars);
  const rockyPlanetgravityVars = generateRockyPlanetGravity(sizeVars);
  const rockyPlanetAtmosphereVar = getPlanetaryAtmosphereForRockyWorlds(
    generateRandomNumber(10, 15),
    rockyPlanetGeosphereVars,
    sizeVars,
  );
  const rockyPlanetHidrographyVars = getPlanetaryHidrography(
    generateRandomNumber(10, 15),
    type,
    rockyPlanetAtmosphereVar,
  );
  const rockyPlanetBiosphereVars = getPlanetaryBiosphere(
    generateRandomNumber(10, 15),
    rockyPlanetAtmosphereVar,
    rockyPlanetHidrographyVars,
    moons,
  );
  const rockyPlanetNoosphereVars = getPlanetaryNoosphere(generateRandomNumber(10, 15), rockyPlanetBiosphereVars);
  const rockyPlanetErgosphereVars = getPlanetaryErgosphere(
    generateRandomNumber(10, 15),
    rockyPlanetAtmosphereVar,
    rockyPlanetGeosphereVars,
    rockyPlanetBiosphereVars,
  );
  const pHRandom = generateRandomNumber(1, 100);
  let gbenah: PerfilGBENAH;
  let ETMPCL = '';
  let breathableGas = 'No respirable';
  let habitability = false;
  let IH = null;
  let nativeLife = 'Sin vida';
  let rockyHabitablePlanetPopulation = 'N';
  if (pHRandom >= 90) {
    IH =
      1 +
      rockyPlanetgravityVars.mIH +
      rockyPlanetHidrographyVars.mIH +
      distancToStarVars.mIH +
      rockyPlanetAtmosphereVar.mIH;
    breathableGas = generateHabitablePlanetBreathableGas(type);
    habitability = true;
    habitabilityType = generateRockyPlanetHabitabilityType(IH, rockyPlanetHidrographyVars, rockyPlanetBiosphereVars);
    nativeLife = obtainNativeLife(generateRandomNumber(0, 100), rockyPlanetBiosphereVars);
    ETMPCL = generatePlanetaryETMPCL();
    rockyHabitablePlanetPopulation = getPlanetaryPopulation(generateRandomNumber(14, 15), IH);
  }
  gbenah = {
    geosfera: rockyPlanetGeosphereVars.geoCod,
    biosfera: rockyPlanetBiosphereVars.bioCod,
    ergosfera: rockyPlanetErgosphereVars.ergCod,
    noosfera: rockyPlanetNoosphereVars.nooCod,
    atmosfera: rockyPlanetAtmosphereVar.atmCod,
    hidrosfera: rockyPlanetHidrographyVars.hidCod,
  };
  return {
    breathableGas: breathableGas,
    etmpcl: ETMPCL.toUpperCase(),
    gbenah: gbenah,
    IH: IH,
    habitability: habitability,
    habitabilityType: habitabilityType,
    name: name,
    nativeLife: nativeLife,
    population: rockyHabitablePlanetPopulation ? rockyHabitablePlanetPopulation : 'N',
    size: sizeVars.pGV,
    type: type,
  };
};

// Devuelve el código de tamanio y el modificador de este para el cálculo de la gravedad
export const generateRockyPlanetSize = () => {
  const pSRandom = generateRandomNumber(1, 100);
  switch (true) {
    case pSRandom < 30:
      return { pGV: 'mT', mod: -30, geoMod: -2 };
    case pSRandom >= 30 && pSRandom < 50:
      return { pGV: 'sT', mod: -20, geoMod: -1 };
    case pSRandom >= 51 && pSRandom < 80:
      return { pGV: 'T', mod: 10, geoMod: 1 };
    default:
      return { pGV: 'ST', mod: 30, geoMod: 2 };
  }
};

// Devuelve el código de la gravedad y su modificador para el IH (Índice de habitabilidad)
export const generateRockyPlanetGravity = (sizeVars: any) => {
  const pGRandom = generateRandomNumber(1, 100) + sizeVars.mod;
  switch (true) {
    case pGRandom < 20:
      return { cg: 'mb', mIH: -2 };
    case pGRandom >= 21 && pGRandom < 40:
      return { cg: 'b', mIH: -1 };
    case pGRandom >= 51 && pGRandom < 75:
      return { cg: 'e', mIH: 1 };
    case pGRandom >= 76 && pGRandom < 95:
      return { cg: 'ma', mIH: -1 };
    default:
      return { cg: 'ma', mIH: -2 };
  }
};

// Devuelve el código de distancia al sol, dentro de la ZV puesto que son habitables
// -> i: cerca del borde interno, c: centro de la ZV, e: cerca del borde externo de la ZV
export const getPlanetaryDistanceToStar = () => {
  const pDTSRandom = generateRandomNumber(1, 100);
  const dtsIHMod = pDTSRandom < 60 ? -1 : 1;
  switch (true) {
    case pDTSRandom < 30:
      return { pZV: 'i', mIH: dtsIHMod };
    case pDTSRandom >= 31 && pDTSRandom < 60:
      return { pZV: 'c', mIH: dtsIHMod };
    default:
      return { pZV: 'e', mIH: dtsIHMod };
  }
};

// Obtiene el máximo número y el tipo de satélites de un planeta rocoso
export const getRockyPlanetMoons = (randomNumber: number) => {
  if (randomNumber > 50) {
    const randomMoonSizes = generateRandomNumber(1, 100);
    switch (true) {
      case randomMoonSizes < 50:
        return { mayor: 0, minor: generateRandomNumber(1, 3), bioMoonMod: 0 };
      case randomMoonSizes >= 50 && randomMoonSizes < 99:
        return { mayor: 1, minor: 0, bioMoonMod: 1 };
      default:
        return { mayor: generateRandomNumber(1, 2), minor: generateRandomNumber(1, 2), bioMoonMod: 1 };
    }
  }

  return { mayor: 0, minor: 0, bioMoonMod: -1 };
};

export const getPlanetaryGeology = (randomNumber: number, size: any) => {
  const geologyPlanetValue = randomNumber + size.geoMod;
  return {
    geoCod: obtainHexCode(geologyPlanetValue),
    bioMod: geologyPlanetValue >= 10 && geologyPlanetValue <= 13 ? 1 : -1,
    geoErgMod: geologyPlanetValue <= 13 ? 2 : 0,
  };
};

// Devuelve el código de Atmósfera y su modificador del IH
export const getPlanetaryAtmosphereForRockyWorlds = (randomNumber: number, geologyValue: any, size: any) => {
  const atmosphereValue = randomNumber + geologyValue.bioMod + size.geoMod;
  const atmosIHMod = atmosphereValue < 12 || atmosphereValue > 14 ? -1 : 1;
  let atmHidMod = 0;
  let atmBioMod = 0;
  switch (true) {
    case atmosphereValue >= 15:
      atmHidMod = -2;
      atmBioMod = atmHidMod;
      break;
    case atmosphereValue === 14:
      atmHidMod = -1;
      break;
    case atmosphereValue === 13:
      atmHidMod = 2;
      atmBioMod = 2;
      break;
    case atmosphereValue === 12:
      atmHidMod = 1;
      atmBioMod = 2;
      break;
    case atmosphereValue <= 11:
      atmHidMod = -2;
      atmBioMod = -2;
      break;
  }
  return {
    atmCod: obtainHexCode(atmosphereValue),
    mIH: atmosIHMod,
    atmHidMod: atmHidMod,
    atmBioMod: atmBioMod,
    atmErgMod: atmosphereValue <= 13 ? 3 : -1,
  };
};

export const getPlanetaryHidrography: any | null = (randomNumber: number, type: string, atmosphere: any) => {
  const modifiedHidrography = randomNumber + atmosphere.atmHidMod;
  const hidroIHMod = modifiedHidrography < 12 ? -1 : 1;
  let hidBioMod = 0;

  switch (true) {
    case modifiedHidrography >= 15:
      hidBioMod = -2;
      break;
    case modifiedHidrography <= 12:
      hidBioMod = 2;
      break;
  }

  switch (type) {
    case 'Rocoso':
      return { hidCod: obtainHexCode(modifiedHidrography), mIH: hidroIHMod, hidBioMod: hidBioMod };
    case 'Magmático':
      return {
        hidCod: obtainHexCode(modifiedHidrography >= 14 ? (modifiedHidrography - 4).toString(16) : modifiedHidrography),
        mIH: hidroIHMod,
        hidBioMod: hidBioMod,
      };
    case 'Infernal':
      return {
        hidCod: obtainHexCode(modifiedHidrography >= 14 ? (modifiedHidrography - 6).toString(16) : modifiedHidrography),
        mIH: hidroIHMod,
        hidBioMod: hidBioMod,
      };
    case 'Gaseoso':
      return {
        hidCod: obtainHexCode(modifiedHidrography >= 13 ? (modifiedHidrography - 3).toString(16) : modifiedHidrography),
        mIH: hidroIHMod,
        hidBioMod: hidBioMod,
      };
    case 'Cinturón':
      return {
        hidCod: obtainHexCode(modifiedHidrography >= 14 ? (modifiedHidrography - 4).toString(16) : modifiedHidrography),
        mIH: hidroIHMod,
        hidBioMod: hidBioMod,
      };
  }
};

export const getPlanetaryBiosphere: any | null = (
  randomNumber: number,
  atmosphere: any,
  hidrosphere: any,
  moons: any,
) => {
  const modifiedBiosphere = randomNumber + atmosphere.atmBioMod + hidrosphere.hidBioMod + moons.bioMoonMod;
  let bioNatLifeMod = 0;

  switch (true) {
    case modifiedBiosphere === 11:
      bioNatLifeMod = 10;
      break;
    case modifiedBiosphere === 12:
      bioNatLifeMod = 5;
      break;
    case modifiedBiosphere === 14:
      bioNatLifeMod = -20;
      break;
    case modifiedBiosphere === 15:
      bioNatLifeMod = -40;
      break;
    default:
      bioNatLifeMod = 15;
      break;
  }

  return {
    bioCod: obtainHexCode(modifiedBiosphere),
    nooBioMod: modifiedBiosphere <= 11 ? 2 : -4,
    bioErgMod: modifiedBiosphere <= 13 ? 2 : -1,
    bioNatLifeMod: bioNatLifeMod,
  };
};

export const getPlanetaryNoosphere = (randomNumber: number, biosphere: any) => {
  const modifiedNoosphere = randomNumber + biosphere.nooBioMod;

  return { nooCod: obtainHexCode(modifiedNoosphere) };
};

export const getPlanetaryErgosphere = (randomNumber: number, atmosphere: any, geosphere: any, biosphere: any) => {
  const ergosphereValue = randomNumber + atmosphere.atmErgMod + geosphere.geoErgMod + biosphere.bioErgMod;

  return { ergCod: obtainHexCode(ergosphereValue) };
};

export const getPlanetaryPopulation = (randomNumber: number, IH: number) => {
  return obtainHexCode(randomNumber - IH);
};

export const generatePlanetaryETMPCL = () => {
  let ETMPCL = '';
  let randomNumber = '';

  for (let i = 1; i <= 6; i++) {
    randomNumber = generateRandomNumber(10, 15).toString(16);
    ETMPCL = `${ETMPCL}${parseInt(randomNumber, 10) < 11 ? 'A' : randomNumber}`;
  }

  return `-${ETMPCL}`;
};

export const obtainNativeLife = (randomNumber: number, biosphere: any): string => {
  const prob = randomNumber + biosphere.bioNatLifeMod;
  let presenciaDeVida = '';
  switch (true) {
    case prob <= 95:
      presenciaDeVida = 'No sintiente';
      break;
    case prob > 95 && prob <= 99:
      presenciaDeVida = 'Presintiente';
      break;
    default:
      presenciaDeVida = 'Sintiente';
      break;
  }
  return presenciaDeVida;
};

export const generateStarSystem = (i: any): Sistema => {
  const system: Sistema = {
    name: `Sistema-${i}`,
    connectivity: generateSystemConnectivity(generateRandomNumber(1, 100)),
    planets: [],
  };
  const systemPlanets = generateRandomNumber(0, 15);

  for (let sp = 0; sp < systemPlanets; sp += 1) {
    system.planets = [...system.planets, generatePlanet(sp)];
  }
  return system;
};

export const generateSystemConnectivity: any | null = (randomNumber: number) => {
  switch (true) {
    case randomNumber < 2:
      return {
        stable: generateRandomNumber(1, 3) + 1,
        unstable: generateRandomNumber(1, 3) + 1,
        valiangric: generateRandomNumber(1, 2),
      };
    case randomNumber >= 2 && randomNumber < 30:
      return {
        stable: generateRandomNumber(1, 2) + 1,
        unstable: generateRandomNumber(1, 3),
        valiangric: generateRandomNumber(0, 1),
      };
    case randomNumber >= 31 && randomNumber < 60:
      return {
        stable: generateRandomNumber(1, 2),
        unstable: generateRandomNumber(1, 2),
        valiangric: 0,
      };
    case randomNumber >= 61 && randomNumber < 90:
      return {
        stable: generateRandomNumber(0, 1),
        unstable: generateRandomNumber(0, 1),
        valiangric: 0,
      };
    case randomNumber >= 90:
      return {
        stable: 0,
        unstable: generateRandomNumber(0, 1),
        valiangric: 0,
      };
  }
};

export const generatePlanet = (index: number): Planeta => {
  const planetType = obtainDataFromTable(generatePlanetaryType).planetaryType;

  return generateWorld(planetType, index);
};

export const getHexCode = () => {
  const hexCode = generateRandomNumber(10, 15).toString(16);
  return parseInt(hexCode, 10) < 11 ? 'A' : hexCode;
};
