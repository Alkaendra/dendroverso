import { CombatCapacity } from '../../../admin/components/admin-commons/admin-models/combat-capacity.model';
import {
  SpaceStation,
  spaceStationLocationFrequencies,
  spaceStationQualityByNationPower,
  spaceStationSizeFrequenciesByPlanetPopulation,
  spaceStationTypesByPlanetRole,
  SPACE_STATION_OWNERSHIP,
  SPACE_STATION_SIZE,
} from '../../../admin/components/admin-commons/admin-models/space-stations.model';
import { habitablePlanetRoleType } from '../generate-planets/generate-planets';
import { generateTableDataByFrequencies } from '../tables-data';
import {
  generateRandomFloat,
  generateRandomNumber,
  getRandomValueFromStringArray,
  obtainDataFromTable,
} from '../utils';

const generateSpaceStationSubtypes = (planetaryRole: habitablePlanetRoleType): string[] => {
  let subTypes: string[] = [];
  for (let i = 0; i < generateRandomFloat(1, 3); i += 1) {
    subTypes = [
      ...subTypes,
      obtainDataFromTable(
        generateTableDataByFrequencies(spaceStationTypesByPlanetRole(planetaryRole).possibleSubTypes),
      ),
    ];
  }
  return subTypes;
};

const generateSpaceStationCombatCapacity = (mod: number, size: string): CombatCapacity => {
  let spaceStationCombatCapacity: CombatCapacity = {} as any;
  spaceStationCombatCapacity.againstLightAdversaries = generateRandomNumber(1, 2) + mod;
  spaceStationCombatCapacity.againstMediumAdversaries = generateRandomNumber(0, 2) + mod;
  spaceStationCombatCapacity.againstHeavyAdversaries =
    size === SPACE_STATION_SIZE.VERY_LARGE || size === SPACE_STATION_SIZE.HUGE ? generateRandomNumber(0, 1) : 0;
  spaceStationCombatCapacity.againstSuperHeavyAdversaries =
    size === SPACE_STATION_SIZE.HUGE ? generateRandomNumber(0, 1) : 0;
  return spaceStationCombatCapacity;
};

export const generateSpaceStation = (
  mainTypeAlreadyExists: boolean,
  nationPower: number,
  planetaryRole: habitablePlanetRoleType,
  population: number,
  name: string = 'Space Station',
): SpaceStation => {
  let spaceStation: SpaceStation = {} as any;
  let typeData = spaceStationTypesByPlanetRole(planetaryRole);
  spaceStation.type = { mainType: '', subTypes: [] };

  spaceStation.name = name;
  spaceStation.location = obtainDataFromTable(generateTableDataByFrequencies(spaceStationLocationFrequencies));
  spaceStation.size = obtainDataFromTable(
    generateTableDataByFrequencies(spaceStationSizeFrequenciesByPlanetPopulation(population)),
  );
  spaceStation.type.mainType = mainTypeAlreadyExists
    ? getRandomValueFromStringArray(generateSpaceStationSubtypes(planetaryRole))
    : typeData.mainType;
  if (spaceStation.size === SPACE_STATION_SIZE.VERY_LARGE || spaceStation.size === SPACE_STATION_SIZE.HUGE) {
    spaceStation.type.subTypes = generateSpaceStationSubtypes(planetaryRole);
  }
  spaceStation.defensiveCapacity = generateSpaceStationCombatCapacity(
    typeData.defensiveCombatCapacityMod,
    spaceStation.size,
  );
  spaceStation.offensiveCapacity = generateSpaceStationCombatCapacity(
    typeData.offensiveCombatCapacityMod,
    spaceStation.size,
  );
  spaceStation.quality = obtainDataFromTable(
    generateTableDataByFrequencies(spaceStationQualityByNationPower(nationPower)),
  );
  spaceStation.ownership = mainTypeAlreadyExists
    ? SPACE_STATION_OWNERSHIP.NATIONAL
    : generateRandomNumber(1, 100) > 50
    ? SPACE_STATION_OWNERSHIP.PRIVATE
    : SPACE_STATION_OWNERSHIP.NATIONAL;

  return spaceStation;
};

export const generateManySpaceStations = (
  nationPower: number,
  population: number,
  planetaryRole: habitablePlanetRoleType,
  name: string = 'Space Station',
): SpaceStation[] => {
  let spaceStations: SpaceStation[] = [];

  for (let i = 0; i < population; i += 1) {
    if (i === 0) {
      spaceStations = [...spaceStations, generateSpaceStation(false, nationPower, planetaryRole, population, name)];
    } else {
      spaceStations = [...spaceStations, generateSpaceStation(true, nationPower, planetaryRole, population, name)];
    }
  }

  return spaceStations;
};
