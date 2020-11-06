export interface Language {
  genotype?: string;
  name: string;
  family: string;
  status: string;
}

export const languageStatus = [
  { name: 'Mayoritaria', value: 'Mayoritaria' },
  { name: 'Minoritaria', value: 'Minoritaria' },
  { name: 'Moribunda', value: 'Moribunda' },
];
