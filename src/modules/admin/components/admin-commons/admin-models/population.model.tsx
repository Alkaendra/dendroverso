export const LABOR_FORCE_TYPES = {
  NON_WORKABLE: 'Non workable', // Youngesters, olders, maimed
  IDLE: 'Idle', // Unemeployed workers, gang member and other criminals
  SLAVE: 'Slave',
  WORKING: 'Working',
};

export const NON_IDLE_INHABITANT_PRODUCTION_AND_MAINTENANCE_FOR_MAYOR_SETTLEMENT_BY_SPECIES = {
  HUMAN: {
    development_production: {
      administrative: 0.000001,
      cultural: 0.000001,
      economical: 0.000001,
      industrial: 0.000001,
      martial: 0.000001,
      technological: 0.000001,
    },
    maintenance: {
      edible: 0.0000001,
      industrial: 0.00000005,
      energetical: 0.00000005,
    },
  },
};

export interface DistrictPopulationLaborForceDistribution {
  non_productive_population: number;
  idle_productive_population: number;
  productive_working_population: number;
}
