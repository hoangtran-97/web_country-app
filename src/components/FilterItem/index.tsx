import React, { useContext } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

import { FilterItemProps } from "../../typings";
import { ThemeContext } from "../../context";
import styles from "./FilterItem.module.css";

export const FilterItem = ({
    filterCat,
    activeFilter,
    setActiveFilter,
}: FilterItemProps) => {
    const { theme } = useContext(ThemeContext);
    return (
        <>
            {filterCat === "Flag" || filterCat === "Cart" ? (
                <th>
                    <p
                        style={{
                            color: theme.text,
                        }}
                    >
                        {filterCat}
                    </p>
                </th>
            ) : (
                <th>
                    <button
                        style={{
                            backgroundColor: theme.foreground,
                            color: theme.text,
                        }}
                        className={styles.container}
                        onClick={() => setActiveFilter(filterCat)}
                    >
                        <p>{filterCat}</p>
                        {filterCat === activeFilter ? (
                            <AiFillCaretUp
                                className={styles.icon}
                            ></AiFillCaretUp>
                        ) : (
                            <AiFillCaretDown
                                className={styles.icon}
                            ></AiFillCaretDown>
                        )}
                    </button>
                </th>
            )}
        </>
    );
};
