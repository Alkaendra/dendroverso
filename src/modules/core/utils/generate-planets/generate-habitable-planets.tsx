import {
  generateSystemConnectivity,
  generateRandomNumber,
  generateRandomFloat,
  habitablePlanetPopulationTable,
  obtainAllModsFromSpecials,
  obtainDataFromTable,
  obtainRangedValue,
  resourcesOcurrenceTable,
} from '../utils';
import { getPlanetaryAstrophysicalData } from './generate-planets-astrophysical';
import { getPlanetaryAtmosphericalData } from './generate-planets-atmosphere';
import { getPlanetaryHidrosphereData } from './generate-planets-hidrosphere';
import {
  getTotalPlanetaryIH,
  getPlanetSurfaceTemperature,
  getPlanetSubType,
  generateZH,
  HABITABLE_PLANET_ROLE,
  habitablePlanetRoleType,
} from './generate-planets';
import { generateTotalPlacesOfInterest } from '../habitable-planet-specials/places-of-interest-specials';
import { stellarGroup } from '../generate-stellar-groups/generate-star';
import { InhabitatedPlanet } from '../../../admin/components/admin-commons/admin-models/inhabitated-planet.model';
import { generateTableDataByFrequencies } from '../tables-data';
import { sectorInhabitatedSystems } from '../../../admin/components/admin-commons/admin-models/sector.model';
import { PLANETARY_POSSIBLE_ROLES_BY_SECTOR_ROLE } from '../../../admin/components/admin-commons/admin-models/region.model';

export const generatePlanetaryDevelopment = (population: any, planetRoleMods: any) => {
  const returnRangedValue = (max: number, min: number, value: any) => {
    if (value > max) {
      return max;
    }
    if (value < min) {
      return min;
    }
    return value;
  };
  return {
    culturalDevelopment: returnRangedValue(
      6,
      1,
      generateRandomNumber(1, 2) + population.culturalDevelopmentMod + planetRoleMods.culturalDevelopmentMod,
    ),
    economicalDevelopment: returnRangedValue(
      6,
      1,
      generateRandomNumber(1, 2) + population.economicalDevelopmentMod + planetRoleMods.economicalDevelopmentMod,
    ),
    militaryDevelopment: returnRangedValue(
      6,
      1,
      generateRandomNumber(1, 2) + population.militaryDevelopmentMod + planetRoleMods.militaryDevelopmentMod,
    ),
    industrialDevelopment: returnRangedValue(
      6,
      1,
      generateRandomNumber(1, 2) + population.industrialDevelopmentMod + planetRoleMods.industrialDevelopmentMod,
    ),
    technologicalDevelopment: returnRangedValue(
      6,
      1,
      generateRandomNumber(1, 2) + population.technologicalDevelopmentMod + planetRoleMods.technologicalDevelopmentMod,
    ),
  };
};

export const obtainFinalEconomicalDevelopment = (
  energyEconomicalMod: number,
  foodEconomicalMod: number,
  industryEconomicalMod: number,
  economicCurrentValue: number,
) => {
  const totalEconomicalDevelopment =
    economicCurrentValue + energyEconomicalMod + foodEconomicalMod + industryEconomicalMod;
  if (totalEconomicalDevelopment > 6) {
    return 6;
  }
  if (totalEconomicalDevelopment < 0) {
    return 0;
  }
  return totalEconomicalDevelopment;
};

export const habitablePlanet = (
  name: string,
  planetOrbit: number,
  planetRole: habitablePlanetRoleType,
  starLuminosity: number,
  starRadius: number,
  stellarGroupData: any,
) => {
  const planet: InhabitatedPlanet = {} as any;
  const planetarySpecials = obtainAllModsFromSpecials();
  console.log(planetRole);
  planet.name = `${name} - Inhabitated Planet`;
  planet.astrophysics = getPlanetaryAstrophysicalData(generateRandomNumber(1, 100));
  planet.size = planet.astrophysics.size.cod;
  planet.atmosphere = getPlanetaryAtmosphericalData(planet.size);
  planet.hidrosphere = getPlanetaryHidrosphereData(planet.size);
  planet.IH = getTotalPlanetaryIH(
    planet.astrophysics.gravity.gravityIhMod,
    planet.atmosphere.IHmod,
    planet.hidrosphere.hidrosphereIHMod,
  );
  planet.surfaceTemperature = getPlanetSurfaceTemperature(
    planet.atmosphere.albedo,
    starLuminosity,
    starRadius,
    planetOrbit,
    planet.atmosphere.greenhouseEffect,
  );
  planet.type = getPlanetSubType(planet.surfaceTemperature, planet.hidrosphere.percentage, planet.IH);
  planet.maximunEnergeticResources = obtainRangedValue(
    0,
    6,
    planet.type.energeticResourcesMod + planetRole.maxEnergeticResourcesMod,
    1,
    2,
    planetarySpecials.energeticResourcesMod,
    resourcesOcurrenceTable,
  );
  planet.maximunFoodResources = obtainRangedValue(
    0,
    6,
    planet.type.foodResourcesMod + planetRole.maxFoodResourcesMod,
    1,
    3,
    planetarySpecials.foodResourcesMod,
    resourcesOcurrenceTable,
  );
  planet.maximunIndustrialResources = obtainRangedValue(
    0,
    6,
    planet.type.industrialResourcesMod,
    1,
    2,
    planetarySpecials.industrialResourcesMod + planetRole.maxIndustrialResourcesMod,
    resourcesOcurrenceTable,
  );
  planet.systemConnectivity = generateSystemConnectivity(generateRandomNumber(1, 100), planetRole.connectivityMod);
  planet.population = obtainRangedValue(
    0,
    9,
    planet.type.populationMod + planetRole.pobMod,
    0,
    1,
    planetarySpecials.populationMod +
      planet.IH +
      (planet.systemConnectivity.stable + planet.systemConnectivity.valiangric),
    habitablePlanetPopulationTable,
  );
  planet.development = generatePlanetaryDevelopment(planet.population, planetRole);
  planet.specials = planetarySpecials.specials;
  planet.placesOfInterest = generateTotalPlacesOfInterest(planet.type);
  planet.stars = stellarGroupData;
  planet.orbitDistanceInUAs = planetOrbit;
  planet.economics = obtainFinalEconomicalDevelopment(
    planet.maximunEnergeticResources.economicalMod,
    planet.maximunFoodResources.economicalMod,
    planet.maximunIndustrialResources.economicalMod,
    planet.development.economicalDevelopment,
  );
  planet.role = planetRole.label;
  planet.importance = planet.IH + planet.systemConnectivity.stable + planet.systemConnectivity.valiangric;

  return planet;
};

export const getInitialHabitablePlanetData = (name: string, role: habitablePlanetRoleType): InhabitatedPlanet => {
  // Generamos un grupo estelar
  const stellarGroupData = stellarGroup();
  // Obtenemos los límites, en UAs, de su Zona de Habitabilidad ZH
  let ZH = generateZH(parseFloat(stellarGroupData.accLuminosity.toFixed(3)));
  // Generamos la distancia orbital, en UAs, del planeta habitable a generar
  let habitableOrbitDistance = generateRandomFloat(ZH.inner, ZH.outer);
  // Finalmente, devolvemos el planeta creado con los datos anteriores
  return habitablePlanet(
    name,
    habitableOrbitDistance,
    role,
    stellarGroupData.accLuminosity,
    stellarGroupData.accRadius,
    stellarGroupData,
  );
};

export const getNumberOfInhabitatedSystemsBySector = (): number =>
  obtainDataFromTable(generateTableDataByFrequencies(sectorInhabitatedSystems));

export const getInhabitatedPlanetaryRolesBySectorRole = (
  inhabitatedPlanetsNumber: number,
  sectorRole: string,
): habitablePlanetRoleType[] => {
  let planetaryRoles: habitablePlanetRoleType[] = [];
  for (let i = 0; i < inhabitatedPlanetsNumber; i += 1) {
    if (i === 0) {
      planetaryRoles = [...planetaryRoles, PLANETARY_POSSIBLE_ROLES_BY_SECTOR_ROLE[sectorRole][0]];
    } else {
      planetaryRoles = [
        ...planetaryRoles,
        PLANETARY_POSSIBLE_ROLES_BY_SECTOR_ROLE[sectorRole][
          generateRandomNumber(1, PLANETARY_POSSIBLE_ROLES_BY_SECTOR_ROLE[sectorRole].length - 1)
        ],
      ];
    }
  }

  return planetaryRoles;
};

export const generateHabitablePlanetRolesDistribution = (planetNumber: number) => {
  let habitablePlanetDistributedRoles: any = [];
  const numberOfMayorResourceProducers = generateRandomNumber(1, 2);
  const numberOfMayorIndustrialProducers = generateRandomNumber(1, 2);
  for (let i = 0; i < planetNumber; i++) {
    if (i === 0) {
      habitablePlanetDistributedRoles = [...habitablePlanetDistributedRoles, HABITABLE_PLANET_ROLE.REGION_CAPITAL];
    } else if (i > 0 && i <= numberOfMayorResourceProducers) {
      habitablePlanetDistributedRoles = [
        ...habitablePlanetDistributedRoles,
        HABITABLE_PLANET_ROLE.MAYOR_RESOURCE_PRODUCTOR,
      ];
    } else if (
      i > numberOfMayorResourceProducers &&
      i <= numberOfMayorResourceProducers + numberOfMayorIndustrialProducers
    ) {
      habitablePlanetDistributedRoles = [
        ...habitablePlanetDistributedRoles,
        HABITABLE_PLANET_ROLE.MAYOR_INDUSTRIAL_CENTER,
      ];
    } else {
      let randomSecondaries = generateRandomNumber(1, 100);
      if (randomSecondaries > 0 && randomSecondaries < 40) {
        habitablePlanetDistributedRoles = [
          ...habitablePlanetDistributedRoles,
          HABITABLE_PLANET_ROLE.MINOR_RESOURCE_PRODUCTOR,
        ];
      } else if (randomSecondaries >= 40 && randomSecondaries < 80) {
        habitablePlanetDistributedRoles = [
          ...habitablePlanetDistributedRoles,
          HABITABLE_PLANET_ROLE.MINOR_INDUSTRIAL_CENTER,
        ];
      } else {
        habitablePlanetDistributedRoles = [...habitablePlanetDistributedRoles, HABITABLE_PLANET_ROLE.OTHER];
      }
    }
  }
  return habitablePlanetDistributedRoles;
};

export const generateFinalHabitablePlanetData = (initialHabitablePlanetsData: any) => {
  const sortedPlanets = [...initialHabitablePlanetsData]
    .map((planet: any) => ({
      ...planet,
      importance: planet.IH + planet.systemConnectivity.stable + planet.systemConnectivity.valiangric,
    }))
    .sort((a: any, b: any) => b.importance - a.importance);
  const planetaryRoleDistribution = generateHabitablePlanetRolesDistribution(sortedPlanets.length);
  const addedRoleToPlanetsForPopulationRecalculation = sortedPlanets.map((sortedPlanet: any, index: number) => {
    const pop = obtainRangedValue(
      0,
      9,
      sortedPlanet.population.value,
      0,
      0,
      planetaryRoleDistribution[index].pobMod,
      habitablePlanetPopulationTable,
    );
    const development = generatePlanetaryDevelopment(pop, null);
    return {
      ...sortedPlanet,
      economics: obtainFinalEconomicalDevelopment(
        sortedPlanet.maximunEnergeticResources.economicalMod,
        sortedPlanet.maximunFoodResources.economicalMod,
        sortedPlanet.maximunIndustrialResources.economicalMod,
        development.economicalDevelopment,
      ),
      development: development,
      maximunEnergeticResources: sortedPlanet.maximunEnergeticResources.value,
      maximunFoodResources: sortedPlanet.maximunFoodResources.value,
      maximunIndustrialResources: sortedPlanet.maximunIndustrialResources.value,
      population: pop.label,
      role: planetaryRoleDistribution[index].label,
      type: sortedPlanet.type.subType,
    };
  });
  return addedRoleToPlanetsForPopulationRecalculation;
};

// export const generateSectorHabitablePlanets = (planetNumber: number) => {
//   let habPlanets: any[] = [];
//   for (let i = 0; i < planetNumber; i++) {
//     let generatedHabPlanet = {};
//     generatedHabPlanet = getInitialHabitablePlanetData();
//     habPlanets = [...habPlanets, generatedHabPlanet];
//   }

//   return generateFinalHabitablePlanetData(habPlanets);
// };
