import React, { useEffect } from 'react';

const applyStyles = () => {
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    .login-background {
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        overflow: hidden;
    }

    /* 白い枠線を作成する::after疑似要素 */
    .login-background::after {
        content: '';
        position: absolute;
        top: 2%;
        left: 2%;
        width: 96%;
        height: 96%;
        border: 2px solid white;
        box-sizing: border-box;
        pointer-events: none;
        border-radius: 15px; /* 角を丸く */
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.6); /* 枠線のぼかし */
    }
  `;
  document.head.appendChild(styleElement);
};

const LoginBackground: React.FC = () => {
  useEffect(() => {
    applyStyles();
  }, []);

  return <div className="login-background"></div>;
};

export default LoginBackground;
