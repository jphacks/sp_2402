import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import homes from "../../css/home/home.module.css";
import Message from "./Message";

const Scenario = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 読み込み時に実行
  useEffect(() => {
    if (!location.state?.character) {
      navigate("/");
    }
  }, []);

  return (
    <div className={homes.container}>
      <img src="/dev/summon.png" alt="" />
      <Header index={location.state.index} title={"初めての出会い"}/>
      <Message name={"お茶わんこ"} message={"わん！こんにちは〜！君が私を呼び出したのかな〜！よろしくね"}/>
    </div>
  );
};

export default Scenario;
