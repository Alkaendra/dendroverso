import { generateRandomFloat, generateRandomNumber } from '../../../../core/utils/utils';
import { MinorSettlement, MINOR_SETTLEMENT_TYPES } from './settlement.model';
import { Special } from './special.model';

export const terrainUnitsSizeAdjectives = {
  MINOR: 'Minor',
  MAYOR: 'Mayor',
  SUPER: 'Super',
};

export const terrainUnitSpecialsList = {
  BIOLOGICAL_COSMETIC_RESOURCE: {
    cultural_development_mod: 0,
    economical_development_mod: generateRandomFloat(0.1, 0.3),
    energetical_resources_mod: 0,
    food_resources_mod: 0,
    industrial_development_mod: 0.1,
    industrial_resources_mod: 0,
    label: 'Biological Cosmetic Resource',
    mayor_settlement_prob: 0,
    military_development_mod: 0,
    technological_development_mod: 0,
    type: '',
  },
  CAVERNOUS: {
    cultural_development_mod: 0,
    economical_development_mod: 0,
    energetical_resources_mod: 0,
    food_resources_mod: 0,
    industrial_development_mod: 0,
    industrial_resources_mod: 0,
    label: 'Cavernous',
    mayor_settlement_prob: generateRandomFloat(1, 2),
    military_development_mod: 0,
    technological_development_mod: 0,
    type: '',
  },
  EXOTIC_ENERGETICAL_RESOURCE: {
    cultural_development_mod: 0,
    economical_development_mod: generateRandomFloat(0.1, 0.3),
    energetical_resources_mod: generateRandomFloat(0.1, 0.3),
    food_resources_mod: 0,
    industrial_resources_mod: 0,
    industrial_development_mod: 0.1,
    label: 'Exotic Energetical Resource',
    mayor_settlement_prob: 0,
    military_development_mod: 0,
    technological_development_mod: 0,
    type: '',
  },
  EXOTIC_FAUNA: {
    cultural_development_mod: 0,
    economical_development_mod: generateRandomFloat(0.1, 0.3),
    energetical_resources_mod: 0,
    food_resources_mod: 0.01,
    industrial_development_mod: 0,
    industrial_resources_mod: 0,
    label: 'Exotic Fauna',
    mayor_settlement_prob: 0,
    military_development_mod: 0,
    technological_development_mod: 0,
    type: '',
  },
  EXOTIC_FLORA: {
    cultural_development_mod: 0,
    economical_development_mod: generateRandomFloat(0.1, 0.3),
    energetical_resources_mod: 0,
    food_resources_mod: 0.01,
    industrial_development_mod: 0,
    industrial_resources_mod: 0,
    label: 'Exotic Flora',
    mayor_settlement_prob: 0,
    military_development_mod: 0,
    technological_development_mod: 0,
    type: '',
  },
  EXOTIC_INDUSTRIAL_RESOURCE: {
    cultural_development_mod: 0,
    economical_development_mod: generateRandomFloat(0.1, 0.3),
    energetical_resources_mod: 0,
    food_resources_mod: 0,
    industrial_development_mod: 0.2,
    industrial_resources_mod: generateRandomFloat(0.1, 0.3),
    label: 'Exotic Industrial Resource',
    mayor_settlement_prob: 0,
    military_development_mod: 0,
    technological_development_mod: 0,
    type: '',
  },
  FAUNA_ABUNDANCE: {
    cultural_development_mod: 0,
    economical_development_mod: 0.01,
    energetical_resources_mod: 0,
    food_resources_mod: generateRandomFloat(0.1, 0.3),
    industrial_development_mod: 0,
    industrial_resources_mod: 0,
    label: 'Fauna Abundance',
    mayor_settlement_prob: 0,
    military_development_mod: 0,
    technological_development_mod: 0,
    type: '',
  },
  FERTILE_SOIL: {
    cultural_development_mod: 0,
    economical_development_mod: generateRandomFloat(0.1, 0.3),
    energetical_resources_mod: 0,
    food_resources_mod: generateRandomFloat(0.2, 0.5),
    industrial_development_mod: 0,
    industrial_resources_mod: 0,
    label: 'Fertile Soil',
    mayor_settlement_prob: generateRandomFloat(1, 2),
    military_development_mod: 0,
    technological_development_mod: 0,
    type: '',
  },
  GREATER_LAKES_SYSTEM: {
    cultural_development_mod: 0,
    economical_development_mod: generateRandomFloat(0.3, 0.5),
    energetical_resources_mod: 0,
    food_resources_mod: generateRandomFloat(0.3, 0.5),
    industrial_development_mod: 0,
    industrial_resources_mod: 0,
    label: 'Greater Lakes System',
    mayor_settlement_prob: generateRandomFloat(0.3, 0.5),
    military_development_mod: 0,
    technological_development_mod: 0,
    type: '',
  },
  GREATER_RIVER_SYSTEM: {
    cultural_development_mod: 0,
    economical_development_mod: generateRandomFloat(0.1, 0.3),
    energetical_resources_mod: 0,
    food_resources_mod: generateRandomFloat(0.1, 0.3),
    industrial_development_mod: 0,
    industrial_resources_mod: 0,
    label: 'Greater River System',
    mayor_settlement_prob: generateRandomFloat(0.3, 0.5),
    military_development_mod: 0,
    technological_development_mod: 0,
    type: '',
  },
  HOSTILE_BIOTA: {
    cultural_development_mod: 0,
    economical_development_mod: 0,
    energetical_resources_mod: 0,
    food_resources_mod: 0,
    industrial_development_mod: -generateRandomFloat(0.1, 0.3),
    industrial_resources_mod: 0,
    label: 'Hostile Biota',
    mayor_settlement_prob: -generateRandomFloat(1, 3),
    military_development_mod: 0,
    technological_development_mod: 0,
    type: '',
  },
  INTENSE_GEOTHERMAL_ACTIVITY: {
    cultural_development_mod: 0,
    economical_development_mod: generateRandomFloat(0.1, 0.3),
    energetical_resources_mod: generateRandomFloat(0.1, 0.3),
    food_resources_mod: 0,
    industrial_development_mod: generateRandomFloat(0.1, 0.3),
    industrial_resources_mod: 0,
    label: 'Intense Geothermal Activity',
    mayor_settlement_prob: -generateRandomFloat(1, 2),
    military_development_mod: 0,
    technological_development_mod: 0,
    type: '',
  },
  INTENSE_VULCANISM_ACTIVITY: {
    cultural_development_mod: 0,
    economical_development_mod: 0,
    energetical_resources_mod: generateRandomFloat(0.1, 0.3),
    food_resources_mod: 0,
    industrial_development_mod: 0,
    industrial_resources_mod: generateRandomFloat(0.1, 0.3),
    label: 'Intense Vulcanism Activity',
    mayor_settlement_prob: -generateRandomFloat(1, 2),
    military_development_mod: 0,
    technological_development_mod: 0,
    type: '',
  },
  POLLUTED_ATMOSPHERE: {
    cultural_development_mod: 0,
    economical_development_mod: -generateRandomFloat(0.1, 0.3),
    energetical_resources_mod: 0,
    food_resources_mod: 0,
    industrial_development_mod: -generateRandomFloat(0.1, 0.3),
    industrial_resources_mod: 0,
    label: 'Polluted Atmosphere',
    mayor_settlement_prob: -generateRandomFloat(1, 2),
    military_development_mod: 0,
    technological_development_mod: 0,
    type: '',
  },
  PSYCHOTROPIC_ECOSYSTEM: {
    cultural_development_mod: generateRandomFloat(0.1, 0.3),
    economical_development_mod: generateRandomFloat(0.1, 0.3),
    energetical_resources_mod: 0,
    food_resources_mod: 0,
    industrial_development_mod: -generateRandomFloat(0.1, 0.3),
    industrial_resources_mod: 0,
    label: 'Psychotropic Ecosystem',
    mayor_settlement_prob: -generateRandomFloat(0.5, 1),
    military_development_mod: 0,
    technological_development_mod: 0,
    type: '',
  },
  UNIQUE_ENERGETICAL_RESOURCE: {
    cultural_development_mod: 0,
    economical_development_mod: generateRandomFloat(1, 3),
    energetical_resources_mod: generateRandomFloat(0.1, 0.3),
    food_resources_mod: 0,
    industrial_development_mod: 0.2,
    industrial_resources_mod: 0,
    label: 'Unique Energetical Resource',
    mayor_settlement_prob: 0,
    military_development_mod: generateRandomFloat(0.1, 1),
    technological_development_mod: 0,
    type: '',
  },
  UNIQUE_INDUSTRIAL_RESOURCE: {
    cultural_development_mod: 0,
    economical_development_mod: generateRandomFloat(1, 3),
    energetical_resources_mod: 0,
    food_resources_mod: 0,
    industrial_development_mod: 0.2,
    industrial_resources_mod: generateRandomFloat(0.1, 0.3),
    label: 'Unique Industrial Resource',
    mayor_settlement_prob: 0,
    military_development_mod: generateRandomFloat(0.1, 1),
    technological_development_mod: 0,
    type: '',
  },
  UNSTABLE_WEATHER_CONDITIONS: {
    cultural_development_mod: 0,
    economical_development_mod: -generateRandomFloat(0.1, 0.2),
    energetical_resources_mod: generateRandomFloat(0.1, 0.3),
    food_resources_mod: 0,
    industrial_development_mod: -generateRandomFloat(0.1, 0.3),
    industrial_resources_mod: 0,
    label: 'Unstable Weather Conditions',
    mayor_settlement_prob: -generateRandomFloat(0.5, 1),
    military_development_mod: 0,
    technological_development_mod: 0,
    type: '',
  },
};

export const solidTerrainUnitsData: any = {
  ARTIC: {
    type: 'Artic',
    adjectives_by_climate: {
      poles: 'Artic',
      temperate: '',
      ecuatorial: '',
    },
    energetical_resources_mod: 0.1,
    food_resources_mod: 0,
    industrial_resources_mod: 0,
    maximun_minor_settlements: generateRandomNumber(1, 3),
    maximun_minor_settlement_population_mod: -6,
    minor_settlements_type_by_freq: [
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.MILITARY,
        freq: 'rare',
      },
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.MINING,
        freq: 'relevant',
      },
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.REFINING,
        freq: 'low',
      },
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.RESEARCH,
        freq: 'veryRare',
      },
    ],
    mayor_settlement_prob: -2,
  },
  DESERT: {
    type: 'Desert',
    adjectives_by_climate: {
      poles: '',
      temperate: 'Desert',
      ecuatorial: 'Desert',
    },
    energetical_resources_mod: 0.1,
    food_resources_mod: 0,
    industrial_resources_mod: 0.1,
    maximun_minor_settlements: generateRandomNumber(1, 3),
    maximun_minor_settlement_population_mod: -6,
    minor_settlements_type_by_freq: [
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.MILITARY,
        freq: 'veryRare',
      },
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.MINING,
        freq: 'relevant',
      },
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.REFINING,
        freq: 'normal',
      },
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.RESEARCH,
        freq: 'veryRare',
      },
    ],
    mayor_settlement_prob: -2,
  },
  FOREST: {
    type: 'Forest',
    adjectives_by_climate: {
      poles: 'Taiga',
      temperate: 'Forest',
      ecuatorial: 'Jungle',
    },
    energetical_resources_mod: 0,
    food_resources_mod: 0.2,
    industrial_resources_mod: 0,
    maximun_minor_settlements: generateRandomNumber(3, 12),
    maximun_minor_settlement_population_mod: -3,
    minor_settlements_type_by_freq: [
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.CULTURAL,
        freq: 'rare',
      },
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.FARMING,
        freq: 'normal',
      },
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.MILITARY,
        freq: 'veryRare',
      },
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.MINING,
        freq: 'low',
      },
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.REFINING,
        freq: 'low',
      },
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.RESEARCH,
        freq: 'veryRare',
      },
    ],
    mayor_settlement_prob: 1,
  },
  HILLS: {
    type: 'Hills',
    adjectives_by_climate: {
      poles: 'Hills',
      temperate: 'Hills',
      ecuatorial: 'Hills',
    },
    energetical_resources_mod: 0,
    food_resources_mod: 0.02,
    industrial_resources_mod: 0.1,
    maximun_minor_settlements: generateRandomNumber(3, 6),
    maximun_minor_settlement_population_mod: -4,
    minor_settlements_type_by_freq: [
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.CULTURAL,
        freq: 'rare',
      },
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.MILITARY,
        freq: 'veryRare',
      },
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.MINING,
        freq: 'relevant',
      },
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.REFINING,
        freq: 'normal',
      },
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.RESEARCH,
        freq: 'veryRare',
      },
    ],
    mayor_settlement_prob: 0,
  },
  MARSH: {
    type: 'Marsh',
    adjectives_by_climate: {
      poles: '',
      temperate: 'Marsh',
      ecuatorial: 'Marsh',
    },
    energetical_resources_mod: 0.05,
    food_resources_mod: 0.01,
    industrial_resources_mod: 0.05,
    maximun_minor_settlements: generateRandomNumber(1, 3),
    maximun_minor_settlement_population_mod: -6,
    minor_settlements_type_by_freq: [
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.MINING,
        freq: 'low',
      },
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.REFINING,
        freq: 'normal',
      },
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.RESEARCH,
        freq: 'veryRare',
      },
    ],
    mayor_settlement_prob: 0,
  },
  MOUNTAINS: {
    type: 'Mountains',
    adjectives_by_climate: {
      poles: 'Mountains',
      temperate: 'Mountains',
      ecuatorial: 'Mountains',
    },
    energetical_resources_mod: 0,
    food_resources_mod: 0,
    industrial_resources_mod: 0.2,
    maximun_minor_settlements: generateRandomNumber(1, 3),
    maximun_minor_settlement_population_mod: -6,
    minor_settlements_type_by_freq: [
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.CULTURAL,
        freq: 'rare',
      },
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.MILITARY,
        freq: 'veryRare',
      },
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.MINING,
        freq: 'relevant',
      },
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.REFINING,
        freq: 'low',
      },
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.RESEARCH,
        freq: 'veryRare',
      },
    ],
    mayor_settlement_prob: 0,
  },
  PLAINS: {
    type: 'Plains',
    adjectives_by_climate: {
      poles: 'Tundra',
      temperate: 'Plains',
      ecuatorial: 'Savanna',
    },
    energetical_resources_mod: 0,
    food_resources_mod: 0.22,
    industrial_resources_mod: 0,
    maximun_minor_settlements: generateRandomNumber(6, 20),
    maximun_minor_settlement_population_mod: -2,
    minor_settlements_type_by_freq: [
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.CULTURAL,
        freq: 'rare',
      },
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.FARMING,
        freq: 'relevant',
      },
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.MILITARY,
        freq: 'rare',
      },
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.MINING,
        freq: 'low',
      },
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.REFINING,
        freq: 'low',
      },
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.RESEARCH,
        freq: 'veryRare',
      },
    ],
    mayor_settlement_prob: 2,
  },
};

export const liquidTerrainTypes: any = {
  SEA: {
    type: 'Sea',
    adjectives_by_climate: {
      poles: 'Ice Sea',
      temperate: 'Sea',
      ecuatorial: 'Sea',
    },
    energetical_resources_mod: 0.1,
    food_resources_mod: 0.2,
    industrial_resources_mod: 0,
    maximun_minor_settlements: generateRandomNumber(1, 3),
    maximun_minor_settlement_population_mod: -6,
    minor_settlements_type_by_freq: [
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.CULTURAL,
        freq: 'veryRare',
      },
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.FARMING,
        freq: 'relevant',
      },
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.MILITARY,
        freq: 'veryRare',
      },
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.MINING,
        freq: 'low',
      },
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.REFINING,
        freq: 'low',
      },
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.RESEARCH,
        freq: 'veryRare',
      },
    ],
  },
  OCEAN: {
    type: 'Ocean',
    adjectives_by_climate: {
      poles: 'Shallow Ocean',
      temperate: 'Ocean',
      ecuatorial: 'Ocean',
    },
    energetical_resources_mod: 0.1,
    food_resources_mod: 0.3,
    industrial_resources_mod: 0,
    maximun_minor_settlements: generateRandomNumber(1, 6),
    maximun_minor_settlement_population_mod: -6,
    minor_settlements_type_by_freq: [
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.CULTURAL,
        freq: 'veryRare',
      },
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.FARMING,
        freq: 'relevant',
      },
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.MILITARY,
        freq: 'veryRare',
      },
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.MINING,
        freq: 'low',
      },
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.REFINING,
        freq: 'low',
      },
      {
        dataToSend: MINOR_SETTLEMENT_TYPES.RESEARCH,
        freq: 'veryRare',
      },
    ],
  },
};

export const planetLocation = {
  POLES: ['North Pole', 'South Pole'],
  TEMPERATE: ['North Temperate Belt', 'South Temperate Belt'],
  EQUATORIAL: ['Equatorial Belt'],
};

export const obtainTemperatureZoneForTerrainTypesArray = (temperatureZone: string) => {
  switch (temperatureZone) {
    case 'north_pole_zone':
    case 'south_pole_zone':
      return 'poles';
    case 'north_temperate_zone':
    case 'south_temperate_zone':
      return 'temperate';
    default:
      return 'ecuatorial';
  }
};

export const terrainUnitsByTerranPlanetTypeAndPlanetZones: any = {
  mT: {
    max_terrain_points: 6,
    max_terrain_units_points_by_zone: {
      north_pole_zone: 1,
      north_temperate_zone: 2,
      ecuatorial_zone: 2,
      south_temperate_zone: 2,
      south_pole_zone: 1,
    },
  },
  sT: {
    max_terrain_points: 6,
    max_terrain_units_points_by_zone: {
      north_pole_zone: 2,
      north_temperate_zone: 3,
      ecuatorial_zone: 3,
      south_temperate_zone: 3,
      south_pole_zone: 2,
    },
  },
  T: {
    max_terrain_points: 12,
    max_terrain_units_points_by_zone: {
      north_pole_zone: 2,
      north_temperate_zone: 4,
      ecuatorial_zone: 3,
      south_temperate_zone: 4,
      south_pole_zone: 2,
    },
  },
  ST: {
    max_terrain_points: 12,
    max_terrain_units_points_by_zone: {
      north_pole_zone: 3,
      north_temperate_zone: 5,
      ecuatorial_zone: 5,
      south_temperate_zone: 5,
      south_pole_zone: 3,
    },
  },
};

export interface Biome {
  energeticalResources: number;
  environment: string; // Solid (ex: Continent), Liquid (ex: Ocean), Gaseous (ex: Gas Giant atmospheric layer)
  foodResources: number;
  industrialResources: number;
  mayor_settlement_prob: number;
  minor_settlements: MinorSettlement[];
  name: string;
  population_density?: string;
  type: string; // Artic, Desert, Forest, etc.
  value: number;
}

export interface PlanetaryTerrainUnit {
  biomes: Biome[];
  exploited_energetical_resources?: number;
  exploited_food_resources?: number;
  exploited_industrial_resources?: number;
  infrastructures_development?: number; // Level of rails, roads and other communication, connection or navigation ways
  location: string;
  mayor_settlements?: any[];
  max_energetical_resources: number;
  max_food_resources: number;
  max_industrial_resources: number;
  name: string;
  specials?: Special[];
  total_minor_settlements?: any;
}

export const terrestrialHabitablePlanetsTerrainUnits = (TI: number): any => ({
  cold: {
    poles: {
      TI: {
        // Valor Topográfico Medio
        ...(TI < 5 && {
          terrain_types: [
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.FOREST.adjectives_by_climate.cold,
                type: solidTerrainUnitsData.FOREST.type,
              },
              freq: 'low',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.PLAINS.adjectives_by_climate.cold,
                type: solidTerrainUnitsData.PLAINS.type,
              },
              freq: 'low',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.HILLS.adjectives_by_climate.cold,
                type: solidTerrainUnitsData.HILLS.type,
              },
              freq: 'low',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.ARTIC.adjectives_by_climate.cold,
                type: solidTerrainUnitsData.ARTIC.type,
              },
              freq: 'high',
            },
          ],
        }),
        ...(TI >= 5 && {
          terrain_types: [
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.FOREST.adjectives_by_climate.cold,
                type: solidTerrainUnitsData.FOREST.type,
              },
              freq: 'minor',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.HILLS.adjectives_by_climate.cold,
                type: solidTerrainUnitsData.HILLS.type,
              },
              freq: 'normal',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.MOUNTAINS.adjectives_by_climate.cold,
                type: solidTerrainUnitsData.MOUNTAINS.type,
              },
              freq: 'high',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.ARTIC.adjectives_by_climate.cold,
                type: solidTerrainUnitsData.ARTIC.type,
              },
              freq: 'normal',
            },
          ],
        }),
      },
    },
    temperate: {
      TI: {
        // Valor Topográfico Medio
        ...(TI < 5 && {
          terrain_types: [
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.FOREST.adjectives_by_climate.temperate,
                type: solidTerrainUnitsData.FOREST.type,
              },
              freq: 'relevant',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.PLAINS.adjectives_by_climate.temperate,
                type: solidTerrainUnitsData.PLAINS.type,
              },
              freq: 'high',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.HILLS.adjectives_by_climate.temperate,
                type: solidTerrainUnitsData.HILLS.type,
              },
              freq: 'low',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.MOUNTAINS.adjectives_by_climate.temperate,
                type: solidTerrainUnitsData.MOUNTAINS.type,
              },
              freq: 'low',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.MARSH.adjectives_by_climate.temperate,
                type: solidTerrainUnitsData.MARSH.type,
              },
              freq: 'minor',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.DESERT.adjectives_by_climate.temperate,
                type: solidTerrainUnitsData.DESERT.type,
              },
              freq: 'minor',
            },
          ],
        }),
        ...(TI >= 5 && {
          terrain_types: [
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.FOREST.adjectives_by_climate.temperate,
                type: solidTerrainUnitsData.FOREST.type,
              },
              freq: 'relevant',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.PLAINS.adjectives_by_climate.temperate,
                type: solidTerrainUnitsData.PLAINS.type,
              },
              freq: 'relevant',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.HILLS.adjectives_by_climate.temperate,
                type: solidTerrainUnitsData.HILLS.type,
              },
              freq: 'veryLow',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.MOUNTAINS.adjectives_by_climate.temperate,
                type: solidTerrainUnitsData.MOUNTAINS.type,
              },
              freq: 'normal',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.MARSH.adjectives_by_climate.temperate,
                type: solidTerrainUnitsData.MARSH.type,
              },
              freq: 'minor',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.DESERT.adjectives_by_climate.temperate,
                type: solidTerrainUnitsData.DESERT.type,
              },
              freq: 'minor',
            },
          ],
        }),
      },
    },
    ecuatorial: {
      TI: {
        // Valor Topográfico Medio
        ...(TI < 5 && {
          terrain_types: [
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.FOREST.adjectives_by_climate.warm,
                type: solidTerrainUnitsData.FOREST.type,
              },
              freq: 'relevant',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.PLAINS.adjectives_by_climate.warm,
                type: solidTerrainUnitsData.PLAINS.type,
              },
              freq: 'low',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.MARSH.adjectives_by_climate.warm,
                type: solidTerrainUnitsData.MARSH.type,
              },
              freq: 'low',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.HILLS.adjectives_by_climate.warm,
                type: solidTerrainUnitsData.HILLS.type,
              },
              freq: 'relevant',
            },
          ],
        }),
        ...(TI >= 5 && {
          terrain_types: [
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.FOREST.adjectives_by_climate.warm,
                type: solidTerrainUnitsData.FOREST.type,
              },
              freq: 'low',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.PLAINS.adjectives_by_climate.warm,
                type: solidTerrainUnitsData.PLAINS.type,
              },
              freq: 'relevant',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.MARSH.adjectives_by_climate.warm,
                type: solidTerrainUnitsData.MARSH.type,
              },
              freq: 'minor',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.HILLS.adjectives_by_climate.warm,
                type: solidTerrainUnitsData.HILLS.type,
              },
              freq: 'low',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.MOUNTAINS.adjectives_by_climate.warm,
                type: solidTerrainUnitsData.MOUNTAINS.type,
              },
              freq: 'relevant',
            },
          ],
        }),
      },
    },
  },
  temperate: {
    poles: {
      TI: {
        // Valor Topográfico Medio
        ...(TI < 5 && {
          terrain_types: [
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.FOREST.adjectives_by_climate.cold,
                type: solidTerrainUnitsData.FOREST.type,
              },
              freq: 'relevant',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.PLAINS.adjectives_by_climate.cold,
                type: solidTerrainUnitsData.PLAINS.type,
              },
              freq: 'relevant',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.HILLS.adjectives_by_climate.cold,
                type: solidTerrainUnitsData.HILLS.type,
              },
              freq: 'low',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.ARTIC.adjectives_by_climate.cold,
                type: solidTerrainUnitsData.ARTIC.type,
              },
              freq: 'high',
            },
          ],
        }),
        ...(TI >= 5 && {
          terrain_types: [
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.FOREST.adjectives_by_climate.cold,
                type: solidTerrainUnitsData.FOREST.type,
              },
              freq: 'low',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.HILLS.adjectives_by_climate.cold,
                type: solidTerrainUnitsData.HILLS.type,
              },
              freq: 'relevant',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.MOUNTAINS.adjectives_by_climate.cold,
                type: solidTerrainUnitsData.MOUNTAINS.type,
              },
              freq: 'relevant',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.ARTIC.adjectives_by_climate.cold,
                type: solidTerrainUnitsData.ARTIC.type,
              },
              freq: 'normal',
            },
          ],
        }),
      },
    },
    temperate: {
      TI: {
        // Valor Topográfico Medio
        ...(TI < 5 && {
          terrain_types: [
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.FOREST.adjectives_by_climate.temperate,
                type: solidTerrainUnitsData.FOREST.type,
              },
              freq: 'relevant',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.PLAINS.adjectives_by_climate.temperate,
                type: solidTerrainUnitsData.PLAINS.type,
              },
              freq: 'high',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.HILLS.adjectives_by_climate.temperate,
                type: solidTerrainUnitsData.HILLS.type,
              },
              freq: 'veryLow',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.MOUNTAINS.adjectives_by_climate.temperate,
                type: solidTerrainUnitsData.MOUNTAINS.type,
              },
              freq: 'minor',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.DESERT.adjectives_by_climate.temperate,
                type: solidTerrainUnitsData.DESERT.type,
              },
              freq: 'minor',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.MARSH.adjectives_by_climate.temperate,
                type: solidTerrainUnitsData.MARSH.type,
              },
              freq: 'minor',
            },
          ],
        }),
        ...(TI >= 5 && {
          terrain_types: [
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.FOREST.adjectives_by_climate.temperate,
                type: solidTerrainUnitsData.FOREST.type,
              },
              freq: 'relevant',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.PLAINS.adjectives_by_climate.temperate,
                type: solidTerrainUnitsData.PLAINS.type,
              },
              freq: 'relevant',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.HILLS.adjectives_by_climate.temperate,
                type: solidTerrainUnitsData.HILLS.type,
              },
              freq: 'veryLow',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.MOUNTAINS.adjectives_by_climate.temperate,
                type: solidTerrainUnitsData.MOUNTAINS.type,
              },
              freq: 'normal',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.DESERT.adjectives_by_climate.temperate,
                type: solidTerrainUnitsData.DESERT.type,
              },
              freq: 'minor',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.MARSH.adjectives_by_climate.temperate,
                type: solidTerrainUnitsData.MARSH.type,
              },
              freq: 'minor',
            },
          ],
        }),
      },
    },
    ecuatorial: {
      TI: {
        // Valor Topográfico Medio
        ...(TI < 5 && {
          terrain_types: [
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.FOREST.adjectives_by_climate.warm,
                type: solidTerrainUnitsData.FOREST.type,
              },
              freq: 'high',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.PLAINS.adjectives_by_climate.warm,
                type: solidTerrainUnitsData.PLAINS.type,
              },
              freq: 'relevant',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.MARSH.adjectives_by_climate.warm,
                type: solidTerrainUnitsData.MARSH.type,
              },
              freq: 'veryLow',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.HILLS.adjectives_by_climate.warm,
                type: solidTerrainUnitsData.HILLS.type,
              },
              freq: 'low',
            },
          ],
        }),
        ...(TI >= 5 && {
          terrain_types: [
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.FOREST.adjectives_by_climate.warm,
                type: solidTerrainUnitsData.FOREST.type,
              },
              freq: 'high',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.PLAINS.adjectives_by_climate.warm,
                type: solidTerrainUnitsData.PLAINS.type,
              },
              freq: 'normal',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.MARSH.adjectives_by_climate.warm,
                type: solidTerrainUnitsData.MARSH.type,
              },
              freq: 'veryLow',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.HILLS.adjectives_by_climate.warm,
                type: solidTerrainUnitsData.HILLS.type,
              },
              freq: 'veryLow',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.MOUNTAINS.adjectives_by_climate.warm,
                type: solidTerrainUnitsData.MOUNTAINS.type,
              },
              freq: 'low',
            },
          ],
        }),
      },
    },
  },
  warm: {
    poles: {
      TI: {
        // Valor Topográfico Medio
        ...(TI < 5 && {
          terrain_types: [
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.FOREST.adjectives_by_climate.cold,
                type: solidTerrainUnitsData.FOREST.type,
              },
              freq: 'relevant',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.PLAINS.adjectives_by_climate.cold,
                type: solidTerrainUnitsData.PLAINS.type,
              },
              freq: 'high',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.HILLS.adjectives_by_climate.cold,
                type: solidTerrainUnitsData.HILLS.type,
              },
              freq: 'low',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.ARTIC.adjectives_by_climate.cold,
                type: solidTerrainUnitsData.ARTIC.type,
              },
              freq: 'normal',
            },
          ],
        }),
        ...(TI >= 5 && {
          terrain_types: [
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.FOREST.adjectives_by_climate.cold,
                type: solidTerrainUnitsData.FOREST.type,
              },
              freq: 'relevant',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.HILLS.adjectives_by_climate.cold,
                type: solidTerrainUnitsData.HILLS.type,
              },
              freq: 'relevant',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.MOUNTAINS.adjectives_by_climate.cold,
                type: solidTerrainUnitsData.MOUNTAINS.type,
              },
              freq: 'high',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.ARTIC.adjectives_by_climate.cold,
                type: solidTerrainUnitsData.ARTIC.type,
              },
              freq: 'normal',
            },
          ],
        }),
      },
    },
    temperate: {
      TI: {
        // Valor Topográfico Medio
        ...(TI < 5 && {
          terrain_types: [
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.FOREST.adjectives_by_climate.temperate,
                type: solidTerrainUnitsData.FOREST.type,
              },
              freq: 'normal',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.PLAINS.adjectives_by_climate.temperate,
                type: solidTerrainUnitsData.PLAINS.type,
              },
              freq: 'high',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.HILLS.adjectives_by_climate.temperate,
                type: solidTerrainUnitsData.HILLS.type,
              },
              freq: 'veryLow',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.MOUNTAINS.adjectives_by_climate.temperate,
                type: solidTerrainUnitsData.MOUNTAINS.type,
              },
              freq: 'minor',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.DESERT.adjectives_by_climate.temperate,
                type: solidTerrainUnitsData.DESERT.type,
              },
              freq: 'normal',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.MARSH.adjectives_by_climate.temperate,
                type: solidTerrainUnitsData.MARSH.type,
              },
              freq: 'rare',
            },
          ],
        }),
        ...(TI >= 5 && {
          terrain_types: [
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.FOREST.adjectives_by_climate.temperate,
                type: solidTerrainUnitsData.FOREST.type,
              },
              freq: 'normal',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.PLAINS.adjectives_by_climate.temperate,
                type: solidTerrainUnitsData.PLAINS.type,
              },
              freq: 'relevant',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.HILLS.adjectives_by_climate.temperate,
                type: solidTerrainUnitsData.HILLS.type,
              },
              freq: 'veryLow',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.MOUNTAINS.adjectives_by_climate.temperate,
                type: solidTerrainUnitsData.MOUNTAINS.type,
              },
              freq: 'low',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.DESERT.adjectives_by_climate.temperate,
                type: solidTerrainUnitsData.DESERT.type,
              },
              freq: 'normal',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.MARSH.adjectives_by_climate.temperate,
                type: solidTerrainUnitsData.MARSH.type,
              },
              freq: 'rare',
            },
          ],
        }),
      },
    },
    ecuatorial: {
      TI: {
        // Valor Topográfico Medio
        ...(TI < 5 && {
          terrain_types: [
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.FOREST.adjectives_by_climate.warm,
                type: solidTerrainUnitsData.FOREST.type,
              },
              freq: 'relevant',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.PLAINS.adjectives_by_climate.warm,
                type: solidTerrainUnitsData.PLAINS.type,
              },
              freq: 'relevant',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.MARSH.adjectives_by_climate.warm,
                type: solidTerrainUnitsData.MARSH.type,
              },
              freq: 'normal',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.HILLS.adjectives_by_climate.warm,
                type: solidTerrainUnitsData.HILLS.type,
              },
              freq: 'relevant',
            },
          ],
        }),
        ...(TI >= 5 && {
          terrain_types: [
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.FOREST.adjectives_by_climate.warm,
                type: solidTerrainUnitsData.FOREST.type,
              },
              freq: 'high',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.PLAINS.adjectives_by_climate.warm,
                type: solidTerrainUnitsData.PLAINS.type,
              },
              freq: 'veryLow',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.MARSH.adjectives_by_climate.warm,
                type: solidTerrainUnitsData.MARSH.type,
              },
              freq: 'veryLow',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.HILLS.adjectives_by_climate.warm,
                type: solidTerrainUnitsData.HILLS.type,
              },
              freq: 'veryLow',
            },
            {
              dataToSend: {
                planet_type_adjective: solidTerrainUnitsData.MOUNTAINS.adjectives_by_climate.warm,
                type: solidTerrainUnitsData.MOUNTAINS.type,
              },
              freq: 'normal',
            },
          ],
        }),
      },
    },
  },
});

export const liquidHabitablePlanetsTerrainUnits = (): any => ({
  terrain_types: [
    {
      dataToSend: {
        planet_type_adjective: liquidTerrainTypes.OCEAN.adjectives_by_climate.temperate,
        type: liquidTerrainTypes.OCEAN.type,
      },
      freq: 'high',
    },
    {
      dataToSend: {
        planet_type_adjective: liquidTerrainTypes.SEA.adjectives_by_climate.temperate,
        type: liquidTerrainTypes.SEA.type,
      },
      freq: 'normal',
    },
  ],
});
