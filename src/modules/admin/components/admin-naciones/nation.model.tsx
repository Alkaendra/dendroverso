export interface Leader {
  name: string;
  title: string;
}

export interface Language {
  genotype?: string;
  name: string;
  family: string;
  status: string;
}

export interface ethnicity {
  name: string;
  genotype: string;
  fenotype: string;
  culture: string;
  percentage: number; // Porcentaje que este grupo étnico representa sobre el total "nacional"
}

export const languageStatus = [
  { name: 'Mayoritaria', value: 'Mayoritaria' },
  { name: 'Minoritaria', value: 'Minoritaria' },
  { name: 'Moribunda', value: 'Moribunda' },
];

export type Nation = {
  id?: string;
  area?: string;
  code?: string;
  description?: string[];
  ethnicities?: ethnicity[];
  history?: string[];
  languages?: Language[];
  leaders?: Leader[];
  name: string;
  power?: number;
  // regions?: Region[];
  society?: string[];
  voids?: string[];
};

export const nationConstructor = {
  id: { type: 'text', size: 'medium' },
  name: { type: 'text', size: 'medium' },
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
