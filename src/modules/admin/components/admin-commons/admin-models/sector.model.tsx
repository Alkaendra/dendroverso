import { Special } from './special.model';
import { System } from './system.model';

export interface Sector {
  name: string;
  parentRegion: string;
  specials?: Special[];
  systems: System[];
}
