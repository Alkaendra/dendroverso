//  Genéricos

import { generatePlanetaryGeophisycalSpecialTrait } from './habitable-planet-specials/geophisycal-specials';
import { generatePlanetaryAtmosphericalTrait } from './habitable-planet-specials/atmospherical-specials';
import { generatePlanetaryAstrophisycalTrait } from './habitable-planet-specials/astrophisycal-specials';
import { generatePlanetaryBiologicalTrait } from './habitable-planet-specials/biological-specials';
import { generatePlanetaryHidrosphericalTrait } from './habitable-planet-specials/hidrospherical-specials';
import { generatePlanetaryOtherTrait } from './habitable-planet-specials/other-specials';
import { generatePlanetaryMoons } from './habitable-planet-specials/moon-specials';

export const generateRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

// Planetas

export const habitablePlanetType: any = (result: number) => ({
  ...(result > 0 &&
    result <= 10 && {
      energeticResourcesMod: 0,
      foodResourcesMod: -2,
      industrialResourcesMod: 2,
      populationMod: -2,
      specialTraitMod: 0,
      typeCode: 'ALP',
      type: 'Alpino',
    }),
  ...(result > 10 &&
    result <= 20 && {
      energeticResourcesMod: 1,
      foodResourcesMod: -2,
      industrialResourcesMod: 1,
      populationMod: -2,
      specialTraitMod: 0,
      typeCode: 'BOR',
      type: 'Boreal',
    }),
  ...(result > 20 &&
    result <= 30 && {
      energeticResourcesMod: 1,
      foodResourcesMod: 1,
      industrialResourcesMod: 1,
      populationMod: -1,
      specialTraitMod: 1,
      typeCode: 'SEL',
      type: 'Selvático',
    }),
  ...(result > 30 &&
    result <= 35 && {
      energeticResourcesMod: 0,
      foodResourcesMod: 3,
      industrialResourcesMod: 1,
      populationMod: 2,
      specialTraitMod: 2,
      typeCode: 'JAR',
      type: 'Jardín',
    }),
  ...(result > 35 &&
    result <= 50 && {
      energeticResourcesMod: 0,
      foodResourcesMod: 2,
      industrialResourcesMod: 1,
      populationMod: 1,
      specialTraitMod: 1,
      typeCode: 'CON',
      type: 'Continental',
    }),
  ...(result > 50 &&
    result <= 60 && {
      energeticResourcesMod: 1,
      foodResourcesMod: -2,
      industrialResourcesMod: 2,
      populationMod: -2,
      specialTraitMod: 0,
      typeCode: 'ARI',
      type: 'Árido',
    }),
  ...(result > 60 &&
    result <= 70 && {
      energeticResourcesMod: 2,
      foodResourcesMod: -2,
      industrialResourcesMod: 2,
      populationMod: -2,
      specialTraitMod: 0,
      typeCode: 'DES',
      type: 'Desértico',
    }),
  ...(result > 70 &&
    result <= 95 && {
      energeticResourcesMod: 1,
      foodResourcesMod: 3,
      industrialResourcesMod: -1,
      populationMod: -1,
      specialTraitMod: 2,
      typeCode: 'OCE',
      type: 'Oceánico',
    }),
  ...(result > 95 && {
    energeticResourcesMod: 1,
    foodResourcesMod: -2,
    industrialResourcesMod: 1,
    populationMod: -2,
    specialTraitMod: 0,
    typeCode: 'ART',
    type: 'Ártico',
  }),
});

export const habitablePlanetSize: any = (result: number) => ({
  ...(result > 0 &&
    result <= 10 && {
      label: 'Mini Tierra',
      size: 'mT',
    }),
  ...(result > 10 &&
    result <= 30 && {
      label: 'Sub Tierra',
      size: 'sT',
    }),
  ...(result > 30 &&
    result <= 60 && {
      label: 'Tierra',
      size: 'T',
    }),
  ...(result > 60 &&
    result <= 98 && {
      label: 'Super Tierra',
      size: 'ST',
    }),
  ...(result > 98 && {
    label: 'Núcleo Desnudo de Gigante Gaseoso',
    size: 'NdGg',
  }),
});

export const resourcesOcurrenceTable: any = {
  0: { label: 'Muy deficitario', value: 0 },
  1: { label: 'Deficitario', value: 1 },
  2: { label: 'Importador', value: 2 },
  3: { label: 'Autosuficiente', value: 3 },
  4: { label: 'Exportador', value: 4 },
  5: { label: 'Excedentario', value: 5 },
  6: { label: 'Superavitario', value: 6 },
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
  0: { label: 'Decenas', value: 0 },
  1: { label: 'Centenas', value: 1 },
  2: { label: 'Millares', value: 2 },
  3: { label: 'Decenas de miles', value: 3 },
  4: { label: 'Centenas de miles', value: 4 },
  5: { label: 'Millones', value: 5 },
  6: { label: 'Decenas de millones', value: 6 },
  7: { label: 'Cientos de Millones', value: 7 },
  8: { label: 'Miles de Millones', value: 8 },
  9: { label: 'Decenas de miles de Millones', value: 9 },
};

export const generateSystemConnectivity = (randomNumber: number) => {
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

export const obtainSpecialTrait = (randomNumber: any, specialFunc: any, previousMods: any) => {
  let special = specialFunc;
  if (randomNumber > 85) {
    previousMods.energeticResourcesMod += special.energeticResourcesMod;
    previousMods.foodResourcesMod += special.foodResourcesMod;
    previousMods.industrialResourcesMod += special.industrialResourcesMod;
    previousMods.populationMod += special.populationMod;
    previousMods.specials = [...previousMods.specials, special.label];
  }
  if (!randomNumber) {
    previousMods.energeticResourcesMod += special.energeticResourcesMod;
    previousMods.foodResourcesMod += special.foodResourcesMod;
    previousMods.industrialResourcesMod += special.industrialResourcesMod;
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
    foodResourcesMod: 0,
    industrialResourcesMod: 0,
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
