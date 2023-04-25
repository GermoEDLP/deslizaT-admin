export interface GetAllResponse<T> {
  page: number;
  total: number;
  perPage: number;
  data: T;
}

export interface Pagination {
  page: number;
  total: number;
  perPage: number;
}
