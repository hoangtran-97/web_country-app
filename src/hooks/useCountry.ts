import { useState, useEffect, useCallback } from "react";

const baseURL = "https://restcountries.eu/rest/v2";

export const useCountry = (query: string, activeFilter: string) => {
    const [data, setData] = useState(Array);
    const [error, setError] = useState(null);
    //One local copy so no more additional API calls
    const [countries, setCountries] = useState([]);
    //Fetch initial data from API

    useEffect(() => {
        const loadData = async () => {
            const URL_SEARCH_ALL = `${baseURL}/all`;
            try {
                const response = await fetch(URL_SEARCH_ALL);
                const json = await response.json();
                setData(json);
                setCountries(json);
            } catch (error) {
                setError(error);
            }
        };
        loadData();
    }, []);

    //Sorting
    useEffect(() => {
        sortCountry(data);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeFilter]);
    //Searching
    useEffect(() => {
        searchCountry();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);
    const searchCountry = useCallback(() => {
        const sorted = [...countries].filter((country: any) =>
            country.name.toLowerCase().includes(query.toLowerCase())
        );
        sortCountry(sorted);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [countries, query]);
    const sortCountry = useCallback(
        (countries: any) => {
            const filter = activeFilter.toLowerCase();
            switch (filter) {
                case "name":
                    const sortByName = [...countries].sort((a: any, b: any) =>
                        a.name.localeCompare(b.name)
                    );
                    setData(sortByName);
                    break;

                case "languages":
                    const sortByLanguages = [...countries].sort(
                        (a: any, b: any) =>
                            a.languages[0].name.localeCompare(
                                b.languages[0].name
                            )
                    );
                    setData(sortByLanguages);
                    break;

                case "population":
                    const sortByPop = [...countries].sort(
                        (a: any, b: any) => a.population - b.population
                    );
                    setData(sortByPop);
                    break;

                case "region":
                    const sortByRegion = [...countries].sort((a: any, b: any) =>
                        a.region.localeCompare(b.region)
                    );
                    setData(sortByRegion);
                    break;
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [countries, activeFilter]
    );
    return [error, data];
};
