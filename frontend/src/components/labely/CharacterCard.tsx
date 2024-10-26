import React from "react";
import styles from "../../css/labely/CharacterCard.module.css";

// Propsの型定義
interface CharacterCardProps {
  CharacterCardLevel: number; // 親密度
  CharacterCardname: string; // キャラクター名
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  CharacterCardLevel,
  CharacterCardname,
}) => {
  // 親密度に応じてアイコンを選択
  const iconPath =
    CharacterCardLevel > 80
      ? "/utils/Intimacy/home_100.svg" // 差し替え必要あり
      : CharacterCardLevel > 60
      ? "/utils/Intimacy/home_80.svg" // 差し替え必要あり
      : CharacterCardLevel > 40
      ? "/labely/CharacterCard/labely_60.svg"
      : CharacterCardLevel > 20
      ? "/utils/Intimacy/home_40.svg" // 差し替え必要あり
      : "/utils/Intimacy/home_20.svg"; // 差し替え必要あり

  return (
    <div>
      <div className={styles.CharacterCardContainer}>
        <img
          src="/labely/CharacterCard/dog.svg"
          alt="Character Icon"
          className={styles.backgroundIcon}
        />
        <div
          className={styles.CharacterCardLevel}
        >{`${CharacterCardLevel}%`}</div>{" "}
        {/* 親密度を表示 */}
        {/* CharacterCardattention を修正 */}
        <div className={styles.CharacterCardattention}>
          <img src="/labely/CharacterCard/attention.svg" alt="Attention Icon" />
        </div>
        <img
          src={iconPath}
          alt={`${CharacterCardLevel}%`}
          className={styles.CharacterCardIcon}
        />
        <div className={styles.overlayButton}>
          <p className={styles.CharacterCardname}>{CharacterCardname}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
