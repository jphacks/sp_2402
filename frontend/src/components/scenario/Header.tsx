import React from "react";
import headers from "../../css/scenario/header.module.css";

// Propsの型定義
interface HeaderProps {
  index: number;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ index, title }) => {
  return (
    <div className={headers.container}>
      <p>{`第 ${index} 話`}</p>
      <h3>{title}</h3>
    </div>
  );
};

export default Header;
