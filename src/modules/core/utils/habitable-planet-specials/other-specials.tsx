import { generateRandomNumber, obtainDataFromTable } from '../utils';

const generateRuinsData = () => {
  const ageRandomNumber = generateRandomNumber(1, 100);
  const ruinsAge: any = {
    ...(ageRandomNumber > 0 &&
      ageRandomNumber <= 15 && {
        age: 'Preespaciales',
      }),
    ...(ageRandomNumber >= 16 &&
      ageRandomNumber <= 85 && {
        age: 'Espaciales',
      }),
    ...(ageRandomNumber >= 86 && {
      age: 'Recientes',
    }),
  };

  const sizeRandomNumber = generateRandomNumber(1, 100);
  const ruinsSize: any = {
    ...(sizeRandomNumber > 0 &&
      sizeRandomNumber <= 15 && {
        size: 'Pequeñas',
      }),
    ...(sizeRandomNumber >= 16 &&
      sizeRandomNumber <= 75 && {
        size: 'Estándar',
      }),
    ...(sizeRandomNumber >= 76 &&
      sizeRandomNumber <= 95 && {
        size: 'Grandes',
      }),
    ...(sizeRandomNumber >= 96 && {
      size: 'Enormes',
    }),
  };
  const locationRandomNumber = generateRandomNumber(1, 100);
  const ruinsLocation: any = {
    ...(locationRandomNumber > 0 &&
      locationRandomNumber <= 35 && {
        location: 'Subterráneas',
      }),
    ...(locationRandomNumber >= 36 &&
      locationRandomNumber <= 86 && {
        location: 'Superficie',
      }),
    ...(locationRandomNumber >= 86 &&
      locationRandomNumber <= 95 && {
        location: 'Órbita',
      }),
    ...(locationRandomNumber >= 96 && {
      location: 'Satélite',
    }),
  };

  return { age: ruinsAge.age, location: ruinsLocation.location, size: ruinsSize.size };
};

export const planetaryOtherTraitTable = [
  {
    max: 15,
    min: 0,
    valueToReturn: {
      label: 'Terraformado',
      energeticResourcesMod: 0,
      food_resources_mod: -1,
      industrial_resources_mod: 0,
      populationMod: -1,
    },
  },
  {
    max: 30,
    min: 16,
    valueToReturn: {
      label: 'Restos de Batalla',
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
      label: 'Asteroides Explotables Accesibles',
      energeticResourcesMod: 1,
      food_resources_mod: 0,
      industrial_resources_mod: 2,
      populationMod: 0,
    },
  },
  {
    max: 60,
    min: 51,
    valueToReturn: {
      label: 'Ruinas',
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
      label: 'Resonancia Nootérica',
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
      label: 'Alteraciones Dimensionales',
      energeticResourcesMod: 1,
      food_resources_mod: 0,
      industrial_resources_mod: 0,
      populationMod: -2,
    },
  },
  {
    max: 75,
    min: 71,
    valueToReturn: {
      label: 'Antiguo Caché Tecnológico',
      energeticResourcesMod: 0,
      food_resources_mod: 0,
      industrial_resources_mod: 0,
      populationMod: 0,
    },
  },
  {
    max: 80,
    min: 76,
    valueToReturn: {
      label: 'Pecio estelar',
      energeticResourcesMod: 0,
      food_resources_mod: 0,
      industrial_resources_mod: 0,
      populationMod: 0,
    },
  },
  {
    max: 90,
    min: 81,
    valueToReturn: {
      label: 'Fenómeno Natural Turístico',
      energeticResourcesMod: 0,
      food_resources_mod: 0,
      industrial_resources_mod: 0,
      populationMod: 0,
    },
  },
  {
    max: 100,
    min: 91,
    valueToReturn: {
      label: 'Evento Cultural',
      energeticResourcesMod: 0,
      food_resources_mod: 0,
      industrial_resources_mod: 0,
      populationMod: 0,
    },
  },
  {
    max: 110,
    min: 101,
    valueToReturn: {
      label: 'Evento Deportivo',
      energeticResourcesMod: 0,
      food_resources_mod: 0,
      industrial_resources_mod: 0,
      populationMod: 0,
    },
  },
  {
    max: 115,
    min: 111,
    valueToReturn: {
      label: 'Vida Mecánica Inerte',
      energeticResourcesMod: 0,
      food_resources_mod: 0,
      industrial_resources_mod: 0,
      populationMod: 0,
    },
  },
];

export const generatePlanetaryOtherTrait = () => {
  let data: any = obtainDataFromTable(planetaryOtherTraitTable);
  let dataToSend = { ...data };
  if (dataToSend.label === 'Resonancia Nootérica') {
    const obtainNootericResonanceStrength: any = generateRandomNumber(1, 100) < 90 ? 'Menor' : 'Mayor';
    dataToSend.label = `${dataToSend.label} ${obtainNootericResonanceStrength}`;
    dataToSend.populationMod = obtainNootericResonanceStrength === 'Menor' ? -1 : -3;
  }
  if (dataToSend.label === 'Alteraciones Dimensionales') {
    const obtainDimensionalAlterations: any = generateRandomNumber(1, 100) < 90 ? 'Leves' : 'Agudas';
    dataToSend.label = `${dataToSend.label} ${obtainDimensionalAlterations}`;
    dataToSend.populationMod = obtainDimensionalAlterations === 'Leves' ? -1 : -3;
  }
  if (dataToSend.label === 'Ruinas') {
    const obtainRuinsData: any = generateRuinsData();
    dataToSend.label = `${dataToSend.label} (${obtainRuinsData.age} - ${obtainRuinsData.location} - ${obtainRuinsData.size})`;
  }
  return dataToSend;
};
