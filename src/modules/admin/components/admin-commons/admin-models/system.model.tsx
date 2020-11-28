import { InhabitatedPlanet } from './inhabitated-planet.model';
import { Special } from './special.model';
import { Planet } from './unhabitable-planet.model';

export const INITIAL_SYSTEM = {
  connectivity: {
    stable: 0,
    unstable: 0,
    valiangric: 0,
  },
  name: '',
  planets: [],
  sector: '',
  specials: [],
  stellarGroup: [],
};

export type Connectivity = {
  stable: number;
  unstable: number;
  valiangric: number;
};

export interface System {
  connectivity: Connectivity;
  description?: string[];
  id?: string;
  name: string;
  planets: (Planet | InhabitatedPlanet)[];
  sector: string;
  specials: Special[];
  stellarGroup?: any;
}
