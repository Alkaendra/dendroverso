import { obtainDataFromTable } from '../utils';

export const planetaryHidrosphericalTraitTable = [
  {
    max: 15,
    min: 0,
    valueToReturn: {
      label: 'Océanos Hipersalinos',
      energeticResourcesMod: 0,
      food_resources_mod: -1,
      industrial_resources_mod: 1,
      populationMod: -2,
    },
  },
  {
    max: 30,
    min: 16,
    valueToReturn: {
      label: 'Química Oceánica Inusual',
      energeticResourcesMod: 0,
      food_resources_mod: -1,
      industrial_resources_mod: 1,
      populationMod: -1,
    },
  },
  {
    max: 50,
    min: 31,
    valueToReturn: {
      label: 'Estaciones Extremas',
      energeticResourcesMod: 2,
      food_resources_mod: 0,
      industrial_resources_mod: 0,
      populationMod: -2,
    },
  },
  {
    max: 60,
    min: 51,
    valueToReturn: {
      label: 'Mareas Extremas',
      energeticResourcesMod: 2,
      food_resources_mod: -1,
      industrial_resources_mod: 0,
      populationMod: -1,
    },
  },
  {
    max: 65,
    min: 61,
    valueToReturn: {
      label: 'Océanos Metálicos',
      energeticResourcesMod: 0,
      food_resources_mod: -1,
      industrial_resources_mod: 2,
      populationMod: -1,
    },
  },
  {
    max: 70,
    min: 66,
    valueToReturn: {
      label: 'Equilibrio Oceánico',
      energeticResourcesMod: 1,
      food_resources_mod: 2,
      industrial_resources_mod: 0,
      populationMod: 1,
    },
  },
  {
    max: 80,
    min: 71,
    valueToReturn: {
      label: 'Acuíferos Ingentes',
      energeticResourcesMod: 1,
      food_resources_mod: 2,
      industrial_resources_mod: 0,
      populationMod: 2,
    },
  },
];

export const generatePlanetaryHidrosphericalTrait = () => {
  let dataToSend: any = obtainDataFromTable(planetaryHidrosphericalTraitTable);

  return dataToSend;
};
