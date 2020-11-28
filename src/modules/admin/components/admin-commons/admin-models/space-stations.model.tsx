import {
  habitablePlanetRoleType,
  HABITABLE_PLANET_ROLE,
} from '../../../../core/utils/generate-planets/generate-planets';
import { CombatCapacity } from './combat-capacity.model';

export const SPACE_STATION_LOCATION = {
  CONNECTION_ENTRY: 'Connection Entry',
  IN_OTHER_SYSTEM_PLANET: 'In Other System Planet',
  ORBIT: 'Orbit',
  OTHER: 'Other',
};

export const spaceStationLocationFrequencies = [
  {
    dataToSend: SPACE_STATION_LOCATION.CONNECTION_ENTRY,
    freq: 'normal',
  },
  {
    dataToSend: SPACE_STATION_LOCATION.IN_OTHER_SYSTEM_PLANET,
    freq: 'minor',
  },
  {
    dataToSend: SPACE_STATION_LOCATION.ORBIT,
    freq: 'mayor',
  },
  {
    dataToSend: SPACE_STATION_LOCATION.OTHER,
    freq: 'veryRare',
  },
];

export const SPACE_STATION_QUALITY = {
  PRIMITVE: 'Primitive',
  ANCIENT: 'Ancient',
  DEFICIENT: 'Deficient',
  NORMAL: 'Normal',
  SUPERB: 'Superb',
  ELITE: 'Elite',
};

export const SPACE_STATION_SIZE = {
  SMALL: 'Small',
  MEDIUM: 'Medium',
  LARGE: 'Large',
  VERY_LARGE: 'Very Large',
  HUGE: 'Huge',
};

export const spaceStationSizeFrequenciesByPlanetPopulation = (population: number) => {
  switch (true) {
    case population > 0 && population <= 3:
      return [
        {
          dataToSend: SPACE_STATION_SIZE.LARGE,
          freq: 'rare',
        },
        {
          dataToSend: SPACE_STATION_SIZE.MEDIUM,
          freq: 'normal',
        },
        {
          dataToSend: SPACE_STATION_SIZE.SMALL,
          freq: 'relevant',
        },
      ];
    case population > 3 && population <= 6:
      return [
        {
          dataToSend: SPACE_STATION_SIZE.VERY_LARGE,
          freq: 'minor',
        },
        {
          dataToSend: SPACE_STATION_SIZE.LARGE,
          freq: 'normal',
        },
        {
          dataToSend: SPACE_STATION_SIZE.MEDIUM,
          freq: 'relevant',
        },
        {
          dataToSend: SPACE_STATION_SIZE.SMALL,
          freq: 'minor',
        },
      ];
    case population > 6 && population <= 9:
      return [
        {
          dataToSend: SPACE_STATION_SIZE.VERY_LARGE,
          freq: 'normal',
        },
        {
          dataToSend: SPACE_STATION_SIZE.LARGE,
          freq: 'relevant',
        },
        {
          dataToSend: SPACE_STATION_SIZE.MEDIUM,
          freq: 'normal',
        },
        {
          dataToSend: SPACE_STATION_SIZE.SMALL,
          freq: 'rare',
        },
      ];
    default:
      return [
        {
          dataToSend: SPACE_STATION_SIZE.HUGE,
          freq: 'veryRare',
        },
        {
          dataToSend: SPACE_STATION_SIZE.VERY_LARGE,
          freq: 'relevant',
        },
        {
          dataToSend: SPACE_STATION_SIZE.LARGE,
          freq: 'normal',
        },
        {
          dataToSend: SPACE_STATION_SIZE.MEDIUM,
          freq: 'normal',
        },
        {
          dataToSend: SPACE_STATION_SIZE.SMALL,
          freq: 'veryRare',
        },
      ];
  }
};

export const SPACE_STATION_TYPE = {
  ADMINISTRATIVE: 'Administrative',
  COMMERCIAL: 'Commercial',
  CULTURAL: 'Cultural',
  MILITAR: 'Militar',
  TRAINING: 'Training',
  RECREATIONAL: 'Recreational',
  REPAIR: 'Repair',
  REFINERY: 'Refinery',
  RESEARCH: 'Research',
  RESOURCE_PROCESSING: 'Resource Processing',
  SHIPYARD: 'Shipyard',
};

export const spaceStationTypesByPlanetRole = (role: habitablePlanetRoleType) => {
  switch (role) {
    case HABITABLE_PLANET_ROLE.NATION_CAPITAL:
      return {
        defensiveCombatCapacityMod: 3,
        offensiveCombatCapacityMod: 3,
        mainType: SPACE_STATION_TYPE.ADMINISTRATIVE,
        possibleSubTypes: [
          {
            dataToSend: SPACE_STATION_TYPE.COMMERCIAL,
            freq: 'normal',
          },
          {
            dataToSend: SPACE_STATION_TYPE.CULTURAL,
            freq: 'low',
          },
          {
            dataToSend: SPACE_STATION_TYPE.RECREATIONAL,
            freq: 'low',
          },
          {
            dataToSend: SPACE_STATION_TYPE.SHIPYARD,
            freq: 'minor',
          },
          {
            dataToSend: SPACE_STATION_TYPE.RESEARCH,
            freq: 'minor',
          },
          {
            dataToSend: SPACE_STATION_TYPE.MILITAR,
            freq: 'low',
          },
          {
            dataToSend: SPACE_STATION_TYPE.TRAINING,
            freq: 'low',
          },
        ],
      };
    case HABITABLE_PLANET_ROLE.REGION_CAPITAL:
      return {
        defensiveCombatCapacityMod: 2,
        offensiveCombatCapacityMod: 2,
        mainType: SPACE_STATION_TYPE.ADMINISTRATIVE,
        possibleSubTypes: [
          {
            dataToSend: SPACE_STATION_TYPE.COMMERCIAL,
            freq: 'normal',
          },
          {
            dataToSend: SPACE_STATION_TYPE.CULTURAL,
            freq: 'low',
          },
          {
            dataToSend: SPACE_STATION_TYPE.RECREATIONAL,
            freq: 'low',
          },
          {
            dataToSend: SPACE_STATION_TYPE.SHIPYARD,
            freq: 'minor',
          },
          {
            dataToSend: SPACE_STATION_TYPE.RESEARCH,
            freq: 'minor',
          },
        ],
      };
    case HABITABLE_PLANET_ROLE.MAYOR_RESOURCE_PRODUCTOR:
    case HABITABLE_PLANET_ROLE.MINOR_RESOURCE_PRODUCTOR:
      return {
        defensiveCombatCapacityMod: 2,
        offensiveCombatCapacityMod: 1,
        mainType: SPACE_STATION_TYPE.RESOURCE_PROCESSING,
        possibleSubTypes: [
          {
            dataToSend: SPACE_STATION_TYPE.COMMERCIAL,
            freq: 'normal',
          },
          {
            dataToSend: SPACE_STATION_TYPE.REPAIR,
            freq: 'minor',
          },
          {
            dataToSend: SPACE_STATION_TYPE.REFINERY,
            freq: 'low',
          },
        ],
      };
    case HABITABLE_PLANET_ROLE.MAYOR_INDUSTRIAL_CENTER:
    case HABITABLE_PLANET_ROLE.MINOR_INDUSTRIAL_CENTER:
      return {
        defensiveCombatCapacityMod: 2,
        offensiveCombatCapacityMod: 1,
        mainType: SPACE_STATION_TYPE.COMMERCIAL,
        possibleSubTypes: [
          {
            dataToSend: SPACE_STATION_TYPE.RESOURCE_PROCESSING,
            freq: 'normal',
          },
          {
            dataToSend: SPACE_STATION_TYPE.RESEARCH,
            freq: 'minor',
          },
          {
            dataToSend: SPACE_STATION_TYPE.REFINERY,
            freq: 'low',
          },
          {
            dataToSend: SPACE_STATION_TYPE.COMMERCIAL,
            freq: 'minor',
          },
        ],
      };
    case HABITABLE_PLANET_ROLE.MILITARY_BASE:
      return {
        defensiveCombatCapacityMod: 3,
        offensiveCombatCapacityMod: 3,
        mainType: SPACE_STATION_TYPE.MILITAR,
        possibleSubTypes: [
          {
            dataToSend: SPACE_STATION_TYPE.SHIPYARD,
            freq: 'normal',
          },
          {
            dataToSend: SPACE_STATION_TYPE.TRAINING,
            freq: 'low',
          },
          {
            dataToSend: SPACE_STATION_TYPE.REPAIR,
            freq: 'minor',
          },
        ],
      };
    case HABITABLE_PLANET_ROLE.CULTURAL_CENTER:
      return {
        defensiveCombatCapacityMod: 0,
        offensiveCombatCapacityMod: 0,
        mainType: SPACE_STATION_TYPE.CULTURAL,
        possibleSubTypes: [
          {
            dataToSend: SPACE_STATION_TYPE.RECREATIONAL,
            freq: 'normal',
          },
          {
            dataToSend: SPACE_STATION_TYPE.COMMERCIAL,
            freq: 'normal',
          },
          {
            dataToSend: SPACE_STATION_TYPE.RESEARCH,
            freq: 'minor',
          },
        ],
      };
    case HABITABLE_PLANET_ROLE.RESEARCH_CENTER:
      return {
        defensiveCombatCapacityMod: 0,
        offensiveCombatCapacityMod: 0,
        mainType: SPACE_STATION_TYPE.RESEARCH,
        possibleSubTypes: [
          {
            dataToSend: SPACE_STATION_TYPE.COMMERCIAL,
            freq: 'minor',
          },
        ],
      };
    case HABITABLE_PLANET_ROLE.COLONY:
    case HABITABLE_PLANET_ROLE.OTHER:
      return {
        defensiveCombatCapacityMod: 0,
        offensiveCombatCapacityMod: 0,
        mainType: SPACE_STATION_TYPE.REPAIR,
        possibleSubTypes: [
          {
            dataToSend: SPACE_STATION_TYPE.COMMERCIAL,
            freq: 'minor',
          },
          {
            dataToSend: SPACE_STATION_TYPE.SHIPYARD,
            freq: 'minor',
          },
        ],
      };
  }
};

export interface SpaceStation {
  defensiveCapacity: CombatCapacity;
  location?: string;
  name?: string;
  offensiveCapacity: CombatCapacity;
  ownership?: string;
  quality?: string;
  size: string;
  system?: string;
  type: string[];
}
