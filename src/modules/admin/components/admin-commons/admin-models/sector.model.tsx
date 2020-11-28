import { Specialspace } from './special-space.model';
import { Special } from './special.model';
import { System } from './system.model';

export const SECTOR_SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

export const SECTOR_ROLE = {
  ADMINISTRATIVE: 'Administrative',
  COMMERCIAL: 'Commercial',
  CULTURAL: 'Cultural',
  INDUSTRIAL: 'Industrial',
  INVESTIGATION: 'Investigation',
  MILITAR: 'Militar',
  RESOURCE_PRODUCER: 'Resource Producer',
};

export const sectorSizes = [
  {
    dataToSend: {
      label: SECTOR_SIZE.SMALL,
      maxSystems: 30,
    },
    freq: 'minor',
  },
  {
    dataToSend: {
      label: SECTOR_SIZE.MEDIUM,
      maxSystems: 45,
    },
    freq: 'minor',
  },
  {
    dataToSend: {
      label: SECTOR_SIZE.LARGE,
      maxSystems: 60,
    },
    freq: 'rare',
  },
];

export const sectorInhabitatedSystems = [
  {
    dataToSend: 1,
    freq: 'relevant',
  },
  {
    dataToSend: 2,
    freq: 'minor',
  },
  {
    dataToSend: 3,
    freq: 'veryRare',
  },
];

export interface Sector {
  apomonies?: Specialspace[];
  locationInRegion?: string;
  mayorInhabitatedSystems: System[];
  name: string;
  parentRegion: string;
  role?: string;
  silences?: Specialspace[];
  size: string;
  specials?: Special[];
  sores?: Specialspace[];
  systems: System[];
  voids?: Specialspace[];
}
