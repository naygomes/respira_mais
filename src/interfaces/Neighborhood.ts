export interface Neighborhood {
  createdAt: string;
  name: string;
  region: string;
  coordinates: Array<number>;
  iqar: number;
  source: string;
  recommendations: string;
  lastMeasures: Array<number>;
  id: string;
}
