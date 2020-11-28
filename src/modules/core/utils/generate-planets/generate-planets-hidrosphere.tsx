import { generateRandomNumber, generateRandomFloat } from '../utils';

export interface HidrosphereData {
  hidrosphereIHMod: number;
  percentage: number;
  value: number;
}

// Obtenermos la hidrosfera a partir del tamaño del planeta
const getHidrosfera = (type: string) => {
  let hidrosfera: HidrosphereData | {} = {
    hidrosphereIHMod: 0,
    percentage: 0.0,
    value: 0,
  };

  // Modificador hidrosférico por tipo de planeta
  let mta: any = {
    ...(type === 'mT' && {
      value: -4,
    }),
    ...(type === 'sT' && {
      value: -3,
    }),
    ...(type === 'T' && {
      value: -1,
    }),
    ...(type === 'ST' && {
      value: 0,
    }),
    ...(type === 'NdGg' && {
      value: 1,
    }),
  };

  let ale = generateRandomNumber(0, 12);

  let valor: number = ale + mta.value;

  hidrosfera = {
    ...(valor < 1 && {
      hidrosphereIHMod: -3,
      percentage: generateRandomFloat(0.0, 0.5),
      value: valor,
    }),
    ...(valor === 1 && {
      hidrosphereIHMod: -3,
      percentage: generateRandomFloat(0.6, 4.0),
      value: valor,
    }),
    ...(valor === 2 && {
      hidrosphereIHMod: -2,
      percentage: generateRandomFloat(5.0, 14.0),
      value: valor,
    }),
    ...(valor === 3 && {
      hidrosphereIHMod: -1,
      percentage: generateRandomFloat(15.0, 24.0),
      value: valor,
    }),
    ...(valor === 4 && {
      hidrosphereIHMod: 0,
      percentage: generateRandomFloat(25.0, 34.0),
      value: valor,
    }),
    ...(valor === 5 && {
      hidrosphereIHMod: 1,
      percentage: generateRandomFloat(35.0, 44.0),
      value: valor,
    }),
    ...(valor === 6 && {
      hidrosphereIHMod: 1,
      percentage: generateRandomFloat(45.0, 54.0),
      value: valor,
    }),
    ...(valor === 7 && {
      hidrosphereIHMod: 1,
      percentage: generateRandomFloat(55.0, 64.0),
      value: valor,
    }),
    ...(valor === 8 && {
      hidrosphereIHMod: 1,
      percentage: generateRandomFloat(65.0, 74.0),
      value: valor,
    }),
    ...(valor === 9 && {
      hidrosphereIHMod: 1,
      percentage: generateRandomFloat(75.0, 84.0),
      value: valor,
    }),
    ...(valor === 10 && {
      hidrosphereIHMod: 2,
      percentage: generateRandomFloat(85.0, 94.0),
      value: valor,
    }),
    ...(valor >= 11 && {
      hidrosphereIHMod: 2,
      percentage: generateRandomFloat(95.0, 100.0),
      value: valor,
    }),
  };

  return hidrosfera as HidrosphereData;
};

export const getPlanetaryHidrosphereData = (type: string): HidrosphereData => {
  const hidrosfera = getHidrosfera(type);

  return {
    hidrosphereIHMod: hidrosfera.hidrosphereIHMod,
    value: hidrosfera.value,
    percentage: hidrosfera.percentage,
  };
};
