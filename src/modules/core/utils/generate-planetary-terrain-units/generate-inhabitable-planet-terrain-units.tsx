import {
  Biome,
  liquidHabitablePlanetsTerrainUnits,
  liquidTerrainTypes,
  obtainTemperatureZoneForTerrainTypesArray,
  PlanetaryTerrainUnit,
  solidTerrainUnitsData,
  terrainUnitsByTerranPlanetTypeAndPlanetZones,
  terrestrialHabitablePlanetsTerrainUnits,
} from '../../../admin/components/admin-commons/admin-models/inhabitated-planet-terrain-units.model';
import { getInhabitatedPlanetSurfaceTemperatureType } from '../../../admin/components/admin-commons/admin-models/inhabitated-planet.model';
import { MinorSettlement } from '../../../admin/components/admin-commons/admin-models/settlement.model';
import { generateMinorSettlements } from '../generate-settlements/generate-settlements';
import { DynamicDataTableObject, generateTableDataByFrequencies } from '../tables-data';
import {
  flattenArrayOfArrays,
  generateRandomFloat,
  generateRandomNumber,
  obtainDataFromTable,
  parseNumbersToTwoDecimalDigits,
  reduceToAddParam,
} from '../utils';

/**
 * Returns the array of randomly selectable terrain unit types by environment (solid / liquid)
 * @param planetType The inhabitated planet subtype string code (ex: Boreal, Desert...)
 * @param temperatureZone The location of terrain unit in the planet surface (ex: Poles, temperate belt, ecuator...)
 * @param geosphere The value of geologic activity of the planet
 */
export const obtainTerrainTypeArray = (planetType: string, temperatureZone: string, geosphere: number) => {
  if (geosphere > 0) {
    const TI = geosphere + generateRandomNumber(1, 3);
    return terrestrialHabitablePlanetsTerrainUnits(TI)[
      getInhabitatedPlanetSurfaceTemperatureType(planetType).toLocaleLowerCase()
    ][temperatureZone].TI.terrain_types;
  }

  return liquidHabitablePlanetsTerrainUnits().terrain_types;
};

export const generateBiomeData = (
  geosphere: number,
  planetaryPopulation: number,
  temperatureZone: string,
  type: string,
  value: number,
): Biome => {
  let biome: Biome = {} as any;
  const terrainData = solidTerrainUnitsData[type.toLocaleUpperCase()] || liquidTerrainTypes[type.toLocaleUpperCase()];
  biome.name = terrainData.adjectives_by_climate[obtainTemperatureZoneForTerrainTypesArray(temperatureZone)];
  biome.type = terrainData.adjectives_by_climate[obtainTemperatureZoneForTerrainTypesArray(temperatureZone)];
  biome.value = value;
  biome.energeticalResources =
    (terrainData.energetical_resources_mod > 0
      ? generateRandomFloat(0, 0.05) + terrainData.energetical_resources_mod
      : generateRandomFloat(0, 0.01)) * value;
  biome.foodResources =
    (terrainData.food_resources_mod > 0 ? generateRandomFloat(0, 0.05) + terrainData.food_resources_mod : 0) * value;
  biome.industrialResources =
    (terrainData.industrial_resources_mod > 0
      ? generateRandomFloat(0, 0.05) + terrainData.industrial_resources_mod
      : generateRandomFloat(0, 0.01)) * value;
  biome.mayor_settlement_prob = terrainData.mayor_settlement_prob;
  biome.environment = geosphere ? 'solid' : 'liquid';
  biome.minor_settlements = generateMinorSettlements(
    terrainData.minor_settlements_type_by_freq,
    terrainData.maximun_minor_settlements,
    planetaryPopulation + terrainData.maximun_minor_settlement_population_mod,
  );

  return biome;
};

export const generateTerrainUnit = (
  geosphere: number,
  planetaryPopulation: number,
  temperatureZone: string,
  terrainTypesArray: DynamicDataTableObject[],
  terrainUnitPoints: number,
  language: string = '',
) => {
  let terrainUnit: any[] = [];
  for (let i = 0; i < terrainUnitPoints; i += 1) {
    terrainUnit = [...terrainUnit, obtainDataFromTable(generateTableDataByFrequencies(terrainTypesArray)).type];
  }
  const terrainTypesDistribution = terrainUnit.reduce((prev, cur) => {
    prev[cur] = (prev[cur] || 0) + 1;
    return prev;
  }, {});
  const reducedTerrainTypes = Object.keys(terrainTypesDistribution).reduce(
    (arr, elem: any, index) => {
      arr[index] = generateBiomeData(
        geosphere,
        planetaryPopulation,
        temperatureZone,
        elem,
        terrainTypesDistribution[elem],
      );
      return arr;
    },
    [{} as Biome],
  );

  console.log(language);
  return reducedTerrainTypes;
};

let temperatureZoneTerrainUnits: PlanetaryTerrainUnit[] = [];

const generateLandTerraingUnitsByTemperatureZone = (
  maxLandPoints: number,
  planetSize: string,
  language: string,
  geosphere: number,
  planetType: string,
  temperatureZone: string,
  planetaryPopulation: number,
) => {
  const currentTerrainUnitPoints = generateRandomNumber(
    1,
    terrainUnitsByTerranPlanetTypeAndPlanetZones[planetSize].max_terrain_points,
  );
  const terrainUnitBiomes = generateTerrainUnit(
    geosphere,
    planetaryPopulation,
    temperatureZone,
    obtainTerrainTypeArray(planetType, obtainTemperatureZoneForTerrainTypesArray(temperatureZone), geosphere),
    currentTerrainUnitPoints,
  );
  const terrainUnitEnergeticalResources = reduceToAddParam(terrainUnitBiomes, 'energeticalResources');
  const terrainUnitFoodResources = reduceToAddParam(terrainUnitBiomes, 'foodResources');
  const terrainUnitIndustrialResources = reduceToAddParam(terrainUnitBiomes, 'industrialResources');
  const terrainUnitMinorSettlements = flattenArrayOfArrays(
    terrainUnitBiomes.map((tub: Biome) => tub.minor_settlements),
  );

  if (currentTerrainUnitPoints < maxLandPoints) {
    temperatureZoneTerrainUnits = [
      ...temperatureZoneTerrainUnits,
      {
        name: '',
        biomes: terrainUnitBiomes,
        exploited_energetical_resources: reduceToAddParam(
          terrainUnitMinorSettlements.map((tUMS: MinorSettlement) => tUMS.production),
          'energetical',
        ),
        exploited_food_resources: reduceToAddParam(
          terrainUnitMinorSettlements.map((tUMS: MinorSettlement) => tUMS.production),
          'edible',
        ),
        exploited_industrial_resources: reduceToAddParam(
          terrainUnitMinorSettlements.map((tUMS: MinorSettlement) => tUMS.production),
          'industrial',
        ),
        location: temperatureZone,
        max_energetical_resources: parseNumbersToTwoDecimalDigits(terrainUnitEnergeticalResources),
        max_food_resources: parseNumbersToTwoDecimalDigits(terrainUnitFoodResources),
        max_industrial_resources: parseNumbersToTwoDecimalDigits(terrainUnitIndustrialResources),
        total_minor_settlements: terrainUnitMinorSettlements,
      },
    ];
    const currentMaxLandPoints = maxLandPoints - currentTerrainUnitPoints;
    generateLandTerraingUnitsByTemperatureZone(
      currentMaxLandPoints,
      planetSize,
      language,
      geosphere,
      planetType,
      temperatureZone,
      planetaryPopulation,
    );
  } else {
    if (maxLandPoints > 0) {
      const terrainLastUnitBiomes = generateTerrainUnit(
        geosphere,
        planetaryPopulation,
        temperatureZone,
        obtainTerrainTypeArray(planetType, obtainTemperatureZoneForTerrainTypesArray(temperatureZone), geosphere),
        maxLandPoints,
      );
      const terrainLastUnitEnergeticalResources = reduceToAddParam(terrainLastUnitBiomes, 'energeticalResources');
      const terrainLastUnitFoodResources = reduceToAddParam(terrainLastUnitBiomes, 'foodResources');
      const terrainLastUnitIndustrialResources = reduceToAddParam(terrainLastUnitBiomes, 'industrialResources');
      const terrainLastUnitMinorSettlements = flattenArrayOfArrays(
        terrainLastUnitBiomes.map((tlub: Biome) => tlub.minor_settlements),
      );
      temperatureZoneTerrainUnits = [
        ...temperatureZoneTerrainUnits,
        {
          name: '',
          biomes: terrainLastUnitBiomes,
          exploited_energetical_resources: reduceToAddParam(
            terrainLastUnitMinorSettlements.map((tUMS: MinorSettlement) => tUMS.production),
            'energetical',
          ),
          exploited_food_resources: reduceToAddParam(
            terrainLastUnitMinorSettlements.map((tUMS: MinorSettlement) => tUMS.production),
            'edible',
          ),
          exploited_industrial_resources: reduceToAddParam(
            terrainLastUnitMinorSettlements.map((tUMS: MinorSettlement) => tUMS.production),
            'industrial',
          ),
          location: temperatureZone,
          max_energetical_resources: parseNumbersToTwoDecimalDigits(terrainLastUnitEnergeticalResources),
          max_food_resources: parseNumbersToTwoDecimalDigits(terrainLastUnitFoodResources),
          max_industrial_resources: parseNumbersToTwoDecimalDigits(terrainLastUnitIndustrialResources),
          total_minor_settlements: terrainLastUnitMinorSettlements,
        },
      ];
    }
  }
};

export const generateTerrainUnitsByTemperatureZone = (
  maxLandPoints: number,
  maxOceanPoints: number,
  planetSize: string,
  language: string,
  geosphere: number,
  planetType: string,
  temperatureZone: string,
  planetaryPopulation: number,
) => {
  generateLandTerraingUnitsByTemperatureZone(
    maxLandPoints,
    planetSize,
    language,
    geosphere,
    planetType,
    temperatureZone,
    planetaryPopulation,
  );
  generateLandTerraingUnitsByTemperatureZone(
    maxOceanPoints,
    planetSize,
    language,
    0,
    planetType,
    temperatureZone,
    planetaryPopulation,
  );
};

export const generateInhabitatedPlanetTerrainUnits = (
  planetSize: string,
  language: any,
  planetType: string,
  geosphere: number,
  hidrosphere: number,
  planetaryPopulation: number,
): PlanetaryTerrainUnit[] => {
  const planetaryTerrainUnitsLimitsByPlanetType =
    terrainUnitsByTerranPlanetTypeAndPlanetZones[planetSize].max_terrain_units_points_by_zone;
  Object.keys(planetaryTerrainUnitsLimitsByPlanetType).forEach(t => {
    const maxTerrainUnitPoints =
      terrainUnitsByTerranPlanetTypeAndPlanetZones[planetSize].max_terrain_units_points_by_zone[t] *
      terrainUnitsByTerranPlanetTypeAndPlanetZones[planetSize].max_terrain_points;
    const maxLandPoints = Math.floor(maxTerrainUnitPoints * ((10 - hidrosphere) / 10));
    const maxOceanPoints = maxTerrainUnitPoints - maxLandPoints;
    generateTerrainUnitsByTemperatureZone(
      maxLandPoints,
      maxOceanPoints,
      planetSize,
      language,
      geosphere,
      planetType,
      t,
      planetaryPopulation,
    );
  });
  return temperatureZoneTerrainUnits;
};
