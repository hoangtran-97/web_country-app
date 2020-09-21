import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchCountries } from "../redux/actions/";
import { AppState } from "../typings";

export const useCountry = (query: string, activeFilter: string) => {
    const [data, setData] = useState(Array);
    const dispatch = useDispatch();
    const countries = useSelector((state: AppState) => state.countries.list);

    useEffect(() => {
        dispatch(fetchCountries());
    }, [dispatch]);
    useEffect(() => {
        setData(countries);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [countries]);

    //Sorting
    useEffect(() => {
        sortCountry(data);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeFilter]);
    //Searching
    useEffect(() => {
        searchCountry(countries, query);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);
    const sortCountry = (countries: any) => {
        const filter = activeFilter.toLowerCase();
        switch (filter) {
            case "name":
                const sortByName = [...countries].sort((a: any, b: any) =>
                    a.name.localeCompare(b.name)
                );
                setData(sortByName);
                break;

            case "languages":
                const sortByLanguages = [...countries].sort((a: any, b: any) =>
                    a.languages[0].name.localeCompare(b.languages[0].name)
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
    };
    const searchCountry = (countries: any, query: string) => {
        const sorted = [...countries].filter((country: any) =>
            country.name.toLowerCase().includes(query.toLowerCase())
        );
        sortCountry(sorted);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    };

    return [data];
};
