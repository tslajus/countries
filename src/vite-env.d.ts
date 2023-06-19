/// <reference types="vite/client" />

type Country = {
  name: string;
  region: string;
  area: number;
};

type SortOrder = "asc" | "desc";

type ButtonType = "button" | "checkbox" | "radio";

type Pagination = {
  totalPages?: number;
  paginationRange: (number | string)[];
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
};
