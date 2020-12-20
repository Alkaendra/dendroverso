import { MayorSettlementDistricSpecial } from '../../../../core/utils/habitable-planet-specials/mayor-settlement-district-specials';
import { generateRandomFloat } from '../../../../core/utils/utils';
import { DistrictPopulationLaborForceDistribution } from './population.model';

export interface SettlementResourceProduction {
  edible: number;
  energetical: number;
  industrial: number;
}

export interface SettlementDevelopmentProduction {
  cultural: number;
  economical: number;
  industrial: number;
  martial: number;
  technological: number;
}

// Minor Settlements
export const MINOR_SETTLEMENT_TYPES = {
  CULTURAL: {
    development: {
      cultural: generateRandomFloat(0.1, 0.3),
      economical: generateRandomFloat(0.01, 0.05),
      industrial: 0,
      martial: 0,
      technological: 0,
    },
    maintenance: {
      edible: 0,
      energetical: 0.01,
      industrial: 0,
    },
    production: {
      edible: 0,
      energetical: 0,
      industrial: 0,
    },
    type: 'Cultural',
  },
  FARMING: {
    development: {
      cultural: 0,
      economical: generateRandomFloat(0.01, 0.05),
      industrial: 0,
      martial: 0,
      technological: 0,
    },
    maintenance: {
      edible: 0,
      energetical: 0.01,
      industrial: 0,
    },
    production: {
      edible: generateRandomFloat(0.01, 0.03),
      energetical: 0,
      industrial: 0,
    },
    type: 'Farming',
  },
  MILITARY: {
    development: {
      cultural: 0,
      economical: 0,
      industrial: 0,
      martial: generateRandomFloat(0.05, 0.1),
      technological: 0,
    },
    maintenance: {
      edible: 0.01,
      energetical: 0.01,
      industrial: 0.01,
    },
    production: {
      edible: 0,
      energetical: 0,
      industrial: 0,
    },
    type: 'Military',
  },
  MINING: {
    development: {
      cultural: 0,
      economical: generateRandomFloat(0.05, 0.1),
      industrial: 0,
      martial: 0,
      technological: 0,
    },
    maintenance: {
      edible: 0,
      energetical: 0.01,
      industrial: 0,
    },
    production: {
      edible: 0,
      energetical: 0,
      industrial: generateRandomFloat(0.01, 0.03),
    },
    type: 'Mining',
  },
  REFINING: {
    development: {
      cultural: 0,
      economical: generateRandomFloat(0.05, 0.1),
      industrial: 0,
      martial: 0,
      technological: 0,
    },
    maintenance: {
      edible: 0,
      energetical: 0,
      industrial: 0.01,
    },
    production: {
      edible: 0,
      energetical: generateRandomFloat(0.01, 0.03),
      industrial: 0,
    },
    type: 'Refining',
  },
  RESEARCH: {
    development: {
      cultural: 0,
      economical: generateRandomFloat(0.05, 0.1),
      industrial: 0,
      martial: 0,
      technological: generateRandomFloat(0.05, 0.1),
    },
    maintenance: {
      edible: 0,
      energetical: 0.01,
      industrial: 0.01,
    },
    production: {
      edible: 0,
      energetical: 0,
      industrial: 0,
    },
    type: 'Research',
  },
};

export interface MinorSettlement {
  development: SettlementDevelopmentProduction;
  loyalty?: string;
  name?: string;
  maintenance: SettlementResourceProduction;
  ownership?: string;
  parent_terrain_unit?: string;
  population: number;
  population_code?: string;
  production: SettlementResourceProduction;
  type?: string;
}

// Mayor Settlements
export const MAYOR_SETTLEMENT_DISTRICTS_TYPES = {
  CONURBATION: 'Conurbation',
  CULTURAL_DISTRICT: 'Cultural District',
  INDUSTRIAL_DISTRICT: 'Industrial District',
  MILITARY_DISTRICT: 'Military District',
  REFINERY_DISTRICT: 'Refinery District',
  RESEARCH_DISTRICT: 'Research District',
  TRADE_DISTRICT: 'Trade District',
  SLUMS: 'Slums',
  XENO_GHETTO: 'Xeno Ghetto',
};

// This are multipliers to basical production per not idle workers by species, population density modifier and designations
export let MAYOR_SETTLEMENT_DISTRICTS_BY_FREQ = [
  {
    dataToSend: {
      development: {
        administrative: [0.8, 1.5],
        cultural: [1, 1.2],
        economical: [1, 1.2],
        industrial: 1,
        martial: [1, 1.2],
        technological: 1,
      },
      maintenance: {
        edible: [1, 2],
        energetical: [1, 2],
        industrial: [1, 1.2],
      },
      non_workable_labor_force_percentage: [15, 25],
      occupational_maximun_percentages: {
        administrative: 15,
        cultural: 15,
        economical: 30,
        industrial: 5,
        martial: 5,
        technological: 5,
      },
      population: 2,
      type: MAYOR_SETTLEMENT_DISTRICTS_TYPES.CONURBATION,
    },
    freq: 'relevant',
  },
  {
    dataToSend: {
      development: {
        administrative: 1,
        cultural: [1, 1.5],
        economical: [1, 1.3],
        industrial: 1,
        martial: 1,
        technological: 1,
      },
      maintenance: {
        edible: 1,
        energetical: 1,
        industrial: 1,
      },
      non_workable_labor_force_percentage: [25, 35],
      occupational_maximun_percentages: {
        administrative: 5,
        cultural: 30,
        economical: 30,
        industrial: 5,
        martial: 5,
        technological: 5,
      },
      population: 0.5,
      type: MAYOR_SETTLEMENT_DISTRICTS_TYPES.CULTURAL_DISTRICT,
    },
    freq: 'minor',
  },
  {
    dataToSend: {
      development: {
        administrative: 1,
        cultural: 1,
        economical: [1, 1.5],
        industrial: [1, 2],
        martial: 1,
        technological: [1, 1.2],
      },
      maintenance: {
        edible: 1,
        energetical: [1, 2],
        industrial: 1,
      },
      non_workable_labor_force_percentage: [5, 15],
      occupational_maximun_percentages: {
        administrative: 5,
        cultural: 5,
        economical: 20,
        industrial: 30,
        martial: 10,
        technological: 10,
      },
      population: 1,
      type: MAYOR_SETTLEMENT_DISTRICTS_TYPES.INDUSTRIAL_DISTRICT,
    },
    freq: 'low',
  },
  {
    dataToSend: {
      development: {
        administrative: 1,
        cultural: 1,
        economical: 1,
        industrial: 1,
        martial: [1, 2],
        technological: [1, 1.2],
      },
      maintenance: {
        edible: 1,
        energetical: 1,
        industrial: 1,
      },
      non_workable_labor_force_percentage: [5, 15],
      occupational_maximun_percentages: {
        administrative: 15,
        cultural: 5,
        economical: 5,
        industrial: 10,
        martial: 50,
        technological: 5,
      },
      population: 0.5,
      type: MAYOR_SETTLEMENT_DISTRICTS_TYPES.MILITARY_DISTRICT,
    },
    freq: 'rare',
  },
  {
    dataToSend: {
      development: {
        administrative: 1,
        cultural: 1,
        economical: [1, 1.5],
        industrial: [1, 1.2],
        martial: 1,
        technological: [1, 1.1],
      },
      maintenance: {
        edible: 1,
        energetical: 1,
        industrial: [1, 1.2],
      },
      non_workable_labor_force_percentage: [5, 15],
      occupational_maximun_percentages: {
        administrative: 10,
        cultural: 5,
        economical: 30,
        industrial: 30,
        martial: 5,
        technological: 5,
      },
      population: 1,
      type: MAYOR_SETTLEMENT_DISTRICTS_TYPES.REFINERY_DISTRICT,
    },
    freq: 'low',
  },
  {
    dataToSend: {
      development: {
        administrative: 1,
        cultural: 1,
        economical: [1, 1.3],
        industrial: 1,
        martial: 1,
        technological: [1, 2],
      },
      maintenance: {
        edible: 1,
        energetical: [1, 1.2],
        industrial: 1,
      },
      non_workable_labor_force_percentage: [5, 15],
      occupational_maximun_percentages: {
        administrative: 10,
        cultural: 5,
        economical: 20,
        industrial: 10,
        martial: 5,
        technological: 30,
      },
      population: 1,
      type: MAYOR_SETTLEMENT_DISTRICTS_TYPES.RESEARCH_DISTRICT,
    },
    freq: 'veryRare',
  },
  {
    dataToSend: {
      development: {
        administrative: [0.8, 1],
        cultural: [1, 1.2],
        economical: 1,
        industrial: [0.8, 1],
        martial: 1,
        technological: 1,
      },
      maintenance: {
        edible: 1,
        energetical: 1,
        industrial: 1,
      },
      non_workable_labor_force_percentage: [25, 35],
      occupational_maximun_percentages: {
        administrative: 10,
        cultural: 10,
        economical: 10,
        industrial: 5,
        martial: 15,
        technological: 5,
      },
      population: 3,
      type: MAYOR_SETTLEMENT_DISTRICTS_TYPES.SLUMS,
    },
    freq: 'normal',
  },
  {
    dataToSend: {
      development: {
        administrative: [1, 1.1],
        cultural: [0.8, 1],
        economical: [1, 2],
        industrial: 1,
        martial: 1,
        technological: 1,
      },
      maintenance: {
        edible: 1,
        energetical: 1,
        industrial: 0,
      },
      non_workable_labor_force_percentage: [5, 15],
      occupational_maximun_percentages: {
        administrative: 15,
        cultural: 5,
        economical: 50,
        industrial: 5,
        martial: 5,
        technological: 5,
      },
      population: 1,
      type: MAYOR_SETTLEMENT_DISTRICTS_TYPES.TRADE_DISTRICT,
    },
    freq: 'normal',
  },
  {
    dataToSend: {
      development: {
        administrative: [0.8, 1],
        cultural: [1, 1.5],
        economical: [1, 1.1],
        industrial: 1,
        martial: 1,
        technological: 1,
      },
      maintenance: {
        edible: 1,
        energetical: 1,
        industrial: 1,
      },
      non_workable_labor_force_percentage: [25, 35],
      occupational_maximun_percentages: {
        administrative: 5,
        cultural: 15,
        economical: 20,
        industrial: 5,
        martial: 10,
        technological: 5,
      },
      population: 2,
      type: MAYOR_SETTLEMENT_DISTRICTS_TYPES.XENO_GHETTO,
    },
    freq: 'veryRare',
  },
];

export interface MayorSettlementDevelopmentProduction extends SettlementDevelopmentProduction {
  administrative: number;
  population: number;
}

// Surface/Settlement Space Ports
interface SpacePort {
  size: string;
  status: string;
}

export const SPACE_PORT_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  HUGE: 'huge',
};

export const spacePortSizesByFreq = [
  {
    dataToSend: SPACE_PORT_SIZES.SMALL,
    freq: 'normal',
  },
  {
    dataToSend: SPACE_PORT_SIZES.MEDIUM,
    freq: 'relevant',
  },
  {
    dataToSend: SPACE_PORT_SIZES.LARGE,
    freq: 'low',
  },
  {
    dataToSend: SPACE_PORT_SIZES.HUGE,
    freq: 'rare',
  },
];

export const SPACE_PORT_STATUS = {
  POOR: 'poor',
  DEFICIENT: 'deficient',
  STANDARD: 'standard',
  GOOD: 'good',
  ELITE: 'elite',
};

export const spacePortStatusByFreq = [
  {
    dataToSend: SPACE_PORT_STATUS.POOR,
    freq: 'rare',
  },
  {
    dataToSend: SPACE_PORT_STATUS.DEFICIENT,
    freq: 'low',
  },
  {
    dataToSend: SPACE_PORT_STATUS.STANDARD,
    freq: 'relevant',
  },
  {
    dataToSend: SPACE_PORT_STATUS.GOOD,
    freq: 'low',
  },
  {
    dataToSend: SPACE_PORT_STATUS.ELITE,
    freq: 'veryRare',
  },
];

export interface MayorSettlementDistrict {
  development: MayorSettlementDevelopmentProduction;
  loyalty?: number;
  maintenance: SettlementResourceProduction;
  non_workable_labor_force_percentage: number[];
  occupational_maximun_percentages: any;
  parent_mayor_settlement?: string;
  population: number;
  population_code?: string;
  population_labor_force_distribution?: DistrictPopulationLaborForceDistribution;
  specials?: MayorSettlementDistricSpecial[];
  type: string;
}

export interface MayorSettlement {
  administrative_center?: boolean;
  districts: MayorSettlementDistrict[];
  name?: string;
  parent_terrain_unit?: string;
  space_port?: SpacePort;
  total_development: MayorSettlementDevelopmentProduction;
  total_maintenance: SettlementResourceProduction;
  total_population: number;
  total_population_code: string;
}
