import React, { useContext } from "react";

import { SearchProps } from "../../typings";
import { ThemeContext } from "../../context";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import styles from "./Search.module.css";

export const Search = React.memo(
    ({ placeholder, query, setQuery }: SearchProps) => {
        const { theme } = useContext(ThemeContext);
        return (
            <div
                className={styles.container}
                style={{ backgroundColor: theme.foreground }}
            >
                <div className={styles.container__search}>
                    <AiOutlineSearch
                        className={styles.icon__search}
                    ></AiOutlineSearch>
                    <input
                        className={styles.search}
                        placeholder={placeholder}
                        value={query}
                        onChange={event => setQuery(event.target.value)}
                    ></input>
                    <button
                        onClick={() => setQuery("")}
                        className={styles.button__close}
                    >
                        <AiOutlineClose
                            className={styles.icon__close}
                        ></AiOutlineClose>
                    </button>
                </div>
            </div>
        );
    }
);
