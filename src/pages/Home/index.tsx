import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppState } from "../../typings";
import { Search } from "../../components/Search";
import { useGetWindowDimension } from "../../hooks/useGetWindowDimension";
// import { useCountry } from "../../hooks/useCountry";
import { Filter } from "../../components/Filter";
import { CountryList } from "../../components/CountryList";
import { fetchCountries } from "../../redux/actions/";
import styles from "./Home.module.css";

export default function Home() {
    const [width] = useGetWindowDimension();
    const [activeFilter, setActiveFilter] = useState("Name");
    const [query, setQuery] = useState("");
    // const [error, countries] = useCountry(query, activeFilter);
    // console.log(error);
    const dispatch = useDispatch();
    const countries = useSelector((state: AppState) => state.countries.list);
    useEffect(() => {
        dispatch(fetchCountries());
        console.log("start");
    }, [dispatch]);

    return (
        <div className={styles.home}>
            <Search
                placeholder="Search"
                query={query}
                setQuery={setQuery}
            ></Search>
            <table>
                <Filter
                    width={width}
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                ></Filter>
                <CountryList
                    countries={countries[0]}
                    width={width}
                ></CountryList>
            </table>
        </div>
    );
}
