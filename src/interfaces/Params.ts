export interface FilterParams {
  name?: string;
  iqarLevel?: string;
}

export interface PaginationParams {
  page: number;
  limit: number;
}

export interface OrderingParams {
  orderBy?: string;
  order?: string;
}
