import { generateRandomFloat, generateRandomNumber, obtainDataFromTable } from '../utils';
import { getLuminosityStarMassRadiusTemperature } from './generate-star-massluminosity';

export interface Star {
  decimalClass: number;
  color?: string; // Color de la estrella en función de su tipo
  luminosity_aleatorio: number; // Número aleatorio que se utiliza para obtener la luminosity. Útil para obtener la luminosity de las compañeras binarias
  luminosity_class: string; // Comparado con el Sol
  luminosity: number;
  luminosity_icon?: any;
  mass: number; // Comparado con el Sol
  nombre?: string;
  principalidad?: string; // Si la estrela, dentro de su conjunto estelar es principal, secundaria o terciaria
  radius: number; // Radio de la estrella en radios solares
  tamanio?: string;
  tamanio_icono?: number; // Tamaño del icono que representa a la estrella
  spectralType: string;
}

const getStarLuminosity: any = (lumPrin: number = 0) => {
  let na_lum = generateRandomFloat(0, 100) + lumPrin;
  let luminosity = {
    ...(na_lum <= 0.8 && {
      luminosityCode: 'Ia',
      luminosity: 14,
      luminosityNA: na_lum,
    }),
    ...(na_lum > 0.8 &&
      na_lum <= 3.03 && {
        luminosityCode: 'Ib',
        luminosity: 12,
        luminosityNA: na_lum,
      }),
    ...(na_lum > 3.03 &&
      na_lum <= 5.92 && {
        luminosityCode: 'II',
        luminosity: 10,
        luminosityNA: na_lum,
      }),
    ...(na_lum > 5.92 &&
      na_lum <= 15.05 && {
        luminosityCode: 'III',
        luminosity: 8,
        luminosityNA: na_lum,
      }),
    ...(na_lum > 15.05 &&
      na_lum <= 36.45 && {
        luminosityCode: 'IV',
        luminosity: 4,
        luminosityNA: na_lum,
      }),
    ...(na_lum > 36.45 &&
      na_lum <= 98 && {
        luminosityCode: 'V',
        luminosity: 2,
        luminosityNA: na_lum,
      }),
    ...(na_lum > 98 && {
      luminosityCode: 'VI',
      luminosity: 1,
      luminosityNA: na_lum,
    }),
  };

  return luminosity;
};

const getStarType: any = (tipoPrin: number = 0) => {
  let na_tipo = generateRandomFloat(1, 100) + tipoPrin;
  let tipo = {
    ...(na_tipo <= 0.01 && {
      class: 'O',
      color: '#b0b0ff',
      radius: generateRandomFloat(16, 50),
    }),
    ...(na_tipo > 0.01 &&
      na_tipo <= 0.14 && {
        class: 'B',
        color: '#b0b0ff',
        radius: generateRandomFloat(2.1, 15.99),
      }),
    ...(na_tipo > 0.14 &&
      na_tipo <= 0.62 && {
        class: 'A',
        color: '#e0e0ff',
        radius: generateRandomFloat(1.4, 2.09),
      }),
    ...(na_tipo > 0.62 &&
      na_tipo <= 13.62 && {
        class: 'F',
        color: '#ffff99',
        radius: generateRandomFloat(1.04, 1.39),
      }),
    ...(na_tipo > 13.62 &&
      na_tipo <= 31.22 && {
        class: 'G',
        color: '#ffff19',
        radius: generateRandomFloat(0.8, 1.03),
      }),
    ...(na_tipo > 31.22 &&
      na_tipo <= 43.32 && {
        class: 'K',
        color: '#ffb000',
        radius: generateRandomFloat(0.45, 0.79),
      }),
    ...(na_tipo > 43.32 && {
      class: 'M',
      color: '#ff4000',
      radius: generateRandomFloat(0.08, 0.45),
    }),
  };

  return tipo;
};

export const generateStar = (luminosityEstrellaPrincipal: number | undefined) => {
  let tipo = getStarType();
  let luminosity = getStarLuminosity(luminosityEstrellaPrincipal);

  // Generamos un objeto auxiliar porque hay datos previos que son necesarios para obtener otros datos y completar el modelo estrella
  let estrellaAux: any = {
    decimalClass: generateRandomNumber(0, 9),
    color: tipo.color,
    luminosity_class: luminosity.luminosityCode,
    luminosity_icon: luminosity.luminosity,
    radius: tipo.radius,
    spectralType: tipo.class,
  };

  if (
    (estrellaAux.spectralType === 'K' && estrellaAux.decimalClass >= 5 && estrellaAux.decimalClass <= 9) ||
    estrellaAux.spectralType === 'M'
  ) {
    if (estrellaAux.luminosity_class === 'IV') {
      estrellaAux.luminosity_class = 'V';
    }
  }

  let datosEstrella = getLuminosityStarMassRadiusTemperature(estrellaAux);

  let estrella: Star = {
    decimalClass: estrellaAux.decimalClass,
    color: estrellaAux.color,
    luminosity: datosEstrella.luminosity,
    luminosity_aleatorio: luminosity.luminosityNA,
    luminosity_class: estrellaAux.luminosity_class,
    luminosity_icon: estrellaAux.luminosity_icon,
    mass: datosEstrella.mass,
    radius: datosEstrella.radius,
    spectralType: estrellaAux.spectralType,
  };

  //Transformaciones posteriores
  if (
    estrella.spectralType === 'O' ||
    estrella.spectralType === 'B' ||
    estrella.spectralType === 'A' ||
    estrella.spectralType === 'F'
  ) {
    if (estrella.luminosity_class === 'VI') {
      estrella.luminosity_class = 'D';
    }
  }

  return estrella;
};

export const starMultiplicityForOBAStars = [
  {
    max: 15,
    min: 1,
    valueToReturn: 1,
  },
  {
    max: 50,
    min: 16,
    valueToReturn: 2,
  },
  {
    max: 100,
    min: 51,
    valueToReturn: 3,
  },
];

export const starMultiplicityForFGKStars = [
  {
    max: 56,
    min: 1,
    valueToReturn: 1,
  },
  {
    max: 90,
    min: 57,
    valueToReturn: 2,
  },
  {
    max: 100,
    min: 91,
    valueToReturn: 3,
  },
];

export const starMultiplicityForMStars = [
  {
    max: 75,
    min: 1,
    valueToReturn: 1,
  },
  {
    max: 98,
    min: 76,
    valueToReturn: 2,
  },
  {
    max: 100,
    min: 99,
    valueToReturn: 3,
  },
];

export const getStarMultiplicityBySpectralClass = (spectralClass: string) => {
  if (spectralClass === 'O' || spectralClass === 'B' || spectralClass === 'A') {
    return obtainDataFromTable(starMultiplicityForOBAStars);
  } else if (spectralClass === 'F' || spectralClass === 'G' || spectralClass === 'K') {
    return obtainDataFromTable(starMultiplicityForFGKStars);
  }

  return obtainDataFromTable(starMultiplicityForMStars);
};

export const stellarGroup = () => {
  const principalStar = generateStar(0);
  let stellarGroupStars: Star[] = [{ ...principalStar }];
  let stellarGroup = {
    stars: stellarGroupStars,
    accLuminosity: 0,
    accRadius: 0,
  };
  const systemStarMultiplicity = getStarMultiplicityBySpectralClass(principalStar.spectralType);
  if (systemStarMultiplicity > 1) {
    for (let i = 1; i < systemStarMultiplicity; i++) {
      stellarGroup.stars = [...stellarGroup.stars, generateStar(20)];
    }
  }
  stellarGroup.accLuminosity = stellarGroup.stars.reduce((x, y) => (x += y.luminosity), 0);
  stellarGroup.accRadius = stellarGroup.stars.reduce((x, y) => (x += y.radius), 0);
  return stellarGroup;
};
