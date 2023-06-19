import { useState, useEffect, useMemo } from "react";

const DOTS = "...";

const usePagination = (items: Country[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedItems, setPaginatedItems] = useState<Country[]>([]);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedItems(items.slice(startIndex, endIndex));
  }, [currentPage, items, itemsPerPage]);

  const paginationRange = useMemo(() => {
    const range = (start: number, end: number) =>
      Array.from({ length: end - start + 1 }, (_, index) => index + start);

    if (totalPages <= 7) return range(1, totalPages);

    const shouldShowLeftDots = currentPage > 3;
    const shouldShowRightDots = currentPage < totalPages - 2;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftRange = range(1, 4);
      return [...leftRange, DOTS, totalPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightRange = range(totalPages - 3, totalPages);
      return [1, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(currentPage - 1, currentPage + 1);
      return [1, DOTS, ...middleRange, DOTS, totalPages];
    }
  }, [totalPages, currentPage]);

  return {
    paginatedItems,
    currentPage,
    totalPages,
    setCurrentPage,
    paginationRange,
  };
};

export { DOTS };
export default usePagination;
