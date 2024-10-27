// Lock.tsx

import React from 'react';
import styles from '../../css/log/Lock.module.css';

const Lock: React.FC = () => {
  return (
    <div className={styles.LockContainer}>
      <img src="/log/lock_title.svg" alt="ロック画像" className={styles.image} />
    </div>
  );
};

export default Lock;