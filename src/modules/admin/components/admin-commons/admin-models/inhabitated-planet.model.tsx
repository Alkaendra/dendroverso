import { AstrophysicalData } from '../../../../core/utils/generate-planets/generate-planets-astrophysical';
import { PlanetaryAtmosphereData } from '../../../../core/utils/generate-planets/generate-planets-atmosphere';
import { HidrosphereData } from '../../../../core/utils/generate-planets/generate-planets-hidrosphere';
import { Star } from '../../../../core/utils/generate-stellar-groups/generate-star';
import { BasicResource } from './resources.model';
import { Special } from './special.model';
import { Connectivity } from './system.model';

interface PlanetaryDevelopment {
  culturalDevelopment: number;
  economicalDevelopment: number;
  militaryDevelopment: number;
  industrialDevelopment: number;
  technologicalDevelopment: number;
}

interface PlanetaryPopulation {
  culturalDevelopmentMod: number;
  economicalDevelopmentMod: number;
  industrialDevelopmentMod: number;
  militaryDevelopmentMod: number;
  technologicalDevelopmentMod: number;
  label: string;
  value: number;
}

export interface PlanetaryType {
  energeticResourcesMod: number;
  foodResourcesMod: number;
  industrialResourcesMod: number;
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
  specials: Special[];
  systemZone?: string;
  stars: Star[];
  systemConnectivity: Connectivity;
  surfaceTemperature: number;
  type: PlanetaryType;
}
