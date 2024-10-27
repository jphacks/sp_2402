import React, { useEffect } from 'react';

const applyStyles = () => {
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    .login-frame {
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    /* 白い枠線を生成する::before疑似要素 */
    .login-frame::before {
        content: '';
        position: absolute;
        top: 2%;
        left: 2%;
        width: 96%;
        height: 96%;
        border: 2px solid white;
        box-sizing: border-box;
        pointer-events: none;
        border-radius: 15px; /* 角を丸くする */
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.6); /* ぼんやりとした影の効果 */
    }
  `;
  document.head.appendChild(styleElement);
};
type LoginFrameProps = {
    onLogin: () => Promise<void>;
  };
const LoginFrame: React.FC<LoginFrameProps> = ({ onLogin }) => {
    useEffect(() => {
      applyStyles();
    }, []);
  
    return (
      <div className="login-frame">
        <button onClick={onLogin}>Login with Google</button>
      </div>
    );
  };

export default LoginFrame;
