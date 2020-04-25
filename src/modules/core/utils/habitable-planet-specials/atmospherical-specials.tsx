import { generateRandomNumber } from '../utils';

export const generatePlanetaryAtmosphericalTrait = () => {
  const randomNumber: number = generateRandomNumber(1, 100);
  let planetaryAtmosphericalTrait: any = {};

  switch (true) {
    case randomNumber > 0 && randomNumber <= 15:
      planetaryAtmosphericalTrait = {
        label: 'Sistemas Tormentosos Permanentes',
        energeticResourcesMod: 2,
        foodResourcesMod: 0,
        industrialResourcesMod: 0,
        populationMod: -2,
      };
      break;
    case randomNumber > 15 && randomNumber <= 30:
      planetaryAtmosphericalTrait = {
        label: 'Irradiado',
        energeticResourcesMod: 0,
        foodResourcesMod: 0,
        industrialResourcesMod: 1,
        populationMod: -2,
      };
      break;
    case randomNumber > 30 && randomNumber <= 45:
      planetaryAtmosphericalTrait = {
        label: 'Estaciones Extremas',
        energeticResourcesMod: 2,
        foodResourcesMod: 0,
        industrialResourcesMod: 0,
        populationMod: -2,
      };
      break;
    case randomNumber > 45 && randomNumber <= 60:
      planetaryAtmosphericalTrait = {
        label: 'Vientos Fertilizadores',
        energeticResourcesMod: 1,
        foodResourcesMod: 2,
        industrialResourcesMod: 0,
        populationMod: +1,
      };
      break;
    case randomNumber > 61 && randomNumber <= 75:
      planetaryAtmosphericalTrait = {
        label: 'Presión Inusual',
        energeticResourcesMod: 1,
        foodResourcesMod: 0,
        industrialResourcesMod: 1,
        populationMod: -1,
      };
      break;
    case randomNumber > 76 && randomNumber <= 90:
      planetaryAtmosphericalTrait = {
        label: 'Contaminante Atmosférico Natural',
        energeticResourcesMod: 0,
        foodResourcesMod: 0,
        industrialResourcesMod: 1,
        populationMod: -1,
      };
      break;
    case randomNumber > 90:
      planetaryAtmosphericalTrait = {
        label: 'Equilibrio Atmosférico',
        energeticResourcesMod: 2,
        foodResourcesMod: 0,
        industrialResourcesMod: 1,
        populationMod: 1,
      };
      break;
  }
  return planetaryAtmosphericalTrait;
};
