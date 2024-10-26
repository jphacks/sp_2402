import React from "react";
import messages from "../../css/scenario/message.module.css";

// Propsの型定義
interface MessageProps {
  next: () => void;
  name: string;
  message: string;
}

const Message: React.FC<MessageProps> = ({ next, name, message }) => {
  return (
    <div className={messages.wrapper}  onClick={() => next()}>
      <div className={messages.container}>
        <div>{name}</div>
        <p>{message}</p>
        <img src="/utils/Icon/next.svg" alt="次へ" />
      </div>
    </div>
  );
};

export default Message;
