import React from "react";

import { FilterItem } from "../FilterItem";
import { FilterProps } from "../../typings";
import styles from "./Filter.module.css";

export const Filter = React.memo(
    ({ width, activeFilter, setActiveFilter }: FilterProps) => {
        const filterCats = [
            "Flag",
            "Name",
            "Languages",
            "Population",
            "Region",
            "Cart",
        ];
        const mobileFilterCats = [
            "Name",
            "Languages",
            "Population",
            "Region",
            "Cart",
        ];

        return (
            <>
                <thead className={styles.container}>
                    {width > 900 ? (
                        <tr>
                            {filterCats.map(filterCat => (
                                <FilterItem
                                    filterCat={filterCat}
                                    key={filterCat}
                                    activeFilter={activeFilter}
                                    setActiveFilter={setActiveFilter}
                                ></FilterItem>
                            ))}
                        </tr>
                    ) : (
                        <tr>
                            {mobileFilterCats.map(filterCat => (
                                <FilterItem
                                    filterCat={filterCat}
                                    key={filterCat}
                                    activeFilter={activeFilter}
                                    setActiveFilter={setActiveFilter}
                                ></FilterItem>
                            ))}
                        </tr>
                    )}
                </thead>
                <tr className={styles.spacing}></tr>
            </>
        );
    }
);
