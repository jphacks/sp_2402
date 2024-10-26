import React from "react";
import styles from "../../css/labely/CharacterCard.module.css";

// Propsの型定義
interface CharacterCardProps {
  CharacterCardLevel: number; // 親密度
  CharacterCardname: string; // キャラクター名
  CharacterCardType: string;
  isSelected: boolean;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  CharacterCardLevel,
  CharacterCardname,
  CharacterCardType,
  isSelected,
}) => {
  // 親密度に応じてアイコンを選択
  const iconPath =
    CharacterCardLevel > 80
      ? "/labely/CharacterCard/labely_100.svg"
      : CharacterCardLevel > 60
      ? "/labely/CharacterCard/labely_80.svg"
      : CharacterCardLevel > 40
      ? "/labely/CharacterCard/labely_60.svg"
      : CharacterCardLevel > 20
      ? "/labely/CharacterCard/labely_40.svg"
      : "/labely/CharacterCard/labely_20.svg";

  return (
    <div>
      <div className={styles.CharacterCardContainer}>
        <img
          src={`/labely/CharacterCard/${CharacterCardType}.png`}
          alt={CharacterCardname}
          className={styles.backgroundIcon}
          width={116}
          height={163}
        />
        <div
          className={styles.CharacterCardLevel}
        >{`${CharacterCardLevel}%`}</div>
        {isSelected && (
          <div className={styles.CharacterCardattention}>
            <img src="/labely/CharacterCard/attention.svg" alt="選択中" />
          </div>
        )}
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
