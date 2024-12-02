import { Ethnicity } from './ethnicity.model';
import { Language, languageStatus } from './language.model';
import { Leader } from './leader.model';
import { Name } from './name.model';

export type Nation = {
  id?: string;
  area?: string;
  code?: string;
  description?: string[];
  ethnicities?: Ethnicity[];
  history?: string[];
  languages?: Language[];
  leaders?: Leader[];
  name: Name;
  power?: number;
  // regions?: Region[];
  society?: string[];
  voids?: string[];
};

export const nationConstructor = {
  id: { type: 'text', size: 'medium' },
  name: {
    full: { type: 'text', size: 'medium' },
    meaning: { type: 'text', size: 'small' },
    short: { type: 'text', size: 'medium' },
    otherNames: { type: 'text', size: 'medium' },
  },
  nameMeaning: { type: 'text', size: 'medium' },
  area: { type: 'text', size: 'medium' },
  code: { type: 'text', size: 'small' },
  power: { type: 'number', size: 'small' },
  description: [
    {
      paragraph: { type: 'textarea', size: 'large' },
    },
  ],
  ethnicities: [
    {
      name: { type: 'text', size: 'medium' },
      culture: { type: 'text', size: 'small' },
      genotype: { type: 'text', size: 'medium' },
      fenotype: { type: 'text', size: 'medium' },
      percentage: { type: 'number', size: 'small' },
    },
  ],
  history: [
    {
      event: { type: 'text', size: 'medium' },
      date: { type: 'text', size: 'small' },
      description: { type: 'textarea', size: 'large' },
    },
  ],
  languages: [
    {
      name: { type: 'text', size: 'medium' },
      family: { type: 'text', size: 'medium' },
      genotype: { type: 'text', size: 'medium' },
      status: { type: 'select', size: 'medium', options: languageStatus },
    },
  ],
  leaders: [
    {
      name: { type: 'text', size: 'medium' },
      title: { type: 'text', size: 'small' },
    },
  ],
  society: [
    {
      paragraph: { type: 'textarea', size: 'large' },
    },
  ],
};
