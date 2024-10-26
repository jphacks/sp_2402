import React from "react"
import styles from "../../css/labely/Lock.module.css";

const Lock: React.FC = () => {
  return (
    <div>
      <div className={styles.LockContainer}>
        <img src="/utils/Icon/lock.svg" alt="解放されていません。"/>
      </div>
    </div>
  );
}
export default Lock;