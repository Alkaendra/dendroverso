import { generateRandomNumber } from '../utils';

export const generatePlanetaryBiologicalTrait = () => {
  const randomNumber: number = generateRandomNumber(1, 100);
  let planetaryBiologicalTrait: any = {};

  switch (true) {
    case randomNumber > 0 && randomNumber <= 15:
      planetaryBiologicalTrait = {
        label: 'Flora Exótica',
        energeticResourcesMod: 0,
        foodResourcesMod: 1,
        industrialResourcesMod: 0,
        populationMod: -1,
      };
      break;
    case randomNumber > 15 && randomNumber <= 30:
      planetaryBiologicalTrait = {
        label: 'Fauna Exótica',
        energeticResourcesMod: 0,
        foodResourcesMod: 0,
        industrialResourcesMod: 1,
        populationMod: -1,
      };
      break;
    case randomNumber > 30 && randomNumber <= 45:
      planetaryBiologicalTrait = {
        label: 'Utopía Ecológica',
        energeticResourcesMod: 0,
        foodResourcesMod: 3,
        industrialResourcesMod: 0,
        populationMod: 3,
      };
      break;
    case randomNumber > 45 && randomNumber <= 60:
      planetaryBiologicalTrait = {
        label: 'Inhóspito',
        energeticResourcesMod: 0,
        foodResourcesMod: 0,
        industrialResourcesMod: 0,
        populationMod: -3,
      };
      break;
    case randomNumber > 61 && randomNumber <= 75:
      planetaryBiologicalTrait = {
        label: 'Biomas Inestables',
        energeticResourcesMod: 0,
        foodResourcesMod: -1,
        industrialResourcesMod: 1,
        populationMod: -1,
      };
      break;
    case randomNumber > 76 && randomNumber <= 90:
      planetaryBiologicalTrait = {
        label: 'Megafauna',
        energeticResourcesMod: 0,
        foodResourcesMod: 1,
        industrialResourcesMod: 1,
        populationMod: -1,
      };
      break;
    case randomNumber > 90:
      planetaryBiologicalTrait = {
        label: 'Presencia de Aberraciones',
        energeticResourcesMod: 0,
        foodResourcesMod: 0,
        industrialResourcesMod: 0,
        populationMod: -3,
      };
      break;
  }
  return planetaryBiologicalTrait;
};
