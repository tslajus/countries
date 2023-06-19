import { Button } from "@/components";

import styles from "./Sort.module.scss";

interface SortProps {
  sortOrder: SortOrder;
  setSortOrder: (order: SortOrder) => void;
}

function Sort({ sortOrder, setSortOrder }: SortProps) {
  return (
    <div className={styles.container}>
      <div>Sort:</div>
      <Button
        type="radio"
        label="↓"
        isActive={sortOrder === "asc"}
        onChange={() => setSortOrder("asc")}
        className={styles.button}
      />
      <Button
        type="radio"
        label="↑"
        isActive={sortOrder === "desc"}
        onChange={() => setSortOrder("desc")}
        className={styles.button}
      />
    </div>
  );
}

export default Sort;
