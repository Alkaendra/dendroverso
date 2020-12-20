import {
  DistrictPopulationLaborForceDistribution,
  NON_IDLE_INHABITANT_PRODUCTION_AND_MAINTENANCE_FOR_MAYOR_SETTLEMENT_BY_SPECIES,
} from '../../../admin/components/admin-commons/admin-models/population.model';
import {
  MayorSettlement,
  MayorSettlementDevelopmentProduction,
  MayorSettlementDistrict,
  MAYOR_SETTLEMENT_DISTRICTS_BY_FREQ,
  MinorSettlement,
  SettlementResourceProduction,
} from '../../../admin/components/admin-commons/admin-models/settlement.model';
import {
  MayorSettlementDistricSpecial,
  mayorSettlementDistrictSpecials,
  mayorSettlementDistrictSpecialsMaximun,
} from '../habitable-planet-specials/mayor-settlement-district-specials';
import { generateTableDataByFrequencies } from '../tables-data';
import {
  flattenArrayOfArrays,
  generateRandomFloat,
  generateRandomNumber,
  getRandomValueFromStringArray,
  obtainDataFromTable,
  parseNumbersToThreeDecimalDigits,
  parseNumbersToTwoDecimalDigits,
  reduceToAddParam,
} from '../utils';

/**
 * Returns a random number of settlement inhabitants
 * @param populationValue The value of the planetary population minus the mod to population from the biome type
 * @returns number
 */
export const getRealPopulationFromPopulationValue = (populationValue: number): number =>
  generateRandomNumber(10 ** (populationValue + 1), 10 ** (populationValue + 2));

export const generateDistrictPopulationLaborForceDistribution = (
  maximunOcupationalPercentages: any,
  nonProductiveLaborForcePercentage: number[],
  populationNumber: number,
): DistrictPopulationLaborForceDistribution => {
  // Calculation on non productive population fraction
  const nonProductiveDistrictPopulation = Math.floor(
    (generateRandomFloat(nonProductiveLaborForcePercentage[0], nonProductiveLaborForcePercentage[1]) *
      populationNumber) /
      100,
  );
  // Calculation of productive population factor
  const productiveDistrictPopulation = populationNumber - nonProductiveDistrictPopulation;
  // Based on district type, we get the productive population labor distribution
  let productivePopulationDistribution: any = {};
  Object.keys(maximunOcupationalPercentages).forEach((ocupation: string) => {
    const randomizePercentage = generateRandomFloat(
      maximunOcupationalPercentages[ocupation] - 3,
      maximunOcupationalPercentages[ocupation],
    );
    return (productivePopulationDistribution = {
      ...productivePopulationDistribution,
      [ocupation]: {
        percentage: parseNumbersToTwoDecimalDigits(randomizePercentage),
        population: Math.floor((randomizePercentage / 100) * productiveDistrictPopulation),
      },
    });
  });
  // Reducing the labor distribution to obtain total current working labor. Idle population is the result of productive population minus this result.
  const reducedWorkingPopulation: any = Object.values(productivePopulationDistribution).reduce(
    (a: any, b: any) => a + b.population,
    0,
  );

  return {
    non_productive_population: nonProductiveDistrictPopulation,
    idle_productive_population: productiveDistrictPopulation - reducedWorkingPopulation,
    productive_working_population: productivePopulationDistribution,
  };
};

/**
 * Returns a list of the minor settlements currently present in the terrain unit
 * @param minorSettlementFreqByClimate
 * @param minorSettlementsMaximun
 * @param populationDensity
 * @returns MinorSettlements[]
 */
export const generateMinorSettlements = (
  minorSettlementFreqByClimate: any[],
  minorSettlementsMaximun: number,
  populationDensity: number,
): MinorSettlement[] => {
  let minorSettlements: MinorSettlement[] = [];
  const minorSettlementsNumber = generateRandomNumber(0, minorSettlementsMaximun);

  for (let i = 0; i < minorSettlementsNumber; i += 1) {
    let minorSettlement: MinorSettlement = {} as any;
    const minorSettlementType = obtainDataFromTable(generateTableDataByFrequencies(minorSettlementFreqByClimate));
    minorSettlement.development = minorSettlementType.development;
    minorSettlement.maintenance = minorSettlementType.maintenance;
    minorSettlement.production = minorSettlementType.production;
    minorSettlement.population = getRealPopulationFromPopulationValue(populationDensity > 0 ? populationDensity : 0);
    minorSettlement.type = minorSettlementType.type;
    minorSettlements = [...minorSettlements, minorSettlement];
  }

  return minorSettlements;
};

/**
 * Generates basic maintenance per labor unit by species
 * @param data
 */
const generateBasicDistrictMaintenanceData = (data: any) => {
  let districtData: any = {};
  let basicMaintenanceOfLaborUnitBySpecies: any =
    NON_IDLE_INHABITANT_PRODUCTION_AND_MAINTENANCE_FOR_MAYOR_SETTLEMENT_BY_SPECIES['HUMAN'].maintenance;
  Object.keys(basicMaintenanceOfLaborUnitBySpecies).forEach((d: any) => {
    districtData[d] = parseNumbersToThreeDecimalDigits(data * basicMaintenanceOfLaborUnitBySpecies[d]);
  });
  return districtData;
};

/**
 * Generates basic production per labor unit by species
 * @param data
 */
const generateBasicDistrictProductionData = (data: any) => {
  let districtData: any = {};
  let basicProductionOfLaborUnitBySpecies: any =
    NON_IDLE_INHABITANT_PRODUCTION_AND_MAINTENANCE_FOR_MAYOR_SETTLEMENT_BY_SPECIES['HUMAN'].development_production;
  Object.keys(data).forEach((d: any) => {
    districtData[d] = parseNumbersToThreeDecimalDigits(data[d].population * basicProductionOfLaborUnitBySpecies[d]);
  });
  return districtData;
};

/**
 * Generates basic production per labor unit by species
 * @param data
 */
const generateBasicDistrictDataForSpecials = (data: any) => {
  let districtData: any = {};

  Object.keys(data).forEach((d: any) => {
    districtData[d] = Array.isArray(data[d])
      ? data[d][2] && data[d][2] === '-'
        ? -1 * generateRandomNumber(data[d][0], data[d][1])
        : generateRandomNumber(data[d][0], data[d][1])
      : data[d];
  });
  return districtData;
};

const generateFormattedDistrictsData = (
  districtData: MayorSettlementDistrict[],
  totalMayorSettlementPopulation: number,
) => {
  return [...districtData].map((district: MayorSettlementDistrict) => ({
    ...district,
    population_percentage: `${parseNumbersToThreeDecimalDigits(
      (district.population * 100) / totalMayorSettlementPopulation,
    )}%`,
    formatted_population: `${district.population.toLocaleString()} inhabitants`,
  }));
};

/**
 * Adds the specials modifiers to the mayor settlement distric basic data
 * @param {Object} basicData The basic data of the district randomly generated
 * @param {MayorSettlementDistricSpecial[]} specials Array of the specials randomly generated for this district, if any
 * @param {string} param The param to be reduced: development or maintenance, at the moment
 */
const modifyBasicDistrictDataWithSpecials = (
  basicData: {},
  specials: MayorSettlementDistricSpecial[],
  param: string,
) => {
  // Convert basicData to array
  let basicArray = [basicData];
  // Flattening of all specials param needed, and reduced the obtained array to concat data
  let flattenedAndReducedSpecials = generateMayorSettlementTotalData(
    flattenArrayOfArrays(specials.map((ds: any) => ds[param])),
    param === 'development',
  );
  // Flattening of the combination of the previous arrays, and then, again, reduced
  let flattenedAndReducedTotal = generateMayorSettlementTotalData(
    flattenArrayOfArrays([basicArray, flattenedAndReducedSpecials]),
    param === 'development',
  );

  return flattenedAndReducedTotal;
};

/**
 * Generates Mayor Settlement District Specials
 * @returns {MayorSettlementDistricSpecial[]} An array of MayorSettlementDistrictEspecials
 */
const generateMayorSettlementDistrictSpecials = (): MayorSettlementDistricSpecial[] => {
  const randomNumber = generateRandomNumber(1, 100);
  let districtSpecials: MayorSettlementDistricSpecial[] = [];

  if (randomNumber > 80) {
    const specialsNumber = obtainDataFromTable(generateTableDataByFrequencies(mayorSettlementDistrictSpecialsMaximun));
    for (let i = 0; i < specialsNumber; i += 1) {
      let districtSpecial: MayorSettlementDistricSpecial = obtainDataFromTable(
        generateTableDataByFrequencies(mayorSettlementDistrictSpecials),
      );
      districtSpecial.development = generateBasicDistrictDataForSpecials(districtSpecial.development);
      districtSpecial.maintenance = generateBasicDistrictDataForSpecials(districtSpecial.maintenance);
      if (districtSpecial.sub_types && districtSpecial.sub_types.length > 0) {
        districtSpecial.label = `${districtSpecial.label} - ${getRandomValueFromStringArray(
          districtSpecial.sub_types,
        )}`;
      }
      districtSpecials = [...districtSpecials, districtSpecial];
    }
  }

  return districtSpecials;
};

/**
 * Generates reduced data from the development of all the mayor settlement districts
 * @param data
 * @return data as MayorSettlementDevelopmentProduction interface | data as SettlementResourceProduction interface
 */
const generateMayorSettlementTotalData = (data: any, development: boolean) => {
  let totalData: any = development
    ? ({
        administrative: 0,
        cultural: 0,
        economical: 0,
        industrial: 0,
        martial: 0,
        technological: 0,
      } as MayorSettlementDevelopmentProduction)
    : ({
        edible: 0,
        energetical: 0,
        industrial: 0,
      } as SettlementResourceProduction);
  Object.keys(totalData).forEach(d => {
    totalData[d] = parseNumbersToThreeDecimalDigits(reduceToAddParam(data, d));
  });
  return totalData;
};

/**
 * @return An array of MayorSettlementDistrict interface
 * @param districtsNumber Number of mayor settlement districts
 * @param planetaryPopulation Max population to generate random district total population
 */
export const generateMayorSettlementDistricts = (
  districtsNumber: number,
  planetaryPopulation: number,
): MayorSettlementDistrict[] => {
  let mayorSettlementDistricts: any[] = [];
  for (let i = 0; i < districtsNumber; i += 1) {
    let district: MayorSettlementDistrict = {} as any;
    district = { ...obtainDataFromTable(generateTableDataByFrequencies(MAYOR_SETTLEMENT_DISTRICTS_BY_FREQ)) };
    district.specials = generateMayorSettlementDistrictSpecials();
    district.population = getRealPopulationFromPopulationValue(planetaryPopulation - 6 + district.population);
    const laborForce = generateDistrictPopulationLaborForceDistribution(
      district.occupational_maximun_percentages,
      district.non_workable_labor_force_percentage,
      district.population,
    );
    district.population_labor_force_distribution = { ...laborForce };
    district.development =
      district.specials && district.specials.length > 0
        ? modifyBasicDistrictDataWithSpecials(
            generateBasicDistrictProductionData(laborForce.productive_working_population),
            district.specials,
            'development',
          )
        : generateBasicDistrictProductionData(laborForce.productive_working_population);
    district.maintenance =
      district.specials && district.specials.length > 0
        ? modifyBasicDistrictDataWithSpecials(
            generateBasicDistrictMaintenanceData(district.population),
            district.specials,
            'maintenance',
          )
        : generateBasicDistrictMaintenanceData(district.population);
    mayorSettlementDistricts = [...mayorSettlementDistricts, district];
  }

  return mayorSettlementDistricts;
};

export const generateMayorSettlement = (populationValue: number): MayorSettlement => {
  let mayorSettlement: MayorSettlement = {} as any;
  mayorSettlement.districts = generateMayorSettlementDistricts(generateRandomNumber(6, 20), populationValue);
  mayorSettlement.total_maintenance = generateMayorSettlementTotalData(
    flattenArrayOfArrays(mayorSettlement.districts.map((mSd: any) => mSd.maintenance)),
    false,
  ) as SettlementResourceProduction;
  mayorSettlement.total_population = reduceToAddParam(mayorSettlement.districts, 'population');
  mayorSettlement.total_development = generateMayorSettlementTotalData(
    flattenArrayOfArrays(mayorSettlement.districts.map((mSd: any) => mSd.development)),
    true,
  ) as MayorSettlementDevelopmentProduction;
  console.log(
    'FORMATTED ',
    generateFormattedDistrictsData(mayorSettlement.districts, mayorSettlement.total_population),
  );
  return mayorSettlement;
};
