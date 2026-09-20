export interface Paginated<T> {
  total: number;
  perPage: number;
  currentPage: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
  items: T[];
}

export interface Branch{
  id:string;
  name:string;
  location:string;
}