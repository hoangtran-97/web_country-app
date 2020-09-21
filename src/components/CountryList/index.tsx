import React from "react";

import { CountryListItem } from "../CountryListItem";
import { CountryListProps, Country } from "../../typings";
import styles from "./CountryList.module.css";

export const CountryList = ({ countries, width }: CountryListProps) => {
    return (
        <tbody>
            <tr className={styles.spacing}></tr>
            {countries &&
                countries.map((country: Country) => (
                    <CountryListItem
                        country={country}
                        key={country.alpha2Code}
                        width={width}
                    ></CountryListItem>
                ))}
        </tbody>
    );
};
