import { HABITABLE_PLANET_ROLE } from '../../../../core/utils/generate-planets/generate-planets';
import { Ethnicity } from './ethnicity.model';
import { Language, languageStatus } from './language.model';
import { Leader } from './leader.model';
import { Name } from './name.model';
import { Sector } from './sector.model';
import { Specialspace } from './special-space.model';

export const PLANETARY_POSSIBLE_ROLES_BY_SECTOR_ROLE: any = {
  Administrative: [
    HABITABLE_PLANET_ROLE.REGION_CAPITAL,
    HABITABLE_PLANET_ROLE.MAYOR_INDUSTRIAL_CENTER,
    HABITABLE_PLANET_ROLE.MAYOR_RESOURCE_PRODUCTOR,
  ],
  Commercial: [HABITABLE_PLANET_ROLE.MAYOR_INDUSTRIAL_CENTER, HABITABLE_PLANET_ROLE.MINOR_INDUSTRIAL_CENTER],
  Cultural: [HABITABLE_PLANET_ROLE.CULTURAL_CENTER, HABITABLE_PLANET_ROLE.OTHER],
  Industrial: [
    HABITABLE_PLANET_ROLE.MAYOR_INDUSTRIAL_CENTER,
    HABITABLE_PLANET_ROLE.MINOR_INDUSTRIAL_CENTER,
    HABITABLE_PLANET_ROLE.MINOR_RESOURCE_PRODUCTOR,
  ],
  Investigation: [HABITABLE_PLANET_ROLE.RESEARCH_CENTER, HABITABLE_PLANET_ROLE.COLONY],
  Militar: [
    HABITABLE_PLANET_ROLE.MILITARY_BASE,
    HABITABLE_PLANET_ROLE.MINOR_INDUSTRIAL_CENTER,
    HABITABLE_PLANET_ROLE.MINOR_RESOURCE_PRODUCTOR,
  ],
  'Resource Producer': [
    HABITABLE_PLANET_ROLE.MAYOR_RESOURCE_PRODUCTOR,
    HABITABLE_PLANET_ROLE.MINOR_INDUSTRIAL_CENTER,
    HABITABLE_PLANET_ROLE.COLONY,
  ],
};

export type Region = {
  id?: string;
  apomonies?: Specialspace[];
  sores?: Specialspace[];
  code?: string;
  description?: string[];
  ethnicities?: Ethnicity[];
  name: Name;
  history?: string[];
  languages?: Language[];
  leaders?: Leader[];
  nation?: string;
  power?: number;
  sectors?: Sector[];
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
  sores: [
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
