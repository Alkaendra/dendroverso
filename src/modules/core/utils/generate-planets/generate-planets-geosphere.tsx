import { generateRandomNumber, generateRandomFloat } from '../utils';
import { resourcesAndPopulationMods } from './generate-planets';

const getFactorEstresSismico = (densityType: string, stellarMass: number, orbit: number, mayorMoons: number) => {
  let fad = 0.0; //Porción de Estrés sísmico debido a la densidad
  const fmedo = stellarMass / orbit; // fmedo -> factor debido a la masa estelar y a las distancia orbital
  const fdaS = 0.03 * mayorMoons;
  const fal = generateRandomNumber(0, 3); // fal -> factor aleatorio;

  if (densityType === 'Núcleo Fundido') {
    fad = generateRandomFloat(1, 3);
  } else {
    fad = generateRandomFloat(0, 0.99);
  }

  const fES = fad + fdaS + fmedo + fal; // Factor de Estrés Sísmico;

  return fES;
};

export function getGeosphereResources(seismicStressFactor: number, densityType: string) {
  let geoResources: resourcesAndPopulationMods | {} = {
    energyResourcesMod: 0,
    foodResourcesMod: 0,
    industrialResourcesMod: 0,
    populationMod: 0,
    specials: [],
  };

  const ale = generateRandomNumber(2, 14);

  // Modificador debido al estrés sísmico que sufre el planeta;
  let mfes: any = {
    ...(seismicStressFactor <= 2.999 && {
      value: -1,
    }),
    ...(seismicStressFactor >= 3 &&
      seismicStressFactor <= 6.999 && {
        value: 0,
      }),
    ...(seismicStressFactor >= 7 && {
      value: 1,
    }),
  };

  // Modificador debido a qué tipo de núcleo tiene el planeta, p.e.: 'Fundido', como en el caso de la Tierra.
  let mden: any = {
    ...(densityType === 'Núcleo Sólido' && {
      value: -1,
    }),
    ...(densityType === 'Núcleo Fundido' && {
      value: 3,
    }),
  };

  const valor: number = ale + mfes.value + mden.value;

  geoResources = {
    ...(valor <= 1 && {
      ...geoResources,
      industrialResourcesMod: -2,
      specials: ['Pobreza Mineral'],
    }),
    ...(valor >= 2 &&
      valor <= 5 && {
        ...geoResources,
        industrialResourcesMod: -1,
      }),
    ...(valor >= 6 &&
      valor <= 8 && {
        ...geoResources,
        industrialResourcesMod: 1,
      }),
    ...(valor >= 9 &&
      valor <= 10 && {
        ...geoResources,
        industrialResourcesMod: 2,
        specials: ['Tectónica Estable'],
      }),
    ...(valor >= 11 &&
      valor <= 12 && {
        industrialResourcesMod: 3,
        populationMod: -2,
        specials: ['Alta Vulcanicidad', 'Téctónica Inestable'],
      }),
    ...(valor >= 13 && {
      ...geoResources,
      industrialResourcesMod: 4,
      populationMod: -4,
      specials: ['Vulcanicidad Extrema', 'Tectónica Altamente Inestable'],
    }),
  };

  return geoResources;
}

export const getPlanetaryGeosphereData = (
  densityType: string,
  mayorMoons: number,
  orbit: number,
  stellarMass: number,
) => {
  const seismicStress = getFactorEstresSismico(densityType, stellarMass, orbit, mayorMoons);

  return getGeosphereResources(seismicStress, densityType);
};
