export interface Suprarregion {
  name: string;
  connectedSystems: Sistema[];
  unconnectedSystems: {
    vacios?: Sistema[];
    silencios?: Sistema[];
    singulos?: Sistema[];
  };
}

export interface Sistema {
  connectivity: Connectivity;
  name: string;
  planets: Planeta[];
}

export interface Planeta {
  breathableGas?: string;
  etmpcl?: string;
  gbenah: PerfilGBENAH;
  IH?: number | null;
  name: string;
  size: string;
  type: string;
  habitability: boolean;
  habitabilityType?: string;
  inhabitabilityType?: string;
  nativeLife: string;
  population?: string;
}

export interface PerfilGBENAH {
  geosfera: string;
  biosfera: string;
  ergosfera: string;
  noosfera: string;
  atmosfera: string;
  hidrosfera: string;
}

export interface Connectivity {
  stable: number;
  unstable: number;
  valiangric: number;
}
