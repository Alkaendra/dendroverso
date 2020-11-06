import { Sector } from '../../../admin/components/admin-commons/admin-models/sector.model';
import {
  Specialspace,
  specialSpaceFrequency,
  specialSpaceSizes,
  SPECIAL_SPACE_POSSIBLE_LOCATIONS,
  SPECIAL_SPACE_POSSIBLE_TYPES,
} from '../../../admin/components/admin-commons/admin-models/special-space.model';
import { generateManyUnInhabitedSystems } from '../generate-systems/generate-uninhabited-system';
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
  specialSpace.systems = generateManyUnInhabitedSystems(generateRandomNumber(0, specialSpaceSize.maxSystems));
  specialSpace.type = type;
  return specialSpace;
};

const generateSectorSpecialSpacesByType = (number: number, type: string): Specialspace[] => {
  let specialSpaces: Specialspace[] = [];
  for (let i = 0; i <= number; i += 1) {
    specialSpaces = [...specialSpaces, generateSpecialSpace(type)];
  }

  return specialSpaces;
};

export const generateSector = (): Sector => {
  let sector: Sector = {} as any;
  const getSilencesFrequency = obtainDataFromTable(generateTableDataByFrequencies(specialSpaceFrequency));
  const sectorSilences = generateSectorSpecialSpacesByType(
    generateRandomNumber(0, getSilencesFrequency.maxSpecialSpaces),
    SPECIAL_SPACE_POSSIBLE_TYPES.SILENCE,
  );
  console.log('EY ', getSilencesFrequency, sectorSilences);
  return sector;
};
