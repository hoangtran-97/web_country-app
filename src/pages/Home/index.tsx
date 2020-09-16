import React, { useState } from "react";

import { Search } from "../../components/Search";
import { useGetWindowDimension } from "../../hooks/useGetWindowDimension";
import { useCountry } from "../../hooks/useCountry";
import { Filter } from "../../components/Filter";
import { CountryList } from "../../components/CountryList";
import styles from "./Home.module.css";

export default function Home() {
    // const dispatch = useDispatch();
    // const products = useSelector((state: AppState) => state.product.inCart);

    // const handleAddProduct = () => {
    //     const product: Product = {
    //         id: (+new Date()).toString(),
    //         name: names[Math.floor(Math.random() * names.length)],
    //         price: +(Math.random() * 10).toFixed(2),
    //     };
    //     dispatch(addProduct(product));
    // };
    const [width] = useGetWindowDimension();
    const [activeFilter, setActiveFilter] = useState("Name");
    const [query, setQuery] = useState("");
    const [error, countries] = useCountry(query, activeFilter);
    console.log(error);

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
