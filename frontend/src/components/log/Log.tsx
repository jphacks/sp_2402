import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../css/log/Log.module.css'; // Log.module.cssのインポートを追加
import Navbar from '../utils/Navbar';
import Header from "./Header";
import Lock from "./Lock";

const Log: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Header />
      {/* Logのメインコンテンツをここに配置 */}
      <div className={styles.content}>
      </div>

      {/* ホームへのナビゲーションボタン */}
      <button className={styles.homeButton} onClick={() => navigate('/home')}>
      </button>

      {/* Navbarを追加してナビゲーションを表示 */}
      <Navbar currentPage="log" />
    </div>
  );
};

export default Log;