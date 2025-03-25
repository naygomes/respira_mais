import { Coordinates } from './Coordinates';

export interface MapProps {
  zoom?: number;
  position: Coordinates;
  location: Coordinates;
}
