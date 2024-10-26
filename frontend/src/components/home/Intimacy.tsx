import React from "react";
import styles from "../../css/home/Intimacy.module.css";

// Propsの型定義
interface IntimacyProps {
  name: string;
  intimacyLevel: number; // 親密度
}

const Intimacy: React.FC<IntimacyProps> = ({ name, intimacyLevel }) => {
  // 親密度に応じてアイコンを選択
  const iconPath =
    intimacyLevel > 80
      ? "/utils/Intimacy/home_100.svg" // 親密度が 80 以上の場合 100% アイコン
      : intimacyLevel > 60
      ? "/utils/Intimacy/home_80.svg" // 親密度が 60 以上の場合 80% アイコン
      : intimacyLevel > 40
      ? "/utils/Intimacy/home_60.svg" // 親密度が 40 以上の場合 60% アイコン
      : intimacyLevel > 20
      ? "/utils/Intimacy/home_40.svg" // 親密度が 20 以上の場合 40% アイコン
      : "/utils/Intimacy/home_20.svg"; // 親密度が 20 未満の場合 20% アイコン

  return (
    <div className={styles.intimacyContainer}>
      <img
        src={iconPath}
        alt={`${intimacyLevel}%`}
        className={styles.intimacyIcon}
      />
      <div className={styles.button}>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Intimacy;
