import { obtainDataFromTable } from '../utils';

export const planetaryBiologicalTraitTable = [
  {
    max: 15,
    min: 0,
    valueToReturn: {
      label: 'Flora Exótica',
      energeticResourcesMod: 0,
      foodResourcesMod: 1,
      industrialResourcesMod: 0,
      populationMod: -1,
    },
  },
  {
    max: 30,
    min: 16,
    valueToReturn: {
      label: 'Fauna Exótica',
      energeticResourcesMod: 0,
      foodResourcesMod: 0,
      industrialResourcesMod: 1,
      populationMod: -1,
    },
  },
  {
    max: 50,
    min: 31,
    valueToReturn: {
      label: 'Biomas Inestables',
      energeticResourcesMod: 0,
      foodResourcesMod: -1,
      industrialResourcesMod: 1,
      populationMod: -1,
    },
  },
  {
    max: 60,
    min: 51,
    valueToReturn: {
      label: 'Megafauna',
      energeticResourcesMod: 0,
      foodResourcesMod: 1,
      industrialResourcesMod: 1,
      populationMod: -1,
    },
  },
  {
    max: 70,
    min: 61,
    valueToReturn: {
      label: 'Microbiota Hostil',
      energeticResourcesMod: 0,
      foodResourcesMod: 0,
      industrialResourcesMod: -1,
      populationMod: -3,
    },
  },
  {
    max: 75,
    min: 71,
    valueToReturn: {
      label: 'Presencia de Aberraciones',
      energeticResourcesMod: 0,
      foodResourcesMod: 0,
      industrialResourcesMod: 0,
      populationMod: -3,
    },
  },
  {
    max: 85,
    min: 76,
    valueToReturn: {
      label: 'Inhóspito',
      energeticResourcesMod: 0,
      foodResourcesMod: 0,
      industrialResourcesMod: 0,
      populationMod: -3,
    },
  },
  {
    max: 95,
    min: 86,
    valueToReturn: {
      label: 'Utopía Ecológica',
      energeticResourcesMod: 0,
      foodResourcesMod: 3,
      industrialResourcesMod: 0,
      populationMod: 3,
    },
  },
];

export const generatePlanetaryBiologicalTrait = () => {
  let dataToSend: any = obtainDataFromTable(planetaryBiologicalTraitTable);

  return dataToSend;
};
