import { generateRandomNumber, generateRandomFloat } from '../utils';

type astronomicalData = {
  excentricity: number;
  traslation: number;
  rotation: number;
};

const getexcentricityOrbital = () => {
  const naEO = generateRandomNumber(1, 12);
  let eO;

  if (naEO <= 11) {
    eO = generateRandomFloat(0, 0.02);
  } else {
    eO = generateRandomFloat(0.025, 0.25);
  }

  return eO;
};

// Se obtiene el periodo orbital a partir de la masa de la estrella (o masa combinada en su caso) y la distancia en UAs
const getPeriodoOrbital = (masaEstrella: number, doUAs: number) => {
  var poPlaneta = Math.sqrt(Math.pow(doUAs, 3) / masaEstrella);

  return poPlaneta;
};

// Se obtiene el periodo de rotación a partir de la masa de la estrella y la distancia a la misma en UAs (?)
const getPeriodorotation = (masa: number, distancia: number) => {
  var al = generateRandomNumber(2, 12);
  var prPlaneta = al * 4 + 5 + masa / distancia;

  return prPlaneta / 24;
};

export const getPlanetaryAstronomicalData: any = (masa: number, distancia: number) => {
  let astronomica: astronomicalData = {
    excentricity: 0,
    traslation: 0,
    rotation: 0,
  };

  astronomica.excentricity = getexcentricityOrbital();
  astronomica.traslation = getPeriodoOrbital(masa, distancia);
  astronomica.rotation = getPeriodorotation(masa, distancia);

  return astronomica as astronomicalData;
};
