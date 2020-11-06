import { Ethnicity } from '../../admin-commons/admin-models/ethnicity.model';
import { Language, languageStatus } from '../../admin-commons/admin-models/language.model';
import { Leader } from '../../admin-commons/admin-models/leader.model';
import { Name } from '../../admin-commons/admin-models/name.model';
import { Specialspace } from '../../admin-commons/admin-models/special-space.model';

export type Region = {
  id?: string;
  apomonies?: Specialspace[];
  blights?: Specialspace[];
  code?: string;
  description?: string[];
  ethnicities?: Ethnicity[];
  name: Name;
  history?: string[];
  languages?: Language[];
  leaders?: Leader[];
  nation?: string;
  power?: number;
  silences?: Specialspace[];
  society?: string[];
  voids?: Specialspace[];
};

export const regionConstructor = {
  id: { type: 'text', size: 'medium' },
  apomonies: [
    {
      name: { type: 'text', size: 'medium' },
      region: { type: 'text', size: 'medium' },
      type: { type: 'text', size: 'small' },
    },
  ],
  blights: [
    {
      name: { type: 'text', size: 'medium' },
      region: { type: 'text', size: 'medium' },
      type: { type: 'text', size: 'small' },
    },
  ],
  name: {
    full: { type: 'text', size: 'medium' },
    meaning: { type: 'text', size: 'small' },
    short: { type: 'text', size: 'medium' },
    otherNames: { type: 'text', size: 'medium' },
  },
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
  nation: { type: 'text', size: 'medium' },
  silences: [
    {
      name: { type: 'text', size: 'medium' },
      region: { type: 'text', size: 'medium' },
      type: { type: 'text', size: 'small' },
    },
  ],
  society: [
    {
      paragraph: { type: 'textarea', size: 'large' },
    },
  ],
  voids: [
    {
      name: { type: 'text', size: 'medium' },
      region: { type: 'text', size: 'medium' },
      type: { type: 'text', size: 'small' },
    },
  ],
};
