import { generateRandomNumber } from '../utils';

export const generatePlanetaryGeophisycalSpecialTrait = () => {
  const randomNumber: number = generateRandomNumber(1, 100);
  let planetaryGeophisycalSpecialTrait: any = {};

  switch (true) {
    case randomNumber > 0 && randomNumber <= 5:
      planetaryGeophisycalSpecialTrait = {
        label: 'Yacimientos Ubérrimos',
        energeticResourcesMod: 1,
        foodResourcesMod: 0,
        industrialResourcesMod: 3,
        populationMod: 0,
      };
      break;
    case randomNumber > 5 && randomNumber <= 15:
      planetaryGeophisycalSpecialTrait = {
        label: 'Yacimientos Exóticos',
        energeticResourcesMod: 0,
        foodResourcesMod: 0,
        industrialResourcesMod: 2,
        populationMod: 1,
      };
      break;
    case randomNumber > 15 && randomNumber <= 25:
      planetaryGeophisycalSpecialTrait = {
        label: 'Erosión Caótica',
        energeticResourcesMod: 0,
        foodResourcesMod: 0,
        industrialResourcesMod: 1,
        populationMod: -1,
      };
      break;
    case randomNumber > 25 && randomNumber <= 35:
      planetaryGeophisycalSpecialTrait = {
        label: 'Pobreza Mineral',
        energeticResourcesMod: 0,
        foodResourcesMod: 0,
        industrialResourcesMod: -2,
        populationMod: 0,
      };
      break;
    case randomNumber > 35 && randomNumber <= 45:
      planetaryGeophisycalSpecialTrait = {
        label: 'Campo Magnético Inestable',
        energeticResourcesMod: 1,
        foodResourcesMod: 0,
        industrialResourcesMod: 0,
        populationMod: -2,
      };
      break;
    case randomNumber > 45 && randomNumber <= 55:
      planetaryGeophisycalSpecialTrait = {
        label: 'Cavernoso',
        energeticResourcesMod: 0,
        foodResourcesMod: 0,
        industrialResourcesMod: 2,
        populationMod: 2,
      };
      break;
    case randomNumber > 55 && randomNumber <= 65:
      planetaryGeophisycalSpecialTrait = {
        label: 'Geotermal',
        energeticResourcesMod: 2,
        foodResourcesMod: 0,
        industrialResourcesMod: 1,
        populationMod: 0,
      };
      break;
    case randomNumber > 65 && randomNumber <= 75:
      planetaryGeophisycalSpecialTrait = {
        label: 'Vulcanismo Extremo',
        energeticResourcesMod: 2,
        foodResourcesMod: 0,
        industrialResourcesMod: 0,
        populationMod: -2,
      };
      break;
    case randomNumber > 75 && randomNumber <= 85:
      planetaryGeophisycalSpecialTrait = {
        label: 'Tectónica Inestable',
        energeticResourcesMod: 1,
        foodResourcesMod: 0,
        industrialResourcesMod: 1,
        populationMod: -2,
      };
      break;
    case randomNumber > 85 && randomNumber <= 95:
      planetaryGeophisycalSpecialTrait = {
        label: 'Núcleo Rígido',
        energeticResourcesMod: -2,
        foodResourcesMod: 0,
        industrialResourcesMod: -2,
        populationMod: 0,
      };
      break;
    case randomNumber > 95:
      planetaryGeophisycalSpecialTrait = {
        label: 'Planeta Binario',
        energeticResourcesMod: 3,
        foodResourcesMod: 0,
        industrialResourcesMod: 3,
        populationMod: 2,
      };
      break;
  }

  return planetaryGeophisycalSpecialTrait;
};
