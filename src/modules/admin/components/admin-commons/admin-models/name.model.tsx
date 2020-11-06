export interface OtherName {
  name: string;
}

export interface Name {
  full: string;
  meaning: string;
  other: OtherName[];
  short: string;
}
