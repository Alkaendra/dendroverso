import { Special } from './special.model';
import { System } from './system.model';

const SPECIAL_SPACE_SIZES = {
  TINY: 'tiny',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  HUGE: 'huge',
};

const SPECIAL_SPACE_DISPERSION = {
  ISOLATED: 'isolated',
  SCATTERED: 'scattered',
  DISPERSED: 'dispersed',
  CONCENTRATED: 'concentrated',
  CUMULUS: 'cumulus',
  SUPERCUMULUS: 'supercumulus',
};

const SPECIAL_SPACE_FREQUENCY = {
  INEXISTENT: 'inexistent',
  RARE: 'rare',
  INFREQUENT: 'infrequent',
  STANDAR: 'standar',
  FREQUENT: 'frequent',
  PLENTY: 'plenty',
};

export const SPECIAL_SPACE_POSSIBLE_TYPES = {
  APOMONY: 'Apomony', // Apomonía
  BLIGHT: 'Blight', // Llaga
  SILENCE: 'Silence', // Silencio
  VOID: 'Void', // Vacío
};
export const SPECIAL_SPACE_POSSIBLE_LOCATIONS = {
  FRONTIER: 'frontier',
  INNER: 'inner',
};

export const specialSpaceSizes = [
  {
    dataToSend: {
      label: SPECIAL_SPACE_SIZES.TINY,
      maxSystems: 2,
    },
    freq: 'rare',
  },
  {
    dataToSend: {
      label: SPECIAL_SPACE_SIZES.SMALL,
      maxSystems: 4,
    },
    freq: 'minor',
  },
  {
    dataToSend: {
      label: SPECIAL_SPACE_SIZES.MEDIUM,
      maxSystems: 8,
    },
    freq: 'normal',
  },
  {
    dataToSend: {
      label: SPECIAL_SPACE_SIZES.LARGE,
      maxSystems: 12,
    },
    freq: 'minor',
  },
  {
    dataToSend: {
      label: SPECIAL_SPACE_SIZES.HUGE,
      maxSystems: 20,
    },
    freq: 'rare',
  },
];

export const specialSpaceDistribution = [
  {
    dataToSend: SPECIAL_SPACE_DISPERSION.ISOLATED,
    freq: 'rare',
  },
  {
    dataToSend: SPECIAL_SPACE_DISPERSION.SCATTERED,
    freq: 'minor',
  },
  {
    dataToSend: SPECIAL_SPACE_DISPERSION.DISPERSED,
    freq: 'normal',
  },
  {
    dataToSend: SPECIAL_SPACE_DISPERSION.CONCENTRATED,
    freq: 'minor',
  },
  {
    dataToSend: SPECIAL_SPACE_DISPERSION.CUMULUS,
    freq: 'rare',
  },
  {
    dataToSend: SPECIAL_SPACE_DISPERSION.SUPERCUMULUS,
    freq: 'very rare',
  },
];

export const specialSpaceFrequency = [
  {
    dataToSend: {
      label: SPECIAL_SPACE_FREQUENCY.INEXISTENT,
      maxSpecialSpaces: 0,
    },
    freq: 'veryRare',
  },
  {
    dataToSend: {
      label: SPECIAL_SPACE_FREQUENCY.RARE,
      maxSpecialSpaces: 2,
    },
    freq: 'rare',
  },
  {
    dataToSend: {
      label: SPECIAL_SPACE_FREQUENCY.INFREQUENT,
      maxSpecialSpaces: 4,
    },
    freq: 'minor',
  },
  {
    dataToSend: {
      label: SPECIAL_SPACE_FREQUENCY.STANDAR,
      maxSpecialSpaces: 8,
    },
    freq: 'normal',
  },
  {
    dataToSend: {
      label: SPECIAL_SPACE_FREQUENCY.FREQUENT,
      maxSpecialSpaces: 16,
    },
    freq: 'minor',
  },
  {
    dataToSend: {
      label: SPECIAL_SPACE_FREQUENCY.PLENTY,
      maxSpecialSpaces: 24,
    },
    freq: 'veryRare',
  },
];

export interface Specialspace {
  id?: string;
  description?: string;
  specials?: Special[];
  location: string;
  name: string;
  sector: string;
  size?: string;
  systems?: System[];
  type: string;
}
