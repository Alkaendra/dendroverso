import { Sector } from '../../../admin/components/admin-commons/admin-models/sector.model';
import {
  Specialspace,
  specialSpaceFrequency,
  specialSpaceSizes,
  specialSpaceType,
  SPECIAL_SPACE_POSSIBLE_LOCATIONS,
  SPECIAL_SPACE_POSSIBLE_TYPES,
} from '../../../admin/components/admin-commons/admin-models/special-space.model';
import {
  getInhabitatedPlanetaryRolesBySectorRole,
  getNumberOfInhabitatedSystemsBySector,
} from '../generate-planets/generate-habitable-planets';
import { generateManySystems } from '../generate-systems/generate-uninhabited-system';
import { generateTableDataByFrequencies } from '../tables-data';
import { generateRandomNumber, obtainDataFromTable } from '../utils';

export const generateSpecialSpace = (type: string): Specialspace => {
  let specialSpace: Specialspace = {} as any;
  specialSpace.name = 'Hola';
  specialSpace.location =
    generateRandomNumber(1, 100) > 70
      ? SPECIAL_SPACE_POSSIBLE_LOCATIONS.INNER
      : SPECIAL_SPACE_POSSIBLE_LOCATIONS.FRONTIER;
  specialSpace.sector = 'Sector';
  const specialSpaceSize = obtainDataFromTable(generateTableDataByFrequencies(specialSpaceSizes));
  specialSpace.size = specialSpaceSize.label;
  specialSpace.systems = generateManySystems(generateRandomNumber(0, specialSpaceSize.maxSystems), []);
  specialSpace.type = type;
  return specialSpace;
};

const generateSectorSpecialSpacesByType = (number: number): Specialspace[] => {
  let specialSpaces: Specialspace[] = [];
  for (let i = 0; i <= number; i += 1) {
    specialSpaces = [
      ...specialSpaces,
      generateSpecialSpace(obtainDataFromTable(generateTableDataByFrequencies(specialSpaceType))),
    ];
  }

  return specialSpaces;
};

export const generateSector = (role: string): Sector => {
  let sector: Sector = {} as any;
  const getSpecialSpacesFreq = obtainDataFromTable(generateTableDataByFrequencies(specialSpaceFrequency));
  const specialSpaces = generateSectorSpecialSpacesByType(
    generateRandomNumber(0, getSpecialSpacesFreq.maxSpecialSpaces),
  );
  const sectorInHabitatedSystems = getNumberOfInhabitatedSystemsBySector();
  const inhabitatedSystemsRoles = getInhabitatedPlanetaryRolesBySectorRole(sectorInHabitatedSystems, role);
  console.log('VAMOS -> ', sectorInHabitatedSystems, inhabitatedSystemsRoles);
  sector.locationInRegion =
    generateRandomNumber(1, 100) > 65
      ? SPECIAL_SPACE_POSSIBLE_LOCATIONS.FRONTIER
      : SPECIAL_SPACE_POSSIBLE_LOCATIONS.INNER;
  sector.role = role;
  sector.systems = generateManySystems(
    generateRandomNumber(18, obtainDataFromTable(generateTableDataByFrequencies(specialSpaceSizes)).maxSystems),
    [],
  );
  sector.mayorInhabitatedSystems = generateManySystems(sectorInHabitatedSystems, inhabitatedSystemsRoles);
  sector.voids = specialSpaces.filter(ss => ss.type === SPECIAL_SPACE_POSSIBLE_TYPES.VOID);
  sector.silences = specialSpaces.filter(ss => ss.type === SPECIAL_SPACE_POSSIBLE_TYPES.SILENCE);
  return sector;
};
