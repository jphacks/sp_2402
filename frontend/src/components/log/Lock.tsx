import React from "react";
import styles from "../../css/log/Lock.module.css";

const Lock: React.FC = () => {
  return (
    <div>
      <img
        src="/log/lock_title.svg"
        alt="解放されていません。"
        className={styles.LockContainer}
      />
    </div>
  );
};
export default Lock;
