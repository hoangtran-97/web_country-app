import React from "react";

import { SearchProps } from "../../typings";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import styles from "./Search.module.css";

export const Search = React.memo(
    ({ placeholder, query, setQuery }: SearchProps) => {
        return (
            <div className={styles.container}>
                <AiOutlineSearch
                    className={styles.icon__search}
                ></AiOutlineSearch>
                <input
                    className={styles.search}
                    placeholder={placeholder}
                    value={query}
                    onChange={event => setQuery(event.target.value)}
                ></input>
                <AiOutlineClose className={styles.icon__close}></AiOutlineClose>
            </div>
        );
    }
);
