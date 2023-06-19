import { useEffect, useRef } from "react";
import { keyGen, scrollToTop } from "@/helpers";
import { CountryCard } from "@/components";

import styles from "./CountriesList.module.scss";

type CountriesListProps = {
  countries: Country[];
  currentPage: number;
};

function CountriesList({ countries, currentPage }: CountriesListProps) {
  const containerRef = useRef(null);

  useEffect(() => {
    scrollToTop(containerRef);
  }, [currentPage]);

  const renderedCountries = countries.map((country) => (
    <CountryCard data={country} key={keyGen()} />
  ));

  return (
    <main className={styles.container} ref={containerRef}>
      {renderedCountries}
    </main>
  );
}

export default CountriesList;
