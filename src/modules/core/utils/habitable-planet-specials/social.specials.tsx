import { obtainDataFromTable } from '../utils';

export const obtainDominantFactionType = [
  {
    max: 15,
    min: 0,
    valueToReturn: {
      type: 'Militar',
    },
  },
  {
    max: 30,
    min: 16,
    valueToReturn: {
      type: 'Religiosa',
    },
  },
  {
    max: 50,
    min: 31,
    valueToReturn: {
      type: 'Corporación',
    },
  },
  {
    max: 70,
    min: 51,
    valueToReturn: {
      type: 'Criminal',
    },
  },
  {
    max: 90,
    min: 71,
    valueToReturn: {
      type: 'Psiónica/Noomántica',
    },
  },
  {
    max: 100,
    min: 91,
    valueToReturn: {
      type: 'Otra',
    },
  },
];

export const obtainPresentientPhilum = [
  {
    max: 15,
    min: 0,
    valueToReturn: {
      type: 'Artropoide',
    },
  },
  {
    max: 30,
    min: 16,
    valueToReturn: {
      type: 'Moluscoide',
    },
  },
  {
    max: 50,
    min: 31,
    valueToReturn: {
      type: 'Ornitoide',
    },
  },
  {
    max: 70,
    min: 51,
    valueToReturn: {
      type: 'Ictioide',
    },
  },
  {
    max: 90,
    min: 71,
    valueToReturn: {
      type: 'Fungoide',
    },
  },
  {
    max: 110,
    min: 91,
    valueToReturn: {
      type: 'Mamiferoide',
    },
  },
  {
    max: 120,
    min: 111,
    valueToReturn: {
      type: 'Vegoide',
    },
  },
  {
    max: 125,
    min: 121,
    valueToReturn: {
      type: 'Litoide',
    },
  },
  {
    max: 130,
    min: 126,
    valueToReturn: {
      type: 'Anelidoide',
    },
  },
  {
    max: 135,
    min: 131,
    valueToReturn: {
      type: 'Equinodermoide',
    },
  },
  {
    max: 140,
    min: 136,
    valueToReturn: {
      type: 'Híbrido',
    },
  },
];

export const planetarySocialTraitTable = [
  {
    max: 15,
    min: 0,
    valueToReturn: {
      label: 'Facción Dominante',
      energeticResourcesMod: 0,
      food_resources_mod: 0,
      industrial_resources_mod: 0,
      populationMod: 0,
    },
  },
  {
    max: 30,
    min: 16,
    valueToReturn: {
      label: 'Mercado/Feria',
      energeticResourcesMod: 0,
      food_resources_mod: 0,
      industrial_resources_mod: 0,
      populationMod: 0,
    },
  },
  {
    max: 50,
    min: 31,
    valueToReturn: {
      label: 'Edificio/Sede',
      energeticResourcesMod: 0,
      food_resources_mod: 0,
      industrial_resources_mod: 0,
      populationMod: 0,
    },
  },
  {
    max: 60,
    min: 51,
    valueToReturn: {
      label: 'Pandemia',
      energeticResourcesMod: 0,
      food_resources_mod: 0,
      industrial_resources_mod: 0,
      populationMod: 0,
    },
  },
  {
    max: 65,
    min: 61,
    valueToReturn: {
      label: 'Presintientes',
      energeticResourcesMod: 0,
      food_resources_mod: 0,
      industrial_resources_mod: 0,
      populationMod: 0,
    },
  },
  {
    max: 70,
    min: 66,
    valueToReturn: {
      label: 'Insurgencia',
      energeticResourcesMod: 0,
      food_resources_mod: 0,
      industrial_resources_mod: 0,
      populationMod: 0,
    },
  },
  {
    max: 80,
    min: 71,
    valueToReturn: {
      label: 'Disturbios Sociales',
      energeticResourcesMod: 0,
      food_resources_mod: 0,
      industrial_resources_mod: 0,
      populationMod: 0,
    },
  },
];

export const generatePlanetarySocialTrait = () => {
  let data: any = obtainDataFromTable(planetarySocialTraitTable);
  let dataToSend = { ...data };
  const obtainFaction: any = obtainDataFromTable(obtainDominantFactionType);
  const obtainPresentient: any = obtainDataFromTable(obtainPresentientPhilum);
  if (dataToSend.label === 'Facción Dominante' || dataToSend.label === 'Edificio/Sede') {
    dataToSend.label = `${dataToSend.label} (${obtainFaction.type})`;
  }
  if (dataToSend.label === 'Presintientes') {
    dataToSend.label = `${dataToSend.label} (${obtainPresentient.type})`;
  }
  return dataToSend;
};
