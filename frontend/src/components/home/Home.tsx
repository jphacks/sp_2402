import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../utils/Navbar";
import homes from "../../css/home/home.module.css";
// import HomeBackground from './HomeBackground';
import SummonButton from "./SummonButton";

const Home = () => {
  return (
    <div className={homes.container}>
      <img src="/dev/home.png" alt="" />
      {/* <HomeBackground /> */}
      <SummonButton />
      <Navbar currentPage="home" />
    </div>
  );
};

export default Home;
