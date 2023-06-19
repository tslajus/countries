import axios from "axios";

export const getCountries = async () => {
  const response = await axios.get(
    "https://restcountries.com/v2/all?fields=name,region,area"
  );
  return response.data;
};
