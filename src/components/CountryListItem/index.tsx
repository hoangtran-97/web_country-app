import React from "react";

import { CountryListItemProps } from "../../typings";
import styles from "./CountryListItem.module.css";

export const CountryListItem = ({ country, width }: CountryListItemProps) => {
    const { name, flag, languages, region, population } = country;
    return (
        <>
            {width <= 900 ? (
                <>
                    <tr>
                        <td colSpan={5}>
                            <img
                                alt="flag"
                                src={flag}
                                className={styles.flag}
                            ></img>
                        </td>
                    </tr>
                    <tr className={styles.text__container}>
                        <td>{name}</td>
                        <td>{languages[0].name}</td>
                        <td>{population}</td>
                        <td>{region}</td>
                        <td>
                            <button>Get</button>
                        </td>
                    </tr>
                </>
            ) : (
                <tr className={styles.container}>
                    <td>
                        <img
                            alt="flag"
                            src={flag}
                            className={styles.flag}
                        ></img>
                    </td>
                    <td>{name}</td>
                    <td>{languages[0].name}</td>
                    <td>{population}</td>
                    <td>{region}</td>
                    <td>
                        <button>Get</button>
                    </td>
                </tr>
            )}
        </>
    );
};
