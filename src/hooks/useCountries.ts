import { useState, useEffect } from "react";
import { getCountries } from "@/api/countries";
import {
  filterByArea,
  filterByRegion,
  sortCountries,
  normalizeCountryNames,
} from "@/helpers";

const useCountries = (
  sortOrder: SortOrder,
  areaFilter: boolean,
  regionFilter: boolean
) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let data = await getCountries();
        data = normalizeCountryNames(data);

        if (areaFilter) {
          data = filterByArea(data, "Lithuania", "smaller than");
        }

        if (regionFilter) {
          data = filterByRegion(data, "Oceania");
        }

        data = sortCountries(data, sortOrder);

        setCountries(data);
        setLoading(false);
      } catch (err) {
        setError(err as Error);
        setLoading(false);
      }
    };
    fetchData();
  }, [sortOrder, areaFilter, regionFilter]);

  return { countries, loading, error };
};

export default useCountries;
