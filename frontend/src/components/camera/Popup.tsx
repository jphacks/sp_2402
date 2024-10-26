import React from "react";
import popups from "../../css/camera/popup.module.css";

// Propsの型定義
interface PopupProps {
  closePopup: () => void;
}

const Popup: React.FC<PopupProps> = ({ closePopup }) => {
  return (
    <div className={popups.overlay}>
      <div className={popups.container}>
        <div className={popups.header}>分別判定</div>
        <div className={popups.content}>
          <h4>※ラベルがはがされていないようです</h4>
          <p>
            ラベルをペットボトルからはがして、
            <br /> もう一度写真を撮ろう！
          </p>
        </div>
        <button className={popups.button} onClick={() => closePopup()}>
          OK
        </button>
      </div>
    </div>
  );
};

export default Popup;
