import { Filter, Sort } from "@/components";

import styles from "./FilterForm.module.scss";

type FilterFormProps = {
  areaFilter: boolean;
  regionFilter: boolean;
  sortOrder: SortOrder;
  setSortOrder: (sortOrder: SortOrder) => void;
  setAreaFilter: (filter: boolean) => void;
  setRegionFilter: (filter: boolean) => void;
};

function FilterForm({
  areaFilter,
  regionFilter,
  sortOrder,
  setSortOrder,
  setAreaFilter,
  setRegionFilter,
}: FilterFormProps) {
  return (
    <form className={styles.container}>
      <fieldset className={styles.filters}>
        <Filter
          className={styles.button}
          label="Smaller than Lithuania"
          checked={areaFilter}
          setFilter={setAreaFilter}
        />
        <Filter
          className={styles.button}
          label="In Oceania"
          checked={regionFilter}
          setFilter={setRegionFilter}
        />
      </fieldset>

      <Sort sortOrder={sortOrder} setSortOrder={setSortOrder} />
    </form>
  );
}

export default FilterForm;
