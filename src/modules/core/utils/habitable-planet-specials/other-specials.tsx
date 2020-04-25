import { generateRandomNumber } from '../utils';

export const generatePlanetaryOtherTrait = () => {
  const randomNumber: number = generateRandomNumber(1, 100);
  let planetaryOtherTrait: any = {};

  switch (true) {
    case randomNumber > 0 && randomNumber <= 15:
      planetaryOtherTrait = {
        label: 'Terraformado',
        energeticResourcesMod: 0,
        foodResourcesMod: 0,
        industrialResourcesMod: 0,
        populationMod: 0,
      };
      break;
    case randomNumber > 15 && randomNumber <= 30:
      planetaryOtherTrait = {
        label: 'Restos de Batalla',
        energeticResourcesMod: 0,
        foodResourcesMod: 0,
        industrialResourcesMod: 0,
        populationMod: 0,
      };
      break;
    case randomNumber > 30 && randomNumber <= 45:
      planetaryOtherTrait = {
        label: 'Resonancia Noomántica',
        energeticResourcesMod: 0,
        foodResourcesMod: 0,
        industrialResourcesMod: 0,
        populationMod: -1,
      };
      break;
    case randomNumber > 45 && randomNumber <= 60:
      planetaryOtherTrait = {
        label: 'Alteraciones Dimensionales',
        energeticResourcesMod: 1,
        foodResourcesMod: 2,
        industrialResourcesMod: 0,
        populationMod: +1,
      };
      break;
    case randomNumber > 60 && randomNumber <= 80:
      planetaryOtherTrait = {
        label: 'Asteroides Explotables Accesibles',
        energeticResourcesMod: 1,
        foodResourcesMod: 0,
        industrialResourcesMod: 2,
        populationMod: 0,
      };
      break;
    case randomNumber > 80 && randomNumber <= 90:
      planetaryOtherTrait = {
        label: 'Especie Presintiente',
        energeticResourcesMod: 0,
        foodResourcesMod: 0,
        industrialResourcesMod: 0,
        populationMod: 0,
      };
      break;
    case randomNumber > 90:
      planetaryOtherTrait = {
        label: 'Ruinas',
        energeticResourcesMod: 0,
        foodResourcesMod: 0,
        industrialResourcesMod: 0,
        populationMod: 0,
      };
      break;
  }
  return planetaryOtherTrait;
};
