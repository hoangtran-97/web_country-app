import React from "react";

import { CountryListItemProps } from "../../typings";
import styles from "./CountryListItem.module.css";

export const CountryListItem = ({ country, width }: CountryListItemProps) => {
    const { name, flag, languages, region, population } = country;
    return (
        <tr>
            <td>
                <img alt="flag" src={flag} className={styles.flag}></img>
            </td>

            {width <= 900 ? (
                <td>
                    <p>{name}</p>
                    <p>{languages[0].name}</p>
                    <p>{population}</p>
                    <p>{region}</p>
                </td>
            ) : (
                <>
                    <td>{name}</td>
                    <td>{languages[0].name}</td>
                    <td>{population}</td>
                    <td>{region}</td>
                </>
            )}
        </tr>
    );
};
