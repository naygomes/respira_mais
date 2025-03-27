export interface Neighborhood {
  createdAt: string;
  name: string;
  region: string;
  coordinates: [number, number][];
  iqar: number;
  iqarLevel: string;
  source: string;
  recommendations: string;
  lastMeasures: Array<number>;
  id: string;
}
