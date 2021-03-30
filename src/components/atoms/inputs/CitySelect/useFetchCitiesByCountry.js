import useSWR from "swr";

import { COUNTRY_TO_CITIES } from '~Constants';

// const proxyurl = "https://cors-anywhere.herokuapp.com/";

const fetcher = async (url, country) => {
  // return fetch(proxyurl + url, {
  //   method: "POST",
  //   body: `{\n    "country": "${country}"\n}`,
  //   redirect: "follow",
  // })
  //   .then((response) => response.json())
  //   .catch((error) => console.log("error", error));

  return Promise.resolve(COUNTRY_TO_CITIES[country]);
};

const useFetchCitiesByCountry = (country) => {
  return useSWR(
    ["https://countriesnow.space/api/v0.1/countries/cities", country],
    fetcher,
    { revalidateOnFocus: false }
  );
};

export default useFetchCitiesByCountry;
