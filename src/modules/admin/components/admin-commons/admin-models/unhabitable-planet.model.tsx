// El concepto de mundo no habitable aquí, se refiere a que no es habitable para la especie dominante de la región/nación, no que el mundo sea completamente inhabitable para cualquier forma de vida

import { ExtendedEthnicity } from './ethnicity.model';

export const BREATHABLE_GASES = ['Ammonia', 'Chlorine', 'Gasless', 'Hydrogen', 'Methane', 'Other', 'Oxygen'];
export const PLANETARY_MAYOR_TYPES = {
  ASTEROID: 'Asteroid',
  GAS_GIANT: 'Gas Giant',
  ROCKY: 'Rocky',
};
export const RESOURCE_TYPES = ['edible', 'energetic', 'industrial'];

export const INITIAL_UNINHABITED_PLANET = {
  breathableGas: '',
  isInhabited: false,
  isResourceProducer: false,
  name: '',
  population: {
    name: '',
    genotype: '',
    fenotype: '',
    filiation: '',
  },
  resourceProduced: [
    {
      currentPlanetaryResourceProduction: 0,
      maxPlanetaryResourceQuantity: 0,
      ownership: '',
      type: '',
    },
  ],
  systemZone: '',
  type: '',
};

export interface Resource {
  currentPlanetaryResourceProduction: number;
  maxPlanetaryResourceQuantity: number;
  ownership: string;
  type: string;
}

export interface Planet {
  breathableGas?: string;
  isInhabited: boolean;
  isResourceProducer: boolean;
  name: string;
  population?: ExtendedEthnicity;
  resourceProduced?: Resource[];
  systemZone: string;
  type: string;
}
