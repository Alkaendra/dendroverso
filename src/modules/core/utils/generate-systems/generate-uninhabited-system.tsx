import { generateRandomNumber, generateSystemConnectivity } from '../utils';
import { System } from '../../../admin/components/admin-commons/admin-models/system.model';
import { generateManyUnhabitedPlanets } from '../generate-planets/generate-unhabitable-planet';

export const generateUnInhabitedSystem = (index: number, name: string = 'System'): System => {
  let system: any = {};
  system.name = `${name} ${index + 1}`;
  system.connectivity = generateSystemConnectivity(generateRandomNumber(1, 100));
  system.planets = generateManyUnhabitedPlanets(system.name, generateRandomNumber(0, 12));
  return system;
};

export const generateManyUnInhabitedSystems = (numberToGenerate: number): System[] => {
  let systems: System[] = [];
  for (let i = 0; i <= numberToGenerate; i += 1) {
    systems = [...systems, generateUnInhabitedSystem(i)];
  }
  return systems;
};
