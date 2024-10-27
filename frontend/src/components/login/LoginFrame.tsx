import React from "react";
import styles from "../../css/login/LoginFrame.module.css"; // CSSモジュールをインポート

type LoginFrameProps = {
  onLogin: () => Promise<void>;
};

const LoginFrame: React.FC<LoginFrameProps> = ({ onLogin }) => {
  return (
    <div className={styles["login-frame"]}> {/* CSSモジュールを適用 */}
      <button onClick={onLogin}>Login with Google</button>
    </div>
  );
};

export default LoginFrame;