import { Button, PageList } from "@/components";

import styles from "./Pagination.module.scss";

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  paginationRange,
}: Pagination) {
  const possiblePreviousPage = totalPages !== undefined && currentPage > 1;
  const possibleNextPage = totalPages !== undefined && currentPage < totalPages;

  const handlePreviousPage = () => {
    if (possiblePreviousPage) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (possibleNextPage) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={styles.container}>
      <Button
        label="←"
        onClick={handlePreviousPage}
        disabled={!possiblePreviousPage}
        className={styles.button}
      />

      <PageList
        paginationRange={paginationRange}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />

      <Button
        label="→"
        onClick={handleNextPage}
        disabled={!possibleNextPage}
        className={styles.button}
      />
    </div>
  );
}

export default Pagination;
