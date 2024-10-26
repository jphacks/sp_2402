import React from 'react';
import styles from "../../css/home/Intimacy.module.css";

// Propsの型定義
interface IntimacyProps {
    name: string;
    intimacyLevel: number; // 親密度
}

const Intimacy: React.FC<IntimacyProps> = ({ name, intimacyLevel }) => {
    // 親密度に応じてアイコンを選択
    const iconPath = intimacyLevel >= 80
        ? "/utils/Intimacy/home_100.svg" // 親密度が 80 以上の場合 100% アイコン
        : "/utils/Intimacy/home_60.svg"; // 親密度が 80 未満の場合 60% アイコン

    return (
        <div className={styles.intimacyContainer}>
            <img src={iconPath} alt={`Intimacy Level: ${intimacyLevel}%`} className={styles.intimacyIcon} />
            <div className={styles.button}>
                <p>{name}</p> {/* 名前を表示 */}
            </div>
        </div>
    );
};

export default Intimacy;