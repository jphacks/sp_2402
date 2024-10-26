import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../utils/Navbar";
import homes from "../../css/home/home.module.css";
// import HomeBackground from './HomeBackground';
import SummonButton from "./SummonButton";
import Intimacy from "./Intimacy";
import Plasticbottles from "./PlasticBottle";

const Home = () => {
  const dummydata = {
    name: "お茶わんこ",
    intimacyLevel: 100,
    number : 2
  }
  return (
    <>
    <Intimacy name = {dummydata.name} intimacyLevel={dummydata.intimacyLevel} />
    <Plasticbottles number = {dummydata.number}/>
     <div className={homes.container}>
      <img src="/dev/home.png" alt="" />
      {/* <HomeBackground /> */}
      <SummonButton />
      <Navbar currentPage="home" />
    </div>
    </>
  );
};

export default Home;
