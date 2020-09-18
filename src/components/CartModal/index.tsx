import React, { useContext } from "react";
import Modal from "react-modal";

import { ThemeContext } from "../../context";
import styles from "./CartModal.module.css";

type CartModalProps = {
    modal: boolean;
    setModal: Function;
};
export const CartModal = ({ modal, setModal }: CartModalProps) => {
    const { theme } = useContext(ThemeContext);
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
            <p>Test</p>
        </Modal>
    );
};
