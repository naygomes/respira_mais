import { Coordinates, FilterParams, Neighborhood } from '@/interfaces';

export interface ButtonProps {
  type?: 'solid' | 'outline' | 'text';
  children: string;
  onClick: (...args: any[]) => any;
}
export interface CardProps {
  title: string;
  iqarLevel: string;
  chartData: Array<any>;
}
export interface FilterProps {
  neighborhoodsData: Array<Neighborhood>;
  onClick: (...args: any[]) => any;
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

export interface SelectInputProps {
  label: string;
  placeholder?: string;
  options: Array<string>;
  onChange: (value: string) => void;
}

export interface TableProps {
  headList: Array<string>;
  data: Array<Neighborhood>;
}
