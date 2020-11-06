import {
  ExtendedEthnicity,
  FENOTYPES_BY_GENOTYPE,
  FILIATION,
  finalOwnership,
  MAYOR_GENOTYPES,
} from '../../../admin/components/admin-commons/admin-models/ethnicity.model';
import {
  BREATHABLE_GASES,
  Planet,
  Resource,
  RESOURCE_TYPES,
} from '../../../admin/components/admin-commons/admin-models/unhabitable-planet.model';
import { convertToRoman, generateRandomFloat, generateRandomNumber, getRandomValueFromStringArray } from '../utils';
import { getPlanetMayorType, SYSTEM_ZONES } from './generate-planets';

export const generateUnInhabitedPlanetPopulation = (breathableGas: string): ExtendedEthnicity => {
  let pop: ExtendedEthnicity = {
    fenotype: '',
    filiation: '',
    genotype: '',
    name: '',
  };
  let genotypes: string[] = MAYOR_GENOTYPES[breathableGas];
  pop.name = 'Desconocido';
  pop.filiation = getRandomValueFromStringArray(FILIATION);
  pop.genotype = getRandomValueFromStringArray(genotypes);
  pop.fenotype =
    pop.genotype && pop.genotype.length > 0 && Object.keys(FENOTYPES_BY_GENOTYPE).includes(pop.genotype)
      ? getRandomValueFromStringArray(FENOTYPES_BY_GENOTYPE[pop.genotype])
      : 'Desconocido';

  return pop;
};

export const generateUnInhabitedPlanetResource = (isInhabited: boolean): Resource => {
  let resource: Resource = {
    currentPlanetaryResourceProduction: 0,
    maxPlanetaryResourceQuantity: 0,
    ownership: '',
    type: '',
  };
  resource.maxPlanetaryResourceQuantity = generateRandomNumber(0, 9);
  resource.currentPlanetaryResourceProduction = Math.floor(resource.maxPlanetaryResourceQuantity / 2);
  resource.ownership = getRandomValueFromStringArray(finalOwnership(isInhabited));
  resource.type = getRandomValueFromStringArray(RESOURCE_TYPES);
  return resource;
};

export const generateUnInhabitedPlanet = (index: number, name: string = 'System', systemZone: string): Planet => {
  let planet: any = {};
  planet.name = `${name} - Planet ${convertToRoman(index + 1)}`;
  planet.isInhabited = generateRandomFloat(1, 100) > 90;
  if (planet.isInhabited) {
    planet.breathableGas = getRandomValueFromStringArray(BREATHABLE_GASES);
    planet.population = generateUnInhabitedPlanetPopulation(planet.breathableGas);
  }
  planet.isResourceProducer = generateRandomFloat(1, 100) > 80;
  if (planet.isResourceProducer) {
    planet.resourceProduced = [generateUnInhabitedPlanetResource(planet.isInhabited)];
  }
  planet.systemZone = systemZone;
  planet.type = getPlanetMayorType(systemZone).label;

  return planet;
};

export const generateManyUnhabitedPlanets = (name: string, planetsToGenerate: number): Planet[] => {
  let planets: Planet[] = [];
  const innerPlanets = generateRandomNumber(0, 4);
  const greenZonePlanets = generateRandomNumber(0, 2);
  for (let i = 0; i <= planetsToGenerate; i += 1) {
    if (i <= innerPlanets) {
      planets = [...planets, generateUnInhabitedPlanet(i, name, SYSTEM_ZONES.INNER)];
    } else if (i <= innerPlanets + greenZonePlanets) {
      planets = [...planets, generateUnInhabitedPlanet(i, name, SYSTEM_ZONES.HZ)];
    } else {
      planets = [...planets, generateUnInhabitedPlanet(i, name, SYSTEM_ZONES.OUTER)];
    }
  }
  return planets;
};
