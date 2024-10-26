// TitlesCard.tsx

import React from 'react';
import styles from '../../css/log/TitlesCard.module.css';
import Lock from './Lock';

interface TitlesCardProps {
  image: string;
  isUnlocked: boolean;
  style: React.CSSProperties;
}

const TitlesCard: React.FC<TitlesCardProps> = ({ image, isUnlocked, style }) => {
  return (
    <div className={styles.TitlesCardContainer} style={style}>
      {isUnlocked ? (
        <img src={image} alt="称号画像" className={styles.image} />
      ) : (
        <Lock />
      )}
    </div>
  );
};

export default TitlesCard;