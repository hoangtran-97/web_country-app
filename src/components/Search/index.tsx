import React, { useContext } from "react";

import { SearchProps } from "../../typings";
import { ThemeContext } from "../../context";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import styles from "./Search.module.css";

export const Search = React.memo(
    ({ placeholder, query, setQuery }: SearchProps) => {
        const { theme, switchTheme } = useContext(ThemeContext);
        return (
            <div
                className={styles.container}
                style={{ backgroundColor: theme.foreground }}
            >
                <div
                    className={styles.container__search}
                    style={{ backgroundColor: theme.background }}
                >
                    <AiOutlineSearch
                        className={styles.icon__search}
                    ></AiOutlineSearch>
                    <input
                        style={{ backgroundColor: theme.background }}
                        className={styles.search}
                        placeholder={placeholder}
                        value={query}
                        onChange={event => setQuery(event.target.value)}
                    ></input>
                    <button
                        style={{ backgroundColor: theme.background }}
                        onClick={() => setQuery("")}
                        className={styles.button__close}
                    >
                        <AiOutlineClose
                            className={styles.icon__close}
                        ></AiOutlineClose>
                    </button>
                </div>
                <button
                    className={styles.button__theme}
                    style={{ backgroundColor: theme.foreground }}
                    onClick={switchTheme}
                >
                    <WiMoonAltThirdQuarter
                        className={styles.icon__theme}
                        style={{ color: theme.icon, transform: theme.deg }}
                    ></WiMoonAltThirdQuarter>
                </button>
            </div>
        );
    }
);
