const filterByRegion = (countries: Country[], region: string): Country[] => {
  return countries.filter((country: Country) => country.region === region);
};

export default filterByRegion;
