// Log.tsx

import React from 'react';
import styles from '../../css/log/Log.module.css';
import Navbar from '../utils/Navbar';
import Header from './Header';
import TitlesCard from './TitlesCard';
import Kinds from './Kinds';

const dummyData = [
  { image: '/log/eco1.svg', isUnlocked: true },
  { image: '/log/eco2.svg', isUnlocked: true },
  { image: '/log/eco3.svg', isUnlocked: false },
  { image: '/log/story1.svg', isUnlocked: true },
  { image: '/log/story2.svg', isUnlocked: false },
  { image: '/log/story3.svg', isUnlocked: false},
  { image: '/log/character1.svg', isUnlocked: true },
  { image: '/log/character2.svg', isUnlocked: true },
  { image: '/log/character3.svg', isUnlocked: true },
];

// 各画像の位置を指定
const positions = [
  { left: 12, top: 200 },   // eco1
  { left: 131, top: 200 },  // eco2
  { left: 250, top: 200 },  // eco3
  { left: 12, top: 370 },   // story1
  { left: 131, top: 370 },  // story2
  { left: 250, top: 370 },  // story3
  { left: 12, top: 540 },   // character1
  { left: 131, top: 540 },  // character2
  { left: 250, top: 540 },  // character3
];

const Log: React.FC = () => {
  return (
    <div className={styles.container}> 
      <Header />
      <Kinds />
      <div className={styles.viewer}>
        {dummyData.map((data, index) => (
          <TitlesCard
            key={index}
            image={data.image}
            isUnlocked={data.isUnlocked}
            style={{ left: `${positions[index].left}px`, top: `${positions[index].top}px` }}
          />
        ))}
      </div>
      <Navbar currentPage="log" />
    </div>
  );
};

export default Log;