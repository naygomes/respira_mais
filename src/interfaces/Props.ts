import { Coordinates, Neighborhood } from '@/interfaces';

export interface MapProps {
  zoom?: number;
  position: Coordinates;
  location: Coordinates;
}

export interface PaginationProps {
  page: number;
  itemsPerPage: number;
  totalPages: number;
  totalItems: number;
}

export interface TableProps {
  mainPage?: boolean;
  headList: Array<string>;
  data: Array<Neighborhood>;
}
