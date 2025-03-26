import { Coordinates, Neighborhood } from '@/interfaces';

export interface ButtonProps {
  type?: 'solid' | 'outline' | 'text';
  children: string;
  onClick: (...args: any[]) => any;
}
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
