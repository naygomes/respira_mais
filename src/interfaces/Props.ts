import { Coordinates, Neighborhood } from '@/interfaces';

export interface ButtonProps {
  type?: 'solid' | 'outline' | 'text';
  children: string;
  onClick: (...args: any[]) => any;
}
export interface FilterProps {
  name?: string;
  iqarLevel?: string;
}
export interface MapProps {
  zoom?: number;
  position: Coordinates;
  location: Coordinates;
}

export interface PaginationProps {
  page: number;
  limit?: number;
  totalPages?: number;
  totalItems?: number;
  onPageChange: (page: string) => void;
}

export interface TableProps {
  headList: Array<string>;
  data: Array<Neighborhood>;
}
