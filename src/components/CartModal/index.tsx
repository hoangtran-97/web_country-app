import React, { useContext } from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";

import { AppState, CartModalProps } from "../../typings";
import { ThemeContext } from "../../context";
import styles from "./CartModal.module.css";
import { CartItem } from "../CartItem";

export const CartModal = ({ modal, setModal }: CartModalProps) => {
    const { theme } = useContext(ThemeContext);
    const carts = useSelector((state: AppState) => state.product.inCart);
    const customStyle = {
        content: {
            backgroundColor: theme.foreground,
        },
    };
    return (
        <Modal
            isOpen={modal}
            className={styles.modal}
            style={customStyle}
            overlayClassName="upload-modal-overlay"
            ariaHideApp={false}
        >
            <div className={styles.header}>
                <div></div>
                <h3>Your shopping cart</h3>
                <AiOutlineClose
                    onClick={() => setModal(!modal)}
                    className={styles.icon__close}
                    style={{ backgroundColor: theme.background }}
                ></AiOutlineClose>
            </div>
            <div className={styles.content}>
                {carts.map(cart => (
                    <CartItem key={cart.name} cart={cart}></CartItem>
                ))}
            </div>
        </Modal>
    );
};
