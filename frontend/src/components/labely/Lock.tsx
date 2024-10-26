import React from "react";
import styles from "../../css/labely/Lock.module.css";

const Lock: React.FC = () => {
  return (
    <div>
      <img
        src="/utils/Icon/lock.svg"
        alt="解放されていません。"
        className={styles.LockContainer}
      />
    </div>
  );
};
export default Lock;
