import React from 'react';
import styles from "../../css/home/PlasticBottle.module.css";

// Propsの型定義
interface BottleProps {
    number: number;
}

const Intimacy: React.FC<BottleProps> = ({ number }) => {
    return (
        <div className={styles.button}>
            <img src="/utils/PlasticBottle/con.svg" alt="ペットボトル" />
            <p>{`${number}本`}</p> {/* 〇本の形式で表示 */}
        </div>
    );
};

export default Intimacy;
