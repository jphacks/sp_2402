import React from "react";
import styles from "../../css/scenario/finishPopup.module.css";
import { useNavigate } from "react-router-dom";

// Propsの型定義
interface FinishPopupProps {
  index: number;
  title: string;
  intimacyLevel: number; // 親密度
}

const FinishPopup: React.FC<FinishPopupProps> = ({
  index,
  title,
  intimacyLevel,
}) => {
  const navigate = useNavigate();
  const iconPath =
    intimacyLevel > 80
      ? "/scenario/FinishPopup/100.svg"
      : intimacyLevel > 60
      ? "/scenario/FinishPopup/80.svg"
      : intimacyLevel > 40
      ? "/scenario/FinishPopup/60.svg"
      : intimacyLevel > 20
      ? "/scenario/FinishPopup/40.svg"
      : "/scenario/FinishPopup/20.svg";

  return (
    <div className={styles.overlay}  onClick={() => navigate("/")}>
      <img
        src="/scenario/FinishPopup/text.svg"
        alt="親密度UP"
        className={styles.text}
      />
      <img src={iconPath} alt={`${intimacyLevel}%`} className={styles.icon} />
      <div className={styles.box}>
        <p>{`第 ${index} 話`}</p>
        <div>
          <img src="/utils/Icon/star.svg" alt="" />
          <h3>{title}</h3>
        </div>
        <img src="/utils/Icon/check.svg" alt="完了" className={styles.check} />
      </div>
      <img src="/scenario/FinishPopup/next.svg" alt="次へ" className={styles.next}/>
    </div>
  );
};

export default FinishPopup;
