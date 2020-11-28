import { generateRandomNumber, generateSystemConnectivity } from '../utils';
import { System } from '../../../admin/components/admin-commons/admin-models/system.model';
import { generateManyUnhabitedPlanets } from '../generate-planets/generate-unhabitable-planet';
import { habitablePlanetRoleType, SYSTEM_ZONES } from '../generate-planets/generate-planets';
import { getInitialHabitablePlanetData } from '../generate-planets/generate-habitable-planets';
import { InhabitatedPlanet } from '../../../admin/components/admin-commons/admin-models/inhabitated-planet.model';

export const generateUnInhabitatedSystem = (index: number, name: string = 'System'): System => {
  let system: any = {};
  system.name = `${name} ${index + 1}`;
  system.connectivity = generateSystemConnectivity(generateRandomNumber(1, 100));
  system.planets = generateManyUnhabitedPlanets(system.name, generateRandomNumber(0, 12));
  return system;
};

export const generateInhabitatedSystem = (
  index: number,
  name: string = 'System',
  role: habitablePlanetRoleType,
): System => {
  let system: System = {} as any;
  let inhabitatedPlanet: InhabitatedPlanet = getInitialHabitablePlanetData(name, role);
  inhabitatedPlanet.systemZone = SYSTEM_ZONES.HZ;
  system = generateUnInhabitatedSystem(index, name);
  system.connectivity = inhabitatedPlanet.systemConnectivity;
  system.stellarGroup = inhabitatedPlanet.stars;
  let planetsInGZ = system.planets.filter(planet => planet.systemZone === SYSTEM_ZONES.HZ);
  if (planetsInGZ.length) {
    const planetInGZIndex = system.planets.indexOf(planetsInGZ[0]);
    system.planets.splice(planetInGZIndex, 1, inhabitatedPlanet);
  } else {
    const planetsInInnerZone = system.planets.filter(planet => planet.systemZone === SYSTEM_ZONES.INNER);
    system.planets.splice(planetsInInnerZone.length - 1, 0, inhabitatedPlanet);
  }

  return system;
};

export const generateManySystems = (numberToGenerate: number, roles: habitablePlanetRoleType[]): System[] => {
  let systems: System[] = [];
  for (let i = 0; i < numberToGenerate; i += 1) {
    systems = [
      ...systems,
      roles && roles.length > 0
        ? generateInhabitatedSystem(i, 'Inhabitated System', roles[i])
        : generateUnInhabitatedSystem(i),
    ];
  }
  return systems;
};
