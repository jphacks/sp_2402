import React from 'react';
import styles from '../../css/log/Kinds.module.css';

const Kinds: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src="/log/.svg" alt="画像1" className={styles.image1} />
      <img src="/log/image2.svg" alt="画像2" className={styles.image2} />
      <img src="/log/image3.svg" alt="画像3" className={styles.image3} />
    </div>
  );
};

export default Kinds;