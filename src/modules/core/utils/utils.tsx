//  Genéricos

import { generatePlanetaryGeophisycalSpecialTrait } from './habitable-planet-specials/geophisycal-specials';
import { generatePlanetaryAtmosphericalTrait } from './habitable-planet-specials/atmospherical-specials';
import { generatePlanetaryAstrophisycalTrait } from './habitable-planet-specials/astrophisycal-specials';
import { generatePlanetaryBiologicalTrait } from './habitable-planet-specials/biological-specials';
import { generatePlanetaryHidrosphericalTrait } from './habitable-planet-specials/hidrospherical-specials';
import { generatePlanetaryOtherTrait } from './habitable-planet-specials/other-specials';
import { generatePlanetaryMoons } from './habitable-planet-specials/moon-specials';
import { generatePlanetarySocialTrait } from './habitable-planet-specials/social.specials';
import { Option } from '../../admin/components/admin-commons/admin-models/generic.model';
import { INHABITATED_PLANETARY_CLIMATE_TYPES } from '../../admin/components/admin-commons/admin-models/inhabitated-planet.model';

export const generateRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

export const generateRandomFloat = (min: number, max: number) =>
  parseFloat((Math.random() * (max - min) + min).toFixed(2));

export const getRandomValueFromStringArray = (array: string[]) => array[Math.floor(Math.random() * array.length)];

export const generateSelectOptions = (opciones: string[]) => {
  let selectOptions: Option[] = [];
  selectOptions = opciones.reduce((acc: any, current) => {
    acc = [...acc, { name: current, value: current }];
    return acc;
  }, []);

  return selectOptions;
};

export const parseNumbersToTwoDecimalDigits = (number: number): number => parseFloat(number.toFixed(2));
export const parseNumbersToThreeDecimalDigits = (number: number): number => parseFloat(number.toFixed(3));

export const reduceToAddParam = (dataArray: any[], paramToAdd: any) =>
  dataArray.map(element => element[paramToAdd]).reduce((a, b) => a + b, 0);

export const convertToRoman = (num: number) => {
  let romanNumbers: any = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let str = '';

  for (const i of Object.keys(romanNumbers)) {
    const q: number = Math.floor(num / romanNumbers[i]);
    num -= q * romanNumbers[i];
    str += i.repeat(q);
  }

  return str;
};

export const flattenArrayOfArrays = (arr: any) =>
  arr.reduce((flat: any, next: any) => flat.concat(Array.isArray(next) ? flattenArrayOfArrays(next) : next), []);

export const obtainHexCode = (numberValue: number): string => {
  if (numberValue < 10) {
    numberValue = 10;
  }
  if (numberValue > 15) {
    numberValue = 15;
  }
  switch (numberValue) {
    case 10:
      return 'A';
    case 11:
      return 'B';
    case 12:
      return 'C';
    case 13:
      return 'D';
    case 14:
      return 'E';
    case 15:
      return 'F';
    default:
      return 'G';
  }
};

export const obtainDataFromTable: any = (data: any) => {
  const randomFactor = generateRandomNumber(1, data[data.length - 1].max);
  let valueToReturn = {};
  data.forEach((item: any) => {
    if (randomFactor >= item.min && randomFactor <= item.max) {
      valueToReturn = item.valueToReturn;
    }
  });
  return valueToReturn;
};

// Planetas

export const habitablePlanetType: any = (result: number) => ({
  ...(result > 0 &&
    result <= 10 && {
      energeticResourcesMod: 0,
      food_resources_mod: -2,
      industrial_resources_mod: 2,
      populationMod: -2,
      specialTraitMod: 0,
      terrainTypes: ['Colinas', 'Montañas', 'Cavernas', 'Mar', 'Océano'],
      typeCode: INHABITATED_PLANETARY_CLIMATE_TYPES.ALPINE.code,
      type: INHABITATED_PLANETARY_CLIMATE_TYPES.ALPINE.type,
    }),
  ...(result > 10 &&
    result <= 20 && {
      energeticResourcesMod: 1,
      food_resources_mod: -2,
      industrial_resources_mod: 1,
      populationMod: -2,
      specialTraitMod: 0,
      terrainTypes: ['Colinas', 'Mar', 'Océano', 'Taiga', 'Tundra'],
      typeCode: INHABITATED_PLANETARY_CLIMATE_TYPES.BOREAL.code,
      type: INHABITATED_PLANETARY_CLIMATE_TYPES.BOREAL.type,
    }),
  ...(result > 20 &&
    result <= 30 && {
      energeticResourcesMod: 1,
      food_resources_mod: 1,
      industrial_resources_mod: 1,
      populationMod: -1,
      specialTraitMod: 1,
      terrainTypes: ['Cavernas', 'Colinas', 'Mar', 'Manglar', 'Océano', 'Selva', 'Túneles'],
      typeCode: 'SEL',
      type: 'Selvático',
    }),
  ...(result > 30 &&
    result <= 35 && {
      energeticResourcesMod: 0,
      food_resources_mod: 3,
      industrial_resources_mod: 1,
      populationMod: 2,
      specialTraitMod: 2,
      terrainTypes: ['Bosque', 'Cavernas', 'Colinas', 'Llanura', 'Mar', 'Manglar', 'Montañas', 'Océano', 'Selva'],
      typeCode: 'JAR',
      type: 'Jardín',
    }),
  ...(result > 35 &&
    result <= 50 && {
      energeticResourcesMod: 0,
      food_resources_mod: 2,
      industrial_resources_mod: 1,
      populationMod: 1,
      specialTraitMod: 1,
      terrainTypes: ['Bosque', 'Cavernas', 'Colinas', 'Llanura', 'Mar', 'Manglar', 'Montañas', 'Océano', 'Selva'],
      typeCode: 'CON',
      type: 'Continental',
    }),
  ...(result > 50 &&
    result <= 60 && {
      energeticResourcesMod: 1,
      food_resources_mod: -2,
      industrial_resources_mod: 2,
      populationMod: -2,
      specialTraitMod: 0,
      terrainTypes: ['Cavernas', 'Colinas', 'Páramo', 'Lago', 'Montañas', 'Túneles'],
      typeCode: 'ARI',
      type: 'Árido',
    }),
  ...(result > 60 &&
    result <= 70 && {
      energeticResourcesMod: 2,
      food_resources_mod: -2,
      industrial_resources_mod: 2,
      populationMod: -2,
      specialTraitMod: 0,
      terrainTypes: ['Cavernas', 'Colinas', 'Desierto', 'Dunas', 'Montañas', 'Túneles'],
      typeCode: 'DES',
      type: 'Desértico',
    }),
  ...(result > 70 &&
    result <= 95 && {
      energeticResourcesMod: 1,
      food_resources_mod: 3,
      industrial_resources_mod: -1,
      populationMod: -1,
      specialTraitMod: 2,
      terrainTypes: ['Archipiélago', 'Isla', 'Mar', 'Océano'],
      typeCode: 'OCE',
      type: 'Oceánico',
    }),
  ...(result > 96 &&
    result <= 105 && {
      energeticResourcesMod: 1,
      food_resources_mod: -2,
      industrial_resources_mod: 1,
      populationMod: -2,
      specialTraitMod: 0,
      terrainTypes: ['Cavernas', 'Páramo helado', 'Glaciar', 'Mar', 'Océano'],
      typeCode: 'ART',
      type: 'Ártico',
    }),
  ...(result > 105 && {
    energeticResourcesMod: 1,
    food_resources_mod: -2,
    industrial_resources_mod: 1,
    populationMod: -3,
    specialTraitMod: 0,
    terrainTypes: ['Bosque', 'Cavernas', 'Manglar', 'Océano', 'Selva'],
    typeCode: 'PAN',
    type: 'Palustre',
  }),
});

export const habitablePlanetSize: any = (result: number) => ({
  ...(result > 0 &&
    result <= 10 && {
      cultural_development_mod: -2,
      economical_development_mod: -2,
      industrial_development_mod: -1,
      military_development_mod: 0,
      technological_development_mod: -2,
      label: 'Mini Tierra',
      size: 'mT',
    }),
  ...(result > 10 &&
    result <= 30 && {
      cultural_development_mod: -1,
      economical_development_mod: -1,
      industrial_development_mod: -1,
      military_development_mod: 0,
      technological_development_mod: -1,
      label: 'Sub Tierra',
      size: 'sT',
    }),
  ...(result > 30 &&
    result <= 60 && {
      cultural_development_mod: 0,
      economical_development_mod: 0,
      industrial_development_mod: 0,
      military_development_mod: 0,
      technological_development_mod: 0,
      label: 'Tierra',
      size: 'T',
    }),
  ...(result > 60 &&
    result <= 98 && {
      cultural_development_mod: 2,
      economical_development_mod: 2,
      industrial_development_mod: 2,
      military_development_mod: 0,
      technological_development_mod: 2,
      label: 'Super Tierra',
      size: 'ST',
    }),
  ...(result > 98 && {
    label: 'Núcleo Desnudo de Gigante Gaseoso',
    size: 'NdGg',
  }),
});

export const finalResourcesOcurrenceTable: any = {
  0: { economicalMod: -1, label: 'Muy deficitario', value: 0 },
  1: { economicalMod: -1, label: 'Deficitario', value: 1 },
  2: { economicalMod: -1, label: 'Importador', value: 2 },
  3: { economicalMod: 0, label: 'Autosuficiente', value: 3 },
  4: { economicalMod: 1, label: 'Exportador', value: 4 },
  5: { economicalMod: 2, label: 'Excedentario', value: 5 },
  6: { economicalMod: 3, label: 'Superavitario', value: 6 },
};

export const resourcesOcurrenceTable: any = {
  0: { economicalMod: -1, value: 0 },
  1: { economicalMod: -1, value: 1 },
  2: { economicalMod: -1, value: 2 },
  3: { economicalMod: 0, value: 3 },
  4: { economicalMod: 1, value: 4 },
  5: { economicalMod: 2, value: 5 },
  6: { economicalMod: 3, value: 6 },
};

export const obtainRangedValue = (
  min: number,
  max: number,
  modByPlanetType: number,
  rangeMin: number,
  rangeMax: number,
  specialMod: number,
  table: any,
) => {
  let modValue = generateRandomNumber(rangeMin, rangeMax) + modByPlanetType + specialMod;
  if (modValue > max) {
    modValue = max;
  } else if (modValue < min) {
    modValue = min;
  }
  return table[modValue];
};

export const habitablePlanetPopulationTable: any = {
  0: {
    cultural_development_mod: -4,
    economical_development_mod: -4,
    industrial_development_mod: -4,
    military_development_mod: 0,
    technological_development_mod: -4,
    label: 'Decenas',
    value: 0,
  },
  1: {
    cultural_development_mod: -4,
    economical_development_mod: -4,
    industrial_development_mod: -4,
    military_development_mod: 0,
    technological_development_mod: -4,
    label: 'Centenas',
    value: 1,
  },
  2: {
    cultural_development_mod: -3,
    economical_development_mod: -3,
    industrial_development_mod: -3,
    military_development_mod: 0,
    technological_development_mod: -3,
    label: 'Millares',
    value: 2,
  },
  3: {
    cultural_development_mod: -2,
    economical_development_mod: -2,
    industrial_development_mod: -2,
    military_development_mod: 0,
    technological_development_mod: -2,
    label: 'Decenas de miles',
    value: 3,
  },
  4: {
    cultural_development_mod: -1,
    economical_development_mod: -1,
    industrial_development_mod: -1,
    military_development_mod: 0,
    technological_development_mod: -1,
    label: 'Centenas de miles',
    value: 4,
  },
  5: {
    cultural_development_mod: 0,
    economical_development_mod: 0,
    industrial_development_mod: 0,
    military_development_mod: 0,
    technological_development_mod: 0,
    label: 'Millones',
    value: 5,
  },
  6: {
    cultural_development_mod: 1,
    economical_development_mod: 1,
    industrial_development_mod: 1,
    military_development_mod: 0,
    technological_development_mod: 1,
    label: 'Decenas de millones',
    value: 6,
  },
  7: {
    cultural_development_mod: 2,
    economical_development_mod: 2,
    industrial_development_mod: 2,
    military_development_mod: 0,
    technological_development_mod: 2,
    label: 'Cientos de Millones',
    value: 7,
  },
  8: {
    cultural_development_mod: 3,
    economical_development_mod: 3,
    industrial_development_mod: 3,
    military_development_mod: 0,
    technological_development_mod: 3,
    label: 'Miles de Millones',
    value: 8,
  },
  9: {
    cultural_development_mod: 4,
    economical_development_mod: 4,
    industrial_development_mod: 4,
    military_development_mod: 0,
    technological_development_mod: 4,
    label: 'Decenas de miles de Millones',
    value: 9,
  },
};

export const generateSystemConnectivity: any | null = (randomNumber: number, roleMod: number) => {
  const finalRandomNumber = randomNumber - roleMod;
  switch (true) {
    case finalRandomNumber < 2:
      return {
        stable: generateRandomNumber(1, 3) + 1,
        unstable: generateRandomNumber(1, 3) + 1,
        valiangric: generateRandomNumber(1, 2),
      };
    case finalRandomNumber >= 2 && finalRandomNumber < 30:
      return {
        stable: generateRandomNumber(1, 2) + 1,
        unstable: generateRandomNumber(1, 3),
        valiangric: generateRandomNumber(0, 1),
      };
    case finalRandomNumber >= 31 && finalRandomNumber < 60:
      return {
        stable: generateRandomNumber(1, 2),
        unstable: generateRandomNumber(1, 2),
        valiangric: 0,
      };
    case finalRandomNumber >= 61 && finalRandomNumber < 90:
      return {
        stable: generateRandomNumber(0, 1),
        unstable: generateRandomNumber(0, 1),
        valiangric: 0,
      };
    case finalRandomNumber >= 90:
      return {
        stable: 0,
        unstable: generateRandomNumber(0, 1),
        valiangric: 0,
      };
  }
};

export const obtainSpecialTrait = (randomNumber: any, specialFunc: any, previousMods: any) => {
  let special = specialFunc;
  if (randomNumber > 85) {
    previousMods.energeticResourcesMod += special.energeticResourcesMod;
    previousMods.food_resources_mod += special.food_resources_mod;
    previousMods.industrial_resources_mod += special.industrial_resources_mod;
    previousMods.populationMod += special.populationMod;
    previousMods.specials = [...previousMods.specials, special.label];
  }
  if (!randomNumber) {
    previousMods.energeticResourcesMod += special.energeticResourcesMod;
    previousMods.food_resources_mod += special.food_resources_mod;
    previousMods.industrial_resources_mod += special.industrial_resources_mod;
    previousMods.populationMod += special.populationMod;
    if (special.mayorMoons || special.minorMoons) {
      previousMods.specials = [
        ...previousMods.specials,
        {
          ...(special.mayorMoons > 0 && {
            mayorMoons: special.mayorMoons,
          }),
          ...(special.minorMoons > 0 && {
            minorMoons: special.minorMoons,
          }),
        },
      ];
    }
  }
  return previousMods;
};

export const obtainAllModsFromSpecials = () => {
  let allMods: any = {
    energeticResourcesMod: 0,
    food_resources_mod: 0,
    industrial_resources_mod: 0,
    populationMod: 0,
    specials: [],
  };

  const randomForAtmosphericalSpecial = generateRandomNumber(1, 100);
  allMods = obtainSpecialTrait(randomForAtmosphericalSpecial, generatePlanetaryAtmosphericalTrait(), allMods);
  const randomForAstrophisycalSpecial = generateRandomNumber(1, 100);
  allMods = obtainSpecialTrait(randomForAstrophisycalSpecial, generatePlanetaryAstrophisycalTrait(), allMods);
  const randomForBiologicalSpecial = generateRandomNumber(1, 100);
  allMods = obtainSpecialTrait(randomForBiologicalSpecial, generatePlanetaryBiologicalTrait(), allMods);
  const randomForGeophisycalSpecial = generateRandomNumber(1, 100);
  allMods = obtainSpecialTrait(randomForGeophisycalSpecial, generatePlanetaryGeophisycalSpecialTrait(), allMods);
  const randomForHidrosphericalSpecial = generateRandomNumber(1, 100);
  allMods = obtainSpecialTrait(randomForHidrosphericalSpecial, generatePlanetaryHidrosphericalTrait(), allMods);
  allMods = obtainSpecialTrait(null, generatePlanetaryMoons(), allMods);
  const randomForOtherSpecial = generateRandomNumber(1, 100);
  allMods = obtainSpecialTrait(randomForOtherSpecial, generatePlanetaryOtherTrait(), allMods);
  const randomForSocialSpecial = generateRandomNumber(1, 100);
  allMods = obtainSpecialTrait(randomForSocialSpecial, generatePlanetarySocialTrait(), allMods);

  return allMods;
};

// Sectores

export const connectedSystemsRangePerSectorSize: any = {
  small: [10, 50],
  medium: [51, 100],
  large: [101, 151],
};

export const getNumberOfConnectedSystemsPerSector = (sectorSize: string) => {
  const range = connectedSystemsRangePerSectorSize[sectorSize];

  return generateRandomNumber(range[0], range[1]);
};

export const getNumberOfSystemsWithHabitablePlanets = (systemsNumber: number) => {
  let systemsWithHabitablePlanets = 0;
  for (let i = 0; i <= systemsNumber; i += 1) {
    if (generateRandomNumber(1, 100) >= 95) {
      systemsWithHabitablePlanets += 1;
    }
  }

  return systemsWithHabitablePlanets;
};
