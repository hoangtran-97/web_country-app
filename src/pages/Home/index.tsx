import React, { useState, useEffect, useContext } from "react";
import { useDispatch } from "react-redux";

import { ThemeContext } from "../../context";
import { Search } from "../../components/Search";
import { useGetWindowDimension } from "../../hooks/useGetWindowDimension";
import { useCountry } from "../../hooks/useCountry";
import { Filter } from "../../components/Filter";
import { CountryList } from "../../components/CountryList";
import { fetchCountries } from "../../redux/actions/";
import styles from "./Home.module.css";
import { CartModal } from "../../components/CartModal";

export default function Home() {
    const [width] = useGetWindowDimension();
    const [activeFilter, setActiveFilter] = useState("Name");
    const [query, setQuery] = useState("");
    const [countries] = useCountry(query, activeFilter);
    const [modal, setModal] = useState(false);
    const dispatch = useDispatch();
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        dispatch(fetchCountries());
    }, [dispatch]);

    return (
        <div
            className={styles.home}
            style={{ backgroundColor: theme.background }}
        >
            <Search
                placeholder="Search"
                query={query}
                setQuery={setQuery}
            ></Search>
            {countries.length > 0 ? (
                <table>
                    <Filter
                        width={width}
                        activeFilter={activeFilter}
                        setActiveFilter={setActiveFilter}
                    ></Filter>
                    <CountryList
                        countries={countries}
                        width={width}
                    ></CountryList>
                </table>
            ) : (
                <p>No data to display</p>
            )}
            <CartModal modal={modal} setModal={setModal}></CartModal>
        </div>
    );
}
