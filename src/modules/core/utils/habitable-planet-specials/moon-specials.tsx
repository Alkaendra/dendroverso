import { generateRandomNumber } from '../utils';

export const generatePlanetaryMoons = () => {
  const randomNumber: number = generateRandomNumber(1, 100);
  let planetaryMoonsData: any = {};

  switch (true) {
    case randomNumber > 0 && randomNumber <= 40:
      planetaryMoonsData = {
        label: 'Sin luna',
        mayorMoons: 0,
        minorMoons: 0,
        energeticResourcesMod: 0,
        food_resources_mod: 0,
        industrial_resources_mod: 0,
        populationMod: 0,
      };
      break;
    case randomNumber > 40 && randomNumber <= 75:
      planetaryMoonsData = {
        label: 'Lunas Mayores',
        mayorMoons: 1,
        minorMoons: 0,
        energeticResourcesMod: 0,
        food_resources_mod: 0,
        industrial_resources_mod: 2,
        populationMod: 1,
      };
      break;
    case randomNumber > 75 && randomNumber <= 90:
      planetaryMoonsData = {
        label: 'Lunas Menores',
        mayorMoons: 0,
        minorMoons: generateRandomNumber(1, 3),
        energeticResourcesMod: 0,
        food_resources_mod: 0,
        industrial_resources_mod: 1,
        populationMod: 0,
      };
      break;
    case randomNumber > 90 && randomNumber <= 98:
      planetaryMoonsData = {
        label: 'Lunas de ambos tipos',
        mayorMoons: 1,
        minorMoons: generateRandomNumber(1, 3),
        energeticResourcesMod: 0,
        food_resources_mod: 0,
        industrial_resources_mod: 3,
        populationMod: 1,
      };
      break;
    case randomNumber > 98:
      planetaryMoonsData = {
        label: 'Múltiples Lunas',
        mayorMoons: 2,
        minorMoons: generateRandomNumber(0, 3),
        energeticResourcesMod: 0,
        food_resources_mod: 0,
        industrial_resources_mod: 3,
        populationMod: 2,
      };
      break;
  }
  return planetaryMoonsData;
};
