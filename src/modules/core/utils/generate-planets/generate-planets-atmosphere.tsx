import { generateRandomNumber, generateRandomFloat } from '../utils';

interface atmosphereData {
  greenhouseEffect: number;
  IHmod: number; // Modificador al Índice de Habitabilidad
  surfacePressure: number;
  type: string;
}

interface planetaryAtmosphereData extends atmosphereData {
  albedo: number;
}

// Se obtienen datos generales de la atmósfera a partir del tamaño del planeta
const getTipoPerfilAtmosfera = (type: string) => {
  let atmosfera: planetaryAtmosphereData | {} = {
    albedo: 0,
    greenhouseEffect: 0,
    surfacePressure: 0,
    type: '',
  };

  // Modificador atmosférico por tipo de planeta
  let mta: any = {
    ...(type === 'mT' && {
      value: -2,
    }),
    ...(type === 'sT' && {
      value: -1,
    }),
    ...(type === 'T' && {
      value: 0,
    }),
    ...(type === 'ST' && {
      value: 1,
    }),
    ...(type === 'NdGg' && {
      value: 2,
    }),
  };

  const ale = generateRandomNumber(0, 12);

  const valor = ale + mta.value;

  atmosfera = {
    ...(valor <= 3 && {
      albedo: generateRandomFloat(0, 0.1),
      greenhouseEffect: generateRandomFloat(0.2, 0.4),
      IHmod: -2,
      surfacePressure: generateRandomFloat(0.1, 0.4), // en atmosferas
      type: 'Tenue',
    }),
    ...(valor >= 4 &&
      valor <= 7 && {
        albedo: generateRandomFloat(0.1, 0.2),
        greenhouseEffect: generateRandomFloat(0.4, 0.5),
        IHmod: -1,
        surfacePressure: generateRandomFloat(0.43, 0.75), // en atmosferas
        type: 'Ligera',
      }),
    ...(valor >= 8 &&
      valor <= 9 && {
        albedo: generateRandomFloat(0.2, 0.4),
        greenhouseEffect: generateRandomFloat(0.6, 0.8),
        IHmod: 2,
        surfacePressure: generateRandomFloat(0.76, 1.4), // en atmosferas
        type: 'Estándar',
      }),
    ...(valor >= 10 &&
      valor <= 11 && {
        albedo: generateRandomFloat(0.5, 0.6),
        greenhouseEffect: generateRandomFloat(0.9, 1.15),
        IHmod: 1,
        surfacePressure: generateRandomFloat(1.5, 2.4), // en atmosferas
        type: 'Densa',
      }),
    ...(valor >= 12 && {
      albedo: generateRandomFloat(0.7, 0.8),
      greenhouseEffect: generateRandomFloat(1.2, 2.2),
      IHmod: 2,
      surfacePressure: generateRandomFloat(2.5, 10), // en atmosferas
      type: 'Muy Densa',
    }),
  };
  return atmosfera;
};

export const getPlanetaryAtmosphericalData = (type: string) => {
  let atmosfera: planetaryAtmosphereData = {
    albedo: 0,
    greenhouseEffect: 0,
    IHmod: 0,
    surfacePressure: 0,
    type: '',
  };
  const gtpa: any = getTipoPerfilAtmosfera(type);

  atmosfera = {
    albedo: gtpa.albedo,
    greenhouseEffect: gtpa.greenhouseEffect,
    IHmod: gtpa.IHmod,
    surfacePressure: gtpa.surfacePressure,
    type: gtpa.type,
  };

  return atmosfera;
};
