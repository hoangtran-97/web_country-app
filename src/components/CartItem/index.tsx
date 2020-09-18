import React from "react";
import { AiFillDelete } from "react-icons/ai";

import { CartItemProps } from "../../typings";
import styles from "./CartItem.module.css";

export const CartItem = ({ cart }: CartItemProps) => {
    const { name, flag } = cart;
    return (
        <div className={styles.container}>
            <div className={styles.container__info}>
                <img alt="flag" src={flag} className={styles.flag}></img>
                <p className={styles.text}>{name}</p>
            </div>
            <AiFillDelete className={styles.icon__delete}></AiFillDelete>
        </div>
    );
};
