import { generateRandomNumber } from '../utils';

export const generatePlanetaryAstrophisycalTrait = () => {
  const randomNumber: number = generateRandomNumber(1, 100);
  let planetaryAstrophisycalTrait: any = {};

  switch (true) {
    case randomNumber > 0 && randomNumber <= 15:
      planetaryAstrophisycalTrait = {
        label: 'Inclinación Inusual del eje',
        energeticResourcesMod: 2,
        foodResourcesMod: 0,
        industrialResourcesMod: 1,
        populationMod: -2,
      };
      break;
    case randomNumber > 15 && randomNumber <= 30:
      planetaryAstrophisycalTrait = {
        label: 'Anclado de Marea',
        energeticResourcesMod: 3,
        foodResourcesMod: -1,
        industrialResourcesMod: 0,
        populationMod: -3,
      };
      break;
    case randomNumber > 30 && randomNumber <= 45:
      planetaryAstrophisycalTrait = {
        label: 'Gravedad no estándar',
        energeticResourcesMod: 0,
        foodResourcesMod: 0,
        industrialResourcesMod: 0,
        populationMod: -1,
      };
      break;
    case randomNumber > 45 && randomNumber <= 60:
      planetaryAstrophisycalTrait = {
        label: 'Anillos',
        energeticResourcesMod: 0,
        foodResourcesMod: 0,
        industrialResourcesMod: 2,
        populationMod: 0,
      };
      break;
    case randomNumber > 61 && randomNumber <= 75:
      planetaryAstrophisycalTrait = {
        label: 'Órbita Excéntrica',
        energeticResourcesMod: 2,
        foodResourcesMod: -1,
        industrialResourcesMod: 0,
        populationMod: -1,
      };
      break;
    case randomNumber > 76 && randomNumber <= 90:
      planetaryAstrophisycalTrait = {
        label: 'Eclipticidad Excéntrica',
        energeticResourcesMod: 2,
        foodResourcesMod: -1,
        industrialResourcesMod: 1,
        populationMod: -1,
      };
      break;
    case randomNumber > 90:
      planetaryAstrophisycalTrait = {
        label: 'Rotación Retrógrada',
        energeticResourcesMod: 0,
        foodResourcesMod: 0,
        industrialResourcesMod: 0,
        populationMod: 0,
      };
      break;
  }
  return planetaryAstrophisycalTrait;
};
