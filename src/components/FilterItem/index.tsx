import React from "react";

import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { FilterItemProps } from "../../typings";
import styles from "./FilterItem.module.css";

export const FilterItem = ({
    filterCat,
    activeFilter,
    setActiveFilter,
}: FilterItemProps) => {
    return (
        <>
            {filterCat === "Flag" || filterCat === "Cart" ? (
                <th>
                    <p>{filterCat}</p>
                </th>
            ) : (
                <th>
                    <button
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
