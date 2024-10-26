import React from "react";
import { useNavigate } from "react-router-dom";
import navbars from "../../css/utils/navbar.module.css";

// Propsの型定義
interface NavbarProps {
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage }) => {
  const navigate = useNavigate();

  // 現在のページとアイコンが一致するか判定
  const getIconClass = (page: string): boolean => {
    return currentPage === page;
  };

  return (
    <nav className={navbars.container}>
      <button
        onClick={() => navigate("/labely")}
        className={getIconClass("labely") ? "icon-active" : ""}
      >
        <img
          src={
            getIconClass("labely")
              ? "/utils/Navbar/labely-pink.svg"
              : "/utils/Navbar/labely-blue.svg"
          }
          alt="ラベリィ"
        />
      </button>

      <button
        onClick={() => navigate("/")}
        className={getIconClass("home") ? "icon-active" : ""}
      >
        <img
          src={
            getIconClass("home")
              ? "/utils/Navbar/home-pink.svg"
              : "/utils/Navbar/home-blue.svg"
          }
          alt="ホーム"
        />
      </button>

      <button
        onClick={() => navigate("/log")}
        className={getIconClass("log") ? "icon-active" : ""}
      >
        <img
          src={
            getIconClass("log")
              ? "/utils/Navbar/log-pink.svg"
              : "/utils/Navbar/log-blue.svg"
          }
          alt="ログ"
        />
      </button>
    </nav>
  );
};

export default Navbar;
