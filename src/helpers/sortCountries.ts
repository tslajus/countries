const sortCountries = (
  countries: Country[],
  sortOrder: SortOrder
): Country[] => {
  return [...countries].sort((a: Country, b: Country) => {
    if (a.name < b.name) return sortOrder === "asc" ? -1 : 1;
    if (a.name > b.name) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });
};

export default sortCountries;
