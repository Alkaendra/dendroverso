import {
  obtainAllModsFromSpecials,
  generateSystemConnectivity,
  generateRandomNumber,
  generateRandomFloat,
  obtainRangedValue,
  resourcesOcurrenceTable,
  habitablePlanetPopulationTable,
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
} from './generate-planets';
import { generateTotalPlacesOfInterest } from '../habitable-planet-specials/places-of-interest-specials';
import { stellarGroup } from '../generate-stellar-groups/generate-star';

export const generatePlanetaryDevelopment = (population: any) => {
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
    culturalDevelopment: returnRangedValue(6, 1, generateRandomNumber(1, 2) + population.culturalDevelopmentMod),
    economicalDevelopment: returnRangedValue(6, 1, generateRandomNumber(1, 2) + population.economicalDevelopmentMod),
    militaryDevelopment: returnRangedValue(6, 1, generateRandomNumber(1, 2) + population.militaryDevelopmentMod),
    industrialDevelopment: returnRangedValue(6, 1, generateRandomNumber(1, 2) + population.industrialDevelopmentMod),
    technologicalDevelopment: returnRangedValue(
      6,
      1,
      generateRandomNumber(1, 2) + population.technologicalDevelopmentMod,
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
  planetOrbit: number,
  starLuminosity: number,
  starRadius: number,
  stellarGroupData: any,
) => {
  const planet: any = {};
  const planetarySpecials = obtainAllModsFromSpecials();
  planet.astrophisycs = getPlanetaryAstrophysicalData(generateRandomNumber(1, 100));
  planet.size = planet.astrophisycs.size.cod;
  planet.atmosphere = getPlanetaryAtmosphericalData(planet.size);
  planet.hidrosphere = getPlanetaryHidrosphereData(planet.size);
  planet.IH = getTotalPlanetaryIH(
    planet.astrophisycs.gravity.gravityIhMod,
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
    planet.type.energeticResourcesMod,
    1,
    2,
    planetarySpecials.energeticResourcesMod,
    resourcesOcurrenceTable,
  );
  planet.maximunFoodResources = obtainRangedValue(
    0,
    6,
    planet.type.foodResourcesMod,
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
    planetarySpecials.industrialResourcesMod,
    resourcesOcurrenceTable,
  );
  planet.systemConnectivity = generateSystemConnectivity(generateRandomNumber(1, 100));
  planet.population = obtainRangedValue(
    0,
    9,
    planet.type.populationMod,
    0,
    1,
    planetarySpecials.populationMod +
      planet.IH +
      (planet.systemConnectivity.stable + planet.systemConnectivity.valiangric),
    habitablePlanetPopulationTable,
  );
  planet.specials = planetarySpecials.specials;
  planet.placesOfInterest = generateTotalPlacesOfInterest(planet.type);
  planet.stars = stellarGroupData;
  planet.orbitDistanceInUAs = planetOrbit;
  return planet;
};

export const getInitialHabitablePlanetData = () => {
  // Generamos un grupo estelar
  const stellarGroupData = stellarGroup();
  // Obtenemos los límites, en UAs, de su Zona de Habitabilidad ZH
  let ZH = generateZH(parseFloat(stellarGroupData.accLuminosity.toFixed(3)));
  // Generamos la distancia orbital, en UAs, del planeta habitable a generar
  let habitableOrbitDistance = generateRandomFloat(ZH.inner, ZH.outer);
  // Finalmente, devolvemos el planeta creado con los datos anteriores
  return habitablePlanet(
    habitableOrbitDistance,
    stellarGroupData.accLuminosity,
    stellarGroupData.accRadius,
    stellarGroupData,
  );
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
        HABITABLE_PLANET_ROLE.MAYOR_INDUSTRIAL_PRODUCTOR,
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
          HABITABLE_PLANET_ROLE.MINOR_INDUSTRIAL_PRODUCTOR,
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
    const development = generatePlanetaryDevelopment(pop);
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

export const generateSectorHabitablePlanets = (planetNumber: number) => {
  let habPlanets: any[] = [];
  for (let i = 0; i < planetNumber; i++) {
    let generatedHabPlanet = {};
    generatedHabPlanet = getInitialHabitablePlanetData();
    habPlanets = [...habPlanets, generatedHabPlanet];
  }

  return generateFinalHabitablePlanetData(habPlanets);
};
