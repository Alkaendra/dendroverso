import { generateRandomNumber, obtainDataFromTable } from '../utils';

const getUnusualPressure = () => {
  const generateRandom = generateRandomNumber(1, 100);
  const unusualPressure = {
    ...(generateRandom >= 1 &&
      generateRandom <= 55 && {
        pressure: generateRandomNumber(0.8, 1),
      }),
    ...(generateRandom >= 56 &&
      generateRandom <= 90 && {
        pressure: generateRandomNumber(1, 2),
      }),
    ...(generateRandom >= 91 &&
      generateRandom <= 95 && {
        pressure: generateRandomNumber(0.5, 0.8),
      }),
    ...(generateRandom >= 96 && {
      pressure: generateRandomNumber(2, 5),
    }),
  };
  return unusualPressure;
};

export const planetaryAtmosphericalTable = [
  {
    max: 15,
    min: 0,
    valueToReturn: {
      label: 'Sistemas Tormentosos Permanentes',
      energeticResourcesMod: 2,
      food_resources_mod: 0,
      industrial_resources_mod: -1,
      populationMod: -2,
    },
  },
  {
    max: 30,
    min: 16,
    valueToReturn: {
      label: 'Irradiado',
      energeticResourcesMod: 0,
      food_resources_mod: 0,
      industrial_resources_mod: 1,
      populationMod: -2,
    },
  },
  {
    max: 50,
    min: 31,
    valueToReturn: {
      label: 'Estaciones Extremas',
      energeticResourcesMod: 2,
      food_resources_mod: 0,
      industrial_resources_mod: -1,
      populationMod: -2,
    },
  },
  {
    max: 60,
    min: 51,
    valueToReturn: {
      label: 'Vientos Fertilizadores',
      energeticResourcesMod: 0,
      food_resources_mod: 2,
      industrial_resources_mod: 0,
      populationMod: 1,
    },
  },
  {
    max: 65,
    min: 61,
    valueToReturn: {
      label: 'Presión Inusual',
      energeticResourcesMod: 0,
      food_resources_mod: 0,
      industrial_resources_mod: 0,
      populationMod: -1,
    },
  },
  {
    max: 70,
    min: 66,
    valueToReturn: {
      label: 'Contaminante Atmosférico Natural',
      energeticResourcesMod: 0,
      food_resources_mod: 0,
      industrial_resources_mod: 1,
      populationMod: -1,
    },
  },
  {
    max: 80,
    min: 71,
    valueToReturn: {
      label: 'Equilibrio Atmosférico',
      energeticResourcesMod: 0,
      food_resources_mod: 1,
      industrial_resources_mod: 0,
      populationMod: 1,
    },
  },
  {
    max: 90,
    min: 81,
    valueToReturn: {
      label: 'Lluvia Ácida',
      energeticResourcesMod: 0,
      food_resources_mod: -1,
      industrial_resources_mod: 1,
      populationMod: -1,
    },
  },
];

export const generatePlanetaryAtmosphericalTrait = () => {
  let data: any = obtainDataFromTable(planetaryAtmosphericalTable);
  let dataToSend = { ...data };
  if (dataToSend.label === 'Presión Inusual') {
    const unusualPressure: any = getUnusualPressure();
    dataToSend.label = `${dataToSend.label} (${unusualPressure.pressure}atms)`;
  }
  return dataToSend;
};
