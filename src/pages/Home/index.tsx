import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { Search } from "../../components/Search";
import { useGetWindowDimension } from "../../hooks/useGetWindowDimension";
import { useCountry } from "../../hooks/useCountry";
import { Filter } from "../../components/Filter";
import { CountryList } from "../../components/CountryList";
import { fetchCountries } from "../../redux/actions/";
import styles from "./Home.module.css";

export default function Home() {
    const [width] = useGetWindowDimension();
    const [activeFilter, setActiveFilter] = useState("Name");
    const [query, setQuery] = useState("");
    const [countries] = useCountry(query, activeFilter);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCountries());
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
                <CountryList countries={countries} width={width}></CountryList>
            </table>
        </div>
    );
}
