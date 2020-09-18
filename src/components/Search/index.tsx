import React, { useContext } from "react";
import {
    AiOutlineSearch,
    AiOutlineClose,
    AiOutlineShoppingCart,
} from "react-icons/ai";
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import { useSelector } from "react-redux";

import { SearchProps, AppState } from "../../typings";
import { ThemeContext } from "../../context";
import styles from "./Search.module.css";

export const Search = React.memo(
    ({ placeholder, query, setQuery, setModal }: SearchProps) => {
        const { theme, switchTheme } = useContext(ThemeContext);
        const cart = useSelector((state: AppState) => state.product.inCart);
        console.log(cart);
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
                <div className={styles.container__right}>
                    <button
                        className={styles.button__cart}
                        style={{ backgroundColor: theme.foreground }}
                    >
                        <AiOutlineShoppingCart
                            onClick={() => setModal(true)}
                            className={styles.icon__cart}
                            style={{ color: theme.text }}
                        ></AiOutlineShoppingCart>
                        <div
                            className={styles.cart__counter}
                            style={{
                                color: theme.text,
                                backgroundColor: theme.background,
                            }}
                        >
                            {cart.length}
                        </div>
                    </button>
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
            </div>
        );
    }
);
