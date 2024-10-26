import React from 'react';
import styles from "../../css/log/Header.module.css";


const Header: React.FC = () => {
    return (
        <div className={styles.button}>
            <img src="/log/header.svg" />
        </div>
    );
};

export default Header;
