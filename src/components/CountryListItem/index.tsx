import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiFillInfoCircle } from "react-icons/ai";

import { CountryListItemProps } from "../../typings";
import { ThemeContext } from "../../context";
import styles from "./CountryListItem.module.css";

export const CountryListItem = ({ country, width }: CountryListItemProps) => {
    const { name, flag, languages, region, population } = country;
    const { theme } = useContext(ThemeContext);
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
                    <tr
                        className={styles.text__container}
                        style={{
                            color: theme.text,
                        }}
                    >
                        <td>{name}</td>
                        <td>{languages[0].name}</td>
                        <td>{population}</td>
                        <td>{region}</td>
                        <td>
                            <button
                                className={styles.button__get}
                                style={{
                                    backgroundColor: theme.foreground,
                                    color: theme.text,
                                }}
                            >
                                Add
                            </button>
                        </td>
                    </tr>
                </>
            ) : (
                <tr
                    className={styles.container}
                    style={{
                        color: theme.text,
                    }}
                >
                    <td>
                        <img
                            alt="flag"
                            src={flag}
                            className={styles.flag}
                        ></img>
                    </td>
                    <td className={styles.tableCell__name}>
                        {name}
                        <Link type="button" to={`/country/${name}`}>
                            <AiFillInfoCircle
                                className={styles.icon__info}
                                style={{
                                    color: theme.foreground,
                                }}
                            ></AiFillInfoCircle>
                        </Link>
                    </td>
                    <td>{languages[0].name}</td>
                    <td>{population}</td>
                    <td>{region}</td>
                    <td>
                        <button
                            className={styles.button__get}
                            style={{
                                backgroundColor: theme.foreground,
                                color: theme.text,
                            }}
                        >
                            Add
                        </button>
                    </td>
                </tr>
            )}
        </>
    );
};
