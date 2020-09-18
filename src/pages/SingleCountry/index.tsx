import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

import { AppState } from "../../typings";
import { ThemeContext } from "../../context";
import styles from "./SingleCountry.module.css";

export const SingleCountry = () => {
    const { id } = useParams();
    const country = useSelector((state: AppState) =>
        state.countries.list.find(p => p.name === id)
    );
    const { theme } = useContext(ThemeContext);

    if (!country) {
        return (
            <div
                className={styles.container}
                style={{
                    backgroundColor: theme.background,
                    color: theme.text,
                }}
            >
                <h2> Coutry not found</h2>
                <Link type="button" to="/">
                    <AiOutlineArrowLeft
                        className={styles.icon__back}
                        style={{
                            color: theme.foreground,
                        }}
                    ></AiOutlineArrowLeft>
                </Link>
            </div>
        );
    }
    const { name, flag, languages, region, population } = country;

    return (
        <div
            className={styles.container}
            style={{
                backgroundColor: theme.background,
                color: theme.text,
            }}
        >
            <img alt="flag" src={flag} className={styles.flag}></img>
            <p>{name}</p>
            <p>{languages[0].name}</p>
            <p>{population}</p>
            <p>{region}</p>
            <Link type="button" to="/">
                <AiOutlineArrowLeft
                    className={styles.icon__back}
                    style={{
                        color: theme.foreground,
                    }}
                ></AiOutlineArrowLeft>
            </Link>
        </div>
    );
};
