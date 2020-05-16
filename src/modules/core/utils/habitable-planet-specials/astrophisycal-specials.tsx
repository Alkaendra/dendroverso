import { generateRandomNumber, generateRandomFloat, obtainDataFromTable } from '../utils';

const getAxisTilt = (generateRandom: number) => {
  const axisTilt = {
    ...(generateRandom >= 1 &&
      generateRandom <= 55 && {
        tilt: generateRandomNumber(35, 45),
      }),
    ...(generateRandom >= 56 &&
      generateRandom <= 80 && {
        tilt: generateRandomNumber(46, 60),
      }),
    ...(generateRandom >= 81 &&
      generateRandom <= 95 && {
        tilt: generateRandomNumber(61, 85),
      }),
    ...(generateRandom >= 96 && {
      tilt: generateRandomNumber(86, 90),
    }),
  };
  return axisTilt;
};

const getUnusualGravityValue = (generateRandom: number) => {
  const unusualGravity = {
    ...(generateRandom >= 1 &&
      generateRandom <= 55 && {
        g: generateRandomFloat(0.7, 1),
      }),
    ...(generateRandom >= 56 &&
      generateRandom <= 90 && {
        g: generateRandomFloat(1, 1.3),
      }),
    ...(generateRandom >= 91 &&
      generateRandom <= 95 && {
        g: generateRandomFloat(0.5, 0.7),
      }),
    ...(generateRandom >= 96 && {
      g: generateRandomFloat(1.3, 1.5),
    }),
  };
  return unusualGravity;
};

export const planetaryAstrophisycalTraitTable = [
  {
    max: 15,
    min: 1,
    valueToReturn: {
      label: 'Inclinación Inusual del eje',
      energeticResourcesMod: 2,
      foodResourcesMod: 0,
      industrialResourcesMod: 1,
      populationMod: -2,
    },
  },
  {
    max: 30,
    min: 16,
    valueToReturn: {
      label: 'Anclado de Marea',
      energeticResourcesMod: 3,
      foodResourcesMod: -1,
      industrialResourcesMod: 0,
      populationMod: -3,
    },
  },
  {
    max: 45,
    min: 31,
    valueToReturn: {
      label: 'Gravedad no estándar',
      energeticResourcesMod: 0,
      foodResourcesMod: 0,
      industrialResourcesMod: 0,
      populationMod: -1,
    },
  },
  {
    max: 60,
    min: 46,
    valueToReturn: {
      label: 'Anillos',
      energeticResourcesMod: 0,
      foodResourcesMod: 0,
      industrialResourcesMod: 2,
      populationMod: 0,
    },
  },
  {
    max: 75,
    min: 61,
    valueToReturn: {
      label: 'Órbita Excéntrica',
      energeticResourcesMod: 2,
      foodResourcesMod: -1,
      industrialResourcesMod: 0,
      populationMod: -1,
    },
  },
  {
    max: 90,
    min: 76,
    valueToReturn: {
      label: 'Eclipticidad Excéntrica',
      energeticResourcesMod: 2,
      foodResourcesMod: -1,
      industrialResourcesMod: 1,
      populationMod: -1,
    },
  },
  {
    max: 100,
    min: 91,
    valueToReturn: {
      label: 'Rotación Retrógrada',
      energeticResourcesMod: 0,
      foodResourcesMod: 0,
      industrialResourcesMod: 0,
      populationMod: 0,
    },
  },
  {
    max: 110,
    min: 101,
    valueToReturn: {
      label: 'Gigante Gaseoso Habitado',
      energeticResourcesMod: 0,
      foodResourcesMod: 0,
      industrialResourcesMod: 0,
      populationMod: 0,
    },
  },
  {
    max: 115,
    min: 111,
    valueToReturn: {
      label: 'Estrella de Neutrones en el Sistema',
      energeticResourcesMod: 0,
      foodResourcesMod: 0,
      industrialResourcesMod: 1,
      populationMod: -2,
    },
  },
  {
    max: 118,
    min: 116,
    valueToReturn: {
      label: 'Agujero Negro en el Sistema',
      energeticResourcesMod: 1,
      foodResourcesMod: 0,
      industrialResourcesMod: 1,
      populationMod: -3,
    },
  },
  {
    max: 122,
    min: 119,
    valueToReturn: {
      label: 'Luna de un Gigante Gaseoso',
      energeticResourcesMod: 1,
      foodResourcesMod: 0,
      industrialResourcesMod: 1,
      populationMod: -1,
    },
  },
];

export const generatePlanetaryAstrophisycalTrait = () => {
  let data: any = obtainDataFromTable(planetaryAstrophisycalTraitTable);
  let dataToSend = { ...data };

  let obtainAxisTilt: any = getAxisTilt(generateRandomNumber(1, 100));
  let obtainEclepticityTilt: any = generateRandomNumber(1, 360);
  let obtainGravityValue: any = getUnusualGravityValue(generateRandomNumber(1, 100));
  if (dataToSend.label === 'Inclinación Inusual del eje') {
    console.log('beforeAxis ', obtainAxisTilt);
    dataToSend.label = `${dataToSend.label} (${obtainAxisTilt.tilt}°)`;
  }
  if (dataToSend.label === 'Gravedad no estándar') {
    dataToSend.label = `${dataToSend.label} (${obtainGravityValue.g}g)`;
  }
  if (dataToSend.label === 'Eclipticidad Excéntrica') {
    dataToSend.label = `${dataToSend.label} (${obtainEclepticityTilt}°)`;
  }
  return dataToSend;
};
