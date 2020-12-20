import { obtainDataFromTable } from '../utils';

export const planetaryGeophisycalTraitTable = [
  {
    max: 15,
    min: 0,
    valueToReturn: {
      label: 'Yacimientos Ubérrimos',
      energeticResourcesMod: 1,
      food_resources_mod: 0,
      industrial_resources_mod: 3,
      populationMod: 0,
    },
  },
  {
    max: 30,
    min: 16,
    valueToReturn: {
      label: 'Yacimientos Exóticos',
      energeticResourcesMod: 0,
      food_resources_mod: 0,
      industrial_resources_mod: 1,
      populationMod: 1,
    },
  },
  {
    max: 50,
    min: 31,
    valueToReturn: {
      label: 'Erosión Caótica',
      energeticResourcesMod: 0,
      food_resources_mod: 0,
      industrial_resources_mod: 1,
      populationMod: -1,
    },
  },
  {
    max: 60,
    min: 51,
    valueToReturn: {
      label: 'Pobreza Mineral',
      energeticResourcesMod: 0,
      food_resources_mod: 0,
      industrial_resources_mod: -2,
      populationMod: 0,
    },
  },
  {
    max: 70,
    min: 61,
    valueToReturn: {
      label: 'Campo Magnético Inestable',
      energeticResourcesMod: 1,
      food_resources_mod: 0,
      industrial_resources_mod: 0,
      populationMod: -2,
    },
  },
  {
    max: 80,
    min: 71,
    valueToReturn: {
      label: 'Cavernoso',
      energeticResourcesMod: 0,
      food_resources_mod: 0,
      industrial_resources_mod: 2,
      populationMod: 2,
    },
  },
  {
    max: 90,
    min: 81,
    valueToReturn: {
      label: 'Geotermal',
      energeticResourcesMod: 2,
      food_resources_mod: 0,
      industrial_resources_mod: 1,
      populationMod: 0,
    },
  },
  {
    max: 100,
    min: 91,
    valueToReturn: {
      label: 'Vulcanismo Extremo',
      energeticResourcesMod: 1,
      food_resources_mod: 0,
      industrial_resources_mod: 0,
      populationMod: -2,
    },
  },
  {
    max: 110,
    min: 101,
    valueToReturn: {
      label: 'Tectónica Inestable',
      energeticResourcesMod: 1,
      food_resources_mod: 0,
      industrial_resources_mod: 0,
      populationMod: -2,
    },
  },
  {
    max: 120,
    min: 111,
    valueToReturn: {
      label: 'Núcleo Rígido',
      energeticResourcesMod: -2,
      food_resources_mod: 0,
      industrial_resources_mod: -2,
      populationMod: 0,
    },
  },
  {
    max: 125,
    min: 121,
    valueToReturn: {
      label: 'Planeta Binario',
      energeticResourcesMod: 3,
      food_resources_mod: 0,
      industrial_resources_mod: 3,
      populationMod: 2,
    },
  },
  {
    max: 135,
    min: 126,
    valueToReturn: {
      label: 'Lagos Subglaciares',
      energeticResourcesMod: 0,
      food_resources_mod: 1,
      industrial_resources_mod: 0,
      populationMod: 1,
    },
  },
];

export const generatePlanetaryGeophisycalSpecialTrait = () => {
  let dataToSend: any = obtainDataFromTable(planetaryGeophisycalTraitTable);

  return dataToSend;
};
