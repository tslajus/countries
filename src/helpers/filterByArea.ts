const filterByArea = (
  countries: Country[],
  countryName: string,
  comparison: "smaller than" | "larger than"
): Country[] => {
  const referenceCountry = countries.find(
    (country: Country) => country.name === countryName
  );

  const referenceArea = referenceCountry ? referenceCountry.area : 0;

  switch (comparison.toLowerCase()) {
    case "smaller than":
      return countries.filter(
        (country: Country) => country.area < referenceArea
      );
    case "larger than":
      return countries.filter(
        (country: Country) => country.area > referenceArea
      );
    default:
      throw new Error(`Invalid comparison value: ${comparison}`);
  }
};

export default filterByArea;
