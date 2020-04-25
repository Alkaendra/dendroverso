import { generateRandomNumber } from '../utils';

export const generatePlanetaryHidrosphericalTrait = () => {
  const randomNumber: number = generateRandomNumber(1, 100);
  let planetaryHidrosphericalTrait: any = {};

  switch (true) {
    case randomNumber > 0 && randomNumber <= 15:
      planetaryHidrosphericalTrait = {
        label: 'Océanos Hipersalinos',
        energeticResourcesMod: 0,
        foodResourcesMod: -1,
        industrialResourcesMod: 2,
        populationMod: -2,
      };
      break;
    case randomNumber > 15 && randomNumber <= 30:
      planetaryHidrosphericalTrait = {
        label: 'Química Oceánica Inusual',
        energeticResourcesMod: 0,
        foodResourcesMod: -1,
        industrialResourcesMod: 2,
        populationMod: -1,
      };
      break;
    case randomNumber > 30 && randomNumber <= 45:
      planetaryHidrosphericalTrait = {
        label: 'Estaciones Extremas',
        energeticResourcesMod: 2,
        foodResourcesMod: 0,
        industrialResourcesMod: 0,
        populationMod: -2,
      };
      break;
    case randomNumber > 45 && randomNumber <= 60:
      planetaryHidrosphericalTrait = {
        label: 'Mareas Extremas',
        energeticResourcesMod: 2,
        foodResourcesMod: -1,
        industrialResourcesMod: 0,
        populationMod: 0,
      };
      break;
    case randomNumber > 61 && randomNumber <= 75:
      planetaryHidrosphericalTrait = {
        label: 'Océanos Metálicos',
        energeticResourcesMod: 0,
        foodResourcesMod: -1,
        industrialResourcesMod: 2,
        populationMod: -1,
      };
      break;
    case randomNumber > 76 && randomNumber <= 90:
      planetaryHidrosphericalTrait = {
        label: 'Equilibrio Oceánico',
        energeticResourcesMod: 0,
        foodResourcesMod: 2,
        industrialResourcesMod: 1,
        populationMod: 1,
      };
      break;
    case randomNumber > 90:
      planetaryHidrosphericalTrait = {
        label: 'Acuíferos Ingentes',
        energeticResourcesMod: 1,
        foodResourcesMod: 2,
        industrialResourcesMod: 0,
        populationMod: 2,
      };
      break;
  }
  return planetaryHidrosphericalTrait;
};
