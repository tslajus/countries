import { DOTS } from "@/hooks/usePagination";
import { keyGen } from "@/helpers";
import { Button } from "@/components";

import styles from "./PageList.module.scss";

function PageList({ paginationRange, currentPage, onPageChange }: Pagination) {
  const handlePageChange = (selectedPage: number) => onPageChange(selectedPage);

  const renderedList = paginationRange.map((pageNumber) => {
    if (pageNumber === DOTS) {
      return <div key={keyGen()}>...</div>;
    }

    const isActive = pageNumber === currentPage;

    return (
      <Button
        className={styles.button}
        label={pageNumber.toString()}
        isActive={isActive}
        onClick={() => handlePageChange(Number(pageNumber))}
        key={keyGen()}
      />
    );
  });

  return <>{renderedList}</>;
}

export default PageList;
