import React from 'react';
import TitlesCard from "./TitlesCard";
import styles from '../../css/log/kinds.module.css';

interface KindsCardProps {
  indexImage: string;
  titleCards: Array<any>;
}

const Kinds: React.FC<KindsCardProps> = ({ indexImage, titleCards }) => {
  return (
    <div className={styles.container}>
      <img src={indexImage} alt="" className={styles.indexImage} />
      <div className={styles.viewer}>
        {titleCards.map((data) => <TitlesCard image={data.image} isUnlocked={data.isUnlocked} />)}
      </div>
    </div>
  );
};

export default Kinds;
