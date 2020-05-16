import { obtainDataFromTable, generateRandomNumber } from '../utils';

export const obtainPhenomenonType = [
  {
    max: 15,
    min: 0,
    valueToReturn: {
      type: 'Psicológico/Nootérico',
    },
  },
  {
    max: 30,
    min: 16,
    valueToReturn: {
      type: 'Olfativo',
    },
  },
  {
    max: 50,
    min: 31,
    valueToReturn: {
      type: 'Auditivo',
    },
  },
  {
    max: 70,
    min: 51,
    valueToReturn: {
      type: 'Óptico',
    },
  },
  {
    max: 90,
    min: 71,
    valueToReturn: {
      type: 'Táctil',
    },
  },
  {
    max: 100,
    min: 91,
    valueToReturn: {
      type: 'Eléctrico',
    },
  },
];

export const obtainPhenomenonOrigin = [
  {
    max: 15,
    min: 0,
    valueToReturn: {
      type: 'Mineral',
    },
  },
  {
    max: 30,
    min: 16,
    valueToReturn: {
      type: 'Animal',
    },
  },
  {
    max: 50,
    min: 31,
    valueToReturn: {
      type: 'Vegetal',
    },
  },
  {
    max: 70,
    min: 51,
    valueToReturn: {
      type: 'Fúngico',
    },
  },
  {
    max: 90,
    min: 71,
    valueToReturn: {
      type: 'Microbiano',
    },
  },
  {
    max: 110,
    min: 91,
    valueToReturn: {
      type: 'Nootérico',
    },
  },
  {
    max: 125,
    min: 111,
    valueToReturn: {
      type: 'Sintiente',
    },
  },
  {
    max: 130,
    min: 126,
    valueToReturn: {
      type: 'Multidimensional',
    },
  },
  {
    max: 132,
    min: 131,
    valueToReturn: {
      type: 'Aberrante',
    },
  },
  {
    max: 134,
    min: 133,
    valueToReturn: {
      type: 'Valiángrico',
    },
  },
  {
    max: 136,
    min: 135,
    valueToReturn: {
      type: 'Drumatárico',
    },
  },
  {
    max: 138,
    min: 137,
    valueToReturn: {
      type: 'Paraversal',
    },
  },
  {
    max: 139,
    min: 139,
    valueToReturn: {
      type: 'Único',
    },
  },
];

export const obtainPhenomenonPeligrosity = [
  {
    max: 15,
    min: 0,
    valueToReturn: {
      type: 'Nula',
    },
  },
  {
    max: 75,
    min: 16,
    valueToReturn: {
      type: 'Escasa',
    },
  },
  {
    max: 95,
    min: 76,
    valueToReturn: {
      type: 'Alta',
    },
  },
  {
    max: 100,
    min: 96,
    valueToReturn: {
      type: 'Extrema',
    },
  },
];

export const generateSystemPhenomenonLocation: any = () => {
  const randomNumber = generateRandomNumber(1, 100);
  return {
    ...(randomNumber < 30 && {
      finalLocation: 'Planetas Interiores',
    }),
    ...(randomNumber >= 30 &&
      randomNumber < 40 && {
        finalLocation: 'Zona Verde',
      }),
    ...(randomNumber >= 40 &&
      randomNumber < 95 && {
        finalLocation: 'Planetas Exteriores',
      }),
    ...(randomNumber >= 95 && {
      finalLocation: 'Nube de Oort',
    }),
  };
};

export const obtainPhenomenonLocation = (planetType: any) => {
  const randomNumber = generateRandomNumber(1, 100);
  const location: any = {
    ...(randomNumber < 70 && {
      final: planetType.terrainTypes[generateRandomNumber(1, planetType.terrainTypes.length)],
    }),
    ...(randomNumber >= 70 &&
      randomNumber < 95 && {
        final: generateRandomNumber(1, 100) > 70 ? 'Satélite - Cara Visible' : 'Satélite - Cara Oculta',
      }),
    ...(randomNumber >= 95 && {
      final: generateSystemPhenomenonLocation().finalLocation,
    }),
  };
  return location.final;
};

export const obtainPlaceOfInterest = (planetType: any) => {
  const phenomenonLocation = obtainPhenomenonLocation(planetType);
  const phenomenonType = obtainDataFromTable(obtainPhenomenonType).type;
  const phenomenonOrigin = obtainDataFromTable(obtainPhenomenonOrigin).type;
  const phenomenonPeligrosity = obtainDataFromTable(obtainPhenomenonPeligrosity).type;
  return `${phenomenonLocation} - ${phenomenonType} - ${phenomenonOrigin} - ${phenomenonPeligrosity}`;
};

export const generateTotalPlacesOfInterest = (planetType: any) => {
  const randomNumber = generateRandomNumber(1, 100);
  let placesOfInterest: any = [];
  if (randomNumber >= 70 && randomNumber < 98) {
    for (let i = 0; i < generateRandomNumber(1, 2); i += 1) {
      placesOfInterest = [...placesOfInterest, obtainPlaceOfInterest(planetType)];
    }
  } else if (randomNumber >= 98) {
    for (let i = 0; i < generateRandomNumber(2, 6); i += 1) {
      placesOfInterest = [...placesOfInterest, obtainPlaceOfInterest(planetType)];
    }
  }
  return placesOfInterest;
};
