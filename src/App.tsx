import { useState } from "react";
import { useCountries, usePagination } from "./hooks";
import { CountriesList, FilterForm, Pagination, Loader } from "./components";

import styles from "./App.module.scss";

function App() {
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [areaFilter, setAreaFilter] = useState(false);
  const [regionFilter, setRegionFilter] = useState(false);

  const { countries, loading, error } = useCountries(
    sortOrder,
    areaFilter,
    regionFilter
  );
  const {
    paginatedItems: paginatedCountries,
    currentPage,
    totalPages,
    setCurrentPage,
    paginationRange = [],
  } = usePagination(countries, 10);

  const handleSortChange = (sortOrder: SortOrder) => {
    setSortOrder(sortOrder);
    setCurrentPage(1);
  };

  const handleAreaFilterChange = (filter: boolean) => {
    setAreaFilter(filter);
    setCurrentPage(1);
  };

  const handleRegionFilterChange = (filter: boolean) => {
    setRegionFilter(filter);
    setCurrentPage(1);
  };

  if (error) {
    return <div>There was an error loading the data...</div>;
  }

  return (
    <div className={styles.container}>
      <FilterForm
        areaFilter={areaFilter}
        regionFilter={regionFilter}
        sortOrder={sortOrder}
        setSortOrder={handleSortChange}
        setAreaFilter={handleAreaFilterChange}
        setRegionFilter={handleRegionFilterChange}
      />
      <CountriesList countries={paginatedCountries} currentPage={currentPage} />
      {loading && <Loader />}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        paginationRange={paginationRange}
      />
    </div>
  );
}

export default App;
