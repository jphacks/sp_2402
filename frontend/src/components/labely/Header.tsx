import React from 'react';
import styles from "../../css/labely/Header.module.css";


const Header: React.FC = () => {
    return (
        <div className={styles.button}>
            <img src="/utils/Icon/paw.svg" />
        </div>
    );
};

export default Header;
