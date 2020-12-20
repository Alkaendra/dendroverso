import { AstrophysicalData } from '../../../../core/utils/generate-planets/generate-planets-astrophysical';
import { PlanetaryAtmosphereData } from '../../../../core/utils/generate-planets/generate-planets-atmosphere';
import { HidrosphereData } from '../../../../core/utils/generate-planets/generate-planets-hidrosphere';
import { Star } from '../../../../core/utils/generate-stellar-groups/generate-star';
import { PlanetaryTerrainUnit } from './inhabitated-planet-terrain-units.model';
import { BasicResource } from './resources.model';
import { SpaceStation } from './space-stations.model';
import { Special } from './special.model';
import { Connectivity } from './system.model';

export const INHABITATED_PLANETARY_TEMPERATURE_TYPES = {
  COLD: 'Cold',
  TEMPERATE: 'Temperate',
  WARM: 'Warm',
};

export const INHABITATED_PLANETARY_CLIMATE_TYPES = {
  ARID: {
    code: 'ARI',
    type: 'Arid',
  },
  ALPINE: {
    code: 'ALP',
    type: 'Alpine',
  },
  ARTIC: {
    code: 'ART',
    type: 'Artic',
  },
  BOREAL: {
    code: 'BOR',
    type: 'Boreal',
  },
  CONTINENTAL: {
    code: 'CON',
    type: 'Continental',
  },
  DESERTIC: {
    code: 'DES',
    type: 'Desertic',
  },
  FROZEN_OCEAN: {
    code: 'FOC',
    type: 'Frozen Ocean',
  },
  GARDEN: {
    code: 'GAR',
    type: 'Garden',
  },
  MARSH: {
    code: 'MAR',
    type: 'Marsh',
  },
  OCEANIC: {
    code: 'OCE',
    type: 'Oceanic',
  },
  SAVANNA: {
    code: 'SAV',
    type: 'Savanna',
  },
  TROPICAL: {
    code: 'TRO',
    type: 'Tropical',
  },
};

export const getInhabitatedPlanetSurfaceTemperatureType = (planetType: string): string => {
  let temperatureType: string = '';
  switch (planetType) {
    case INHABITATED_PLANETARY_CLIMATE_TYPES.ARTIC.code:
    case INHABITATED_PLANETARY_CLIMATE_TYPES.BOREAL.code:
    case INHABITATED_PLANETARY_CLIMATE_TYPES.FROZEN_OCEAN.code:
    case INHABITATED_PLANETARY_CLIMATE_TYPES.ALPINE.code:
      temperatureType = INHABITATED_PLANETARY_TEMPERATURE_TYPES.COLD;
      break;
    case INHABITATED_PLANETARY_CLIMATE_TYPES.CONTINENTAL.code:
    case INHABITATED_PLANETARY_CLIMATE_TYPES.GARDEN.code:
    case INHABITATED_PLANETARY_CLIMATE_TYPES.MARSH.code:
    case INHABITATED_PLANETARY_CLIMATE_TYPES.OCEANIC.code:
    case INHABITATED_PLANETARY_CLIMATE_TYPES.SAVANNA.code:
      temperatureType = INHABITATED_PLANETARY_TEMPERATURE_TYPES.TEMPERATE;
      break;
    case INHABITATED_PLANETARY_CLIMATE_TYPES.ARID.code:
    case INHABITATED_PLANETARY_CLIMATE_TYPES.DESERTIC.code:
    case INHABITATED_PLANETARY_CLIMATE_TYPES.TROPICAL.code:
      temperatureType = INHABITATED_PLANETARY_TEMPERATURE_TYPES.WARM;
      break;
    default:
      temperatureType = INHABITATED_PLANETARY_TEMPERATURE_TYPES.TEMPERATE;
  }
  return temperatureType;
};

interface PlanetaryDevelopment {
  culturalDevelopment: number;
  economicalDevelopment: number;
  militaryDevelopment: number;
  industrialDevelopment: number;
  technologicalDevelopment: number;
}

interface PlanetaryPopulation {
  cultural_development_mod: number;
  economical_development_mod: number;
  industrial_development_mod: number;
  military_development_mod: number;
  technological_development_mod: number;
  label: string;
  value: number;
}

export interface PlanetaryType {
  energeticResourcesMod: number;
  food_resources_mod: number;
  industrial_resources_mod: number;
  populationMod: number;
  specialTraitMod: number;
  terrainTypes: string[];
  subTypeCode: string;
  subType: string;
}

export interface InhabitatedPlanet {
  astrophysics: AstrophysicalData;
  atmosphere: PlanetaryAtmosphereData;
  development: PlanetaryDevelopment;
  economics: number;
  hidrosphere: HidrosphereData;
  IH: number;
  importance?: number;
  maximunEnergeticResources: BasicResource;
  maximunFoodResources: BasicResource;
  maximunIndustrialResources: BasicResource;
  name: string;
  orbitDistanceInUAs: number;
  placesOfInterest: string[];
  population: PlanetaryPopulation;
  role: string;
  size: string;
  spaceStations: SpaceStation[];
  specials: Special[];
  systemZone?: string;
  stars: Star[];
  systemConnectivity: Connectivity;
  surfaceTemperature: number;
  terrainUnits: PlanetaryTerrainUnit[];
  type: PlanetaryType;
}
