import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiFillInfoCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

import { CountryListItemProps, AppState } from "../../typings";
import { addProduct } from "../../redux/actions";
import { ThemeContext } from "../../context";
import styles from "./CountryListItem.module.css";

export const CountryListItem = ({ country, width }: CountryListItemProps) => {
    const { name, flag, languages, region, population } = country;
    const { theme } = useContext(ThemeContext);
    const cart = useSelector((state: AppState) => state.product.inCart);
    const dispatch = useDispatch();
    let buttonStyle = {};
    if (cart.find(p => p.name === country.name)) {
        buttonStyle = {
            backgroundColor: theme.background,
            color: theme.text,
            pointerEvents: "none",
        };
    } else {
        buttonStyle = {
            backgroundColor: theme.foreground,
            color: theme.text,
        };
    }
    const handleAddProduct = () => {
        dispatch(addProduct(country));
    };
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
                            <div className={styles.container__get}>
                                <button
                                    onClick={handleAddProduct}
                                    className={styles.button__get}
                                    style={buttonStyle}
                                >
                                    Add
                                </button>
                                <Link type="button" to={`/country/${name}`}>
                                    <AiFillInfoCircle
                                        className={styles.icon__info}
                                        style={{
                                            color: theme.foreground,
                                        }}
                                    ></AiFillInfoCircle>
                                </Link>
                            </div>
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
                    <td>{name}</td>
                    <td>{languages[0].name}</td>
                    <td>{population}</td>
                    <td>{region}</td>
                    <td>
                        <div className={styles.container__get}>
                            <button
                                onClick={handleAddProduct}
                                className={styles.button__get}
                                style={buttonStyle}
                            >
                                Add
                            </button>
                            <Link type="button" to={`/country/${name}`}>
                                <AiFillInfoCircle
                                    className={styles.icon__info}
                                    style={{
                                        color: theme.foreground,
                                    }}
                                ></AiFillInfoCircle>
                            </Link>
                        </div>
                    </td>
                </tr>
            )}
        </>
    );
};
