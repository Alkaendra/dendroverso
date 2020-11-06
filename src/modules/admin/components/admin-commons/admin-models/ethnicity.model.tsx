export const MAYOR_GENOTYPES: any = {
  Ammonia: ["B'faz", 'Izro', "Muú'ru", "Naar Taia'h", "Xk'hun-n"],
  Chlorine: ['Mhrenj'],
  Gasless: ['Nkraa', 'Qo'],
  Hydrogen: ['Bayat Unandi', 'Laandu Inna', 'Meshajreshna', 'Phoro noÁfu', 'Porath-nun', 'Shrosûl', 'Tglör'],
  Methane: ['Gjke', 'Khrorcha', 'Prondä Dis-drha'],
  Other: [],
  Oxygen: ['Ártrax', 'Dunn Species', 'Falyrna', 'Fungorids/Hryeth', 'Humans', 'Kana', "K'yr", 'Muongr', "Puï'wa"],
};

export const FENOTYPES_BY_GENOTYPE: any = {
  Falyrna: ['Bejük', 'Izhrok', 'Njrär', 'Ugäg', 'Yozrat'],
  Humans: ['Delek', 'Garkun', 'Hâsr', 'Noma', 'Quros', 'Sehral', 'Yffan'],
  Muongr: ["Blof-fOr'on", "Og-gLr Lug-gA'a", "Ru'rl-bUl-g'orr"],
  Nkraa: ['Arzzŭnsca', 'Dŭszznidra', 'Gdăzzc', 'Grădbunc', 'Zzgahnŏz'],
  "Puï'wa": ['Ilimdi', "Ilïhk'wa", 'Jichïsa', "Nau'rëo", "Parum'wära"],
};

export const OWNERSHIP: string[] = ['Nacional', 'Privada'];

export const finalOwnership = (isInhabited: boolean): string[] =>
  isInhabited ? [...OWNERSHIP, 'Habitantes'] : OWNERSHIP;

export const FILIATION: string[] = ['Ally', 'Hostile', 'Indifferent', 'Neutral'];

export interface Ethnicity {
  name: string;
  genotype: string;
  fenotype: string;
  culture?: string;
  percentage?: number; // Porcentaje que este grupo étnico representa sobre el total "nacional"
}

export interface ExtendedEthnicity extends Ethnicity {
  filiation: string;
}
