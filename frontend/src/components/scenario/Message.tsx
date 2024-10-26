import React from "react";
import messages from "../../css/scenario/message.module.css";

// Propsの型定義
interface MessageProps {
  name: string;
  message: string;
}

const Message: React.FC<MessageProps> = ({ name, message }) => {
  return (
    <div className={messages.wrapper}>
      <div className={messages.container}>
        <div>{name}</div>
        <p>{message}</p>
        <img src="/utils/Icon/next.svg" alt="次へ" />
      </div>
    </div>
  );
};

export default Message;
