import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../utils/Navbar";
import homes from "../../css/home/home.module.css";
// import HomeBackground from './HomeBackground';
import SummonButton from "./SummonButton";
import Intimacy from "./Intimacy";
import Plasticbottles from "./PlasticBottle";
import { dummyUser } from "../../data/storyData";

const Home = () => {
  return (
    <>
    <Intimacy name = {dummyUser.characters[dummyUser.selectedCharacter].name} intimacyLevel={dummyUser.characters[dummyUser.selectedCharacter].intimacyLevel} />
    <Plasticbottles number = {dummyUser.bottoleSum}/>
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
