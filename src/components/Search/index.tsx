import React from "react";

import { SearchProps } from "../../typings";
import styles from "./Search.module.css";

export const Search = React.memo(
    ({ placeholder, query, setQuery }: SearchProps) => {
        return (
            <input
                className={styles.search}
                placeholder={placeholder}
                value={query}
                onChange={event => setQuery(event.target.value)}
            ></input>
        );
    }
);
