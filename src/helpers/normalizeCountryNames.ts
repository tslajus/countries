function normalizeCountryNames(countries: Country[]) {
  return countries.map((country) => ({
    ...country,
    name: country.name.normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
  }));
}

export default normalizeCountryNames;
