import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../utils/Navbar";
import homes from "../../css/home/home.module.css";
import SummonButton from "./SummonButton";
import Intimacy from "./Intimacy";
import Plasticbottles from "./PlasticBottle";
import { dummyUser } from "../../data/storyData";
import ViewCoffee from "../utils/ViewCoffee";
import ViewTea_1 from "../utils/ViewTea_1";

const Home = () => {
  let characterComponent;

  switch (dummyUser.selectedCharacter) {
    case "tea_1":
      // characterComponent = <ViewTea_1 enviroment="park" />;
      characterComponent = <ViewCoffee enviroment="night" />;
      break;
    case "coffee":
      characterComponent = <ViewCoffee enviroment="night" />;
      break;
    default:
      characterComponent = <div>キャラクターが選択されていません。</div>;
      break;
  }

  return (
    <>
      <Intimacy
        name={dummyUser.characters[dummyUser.selectedCharacter].name}
        intimacyLevel={
          dummyUser.characters[dummyUser.selectedCharacter].intimacyLevel
        }
      />
      <Plasticbottles number={dummyUser.bottoleSum} />
      <SummonButton />
      <div className={homes.container}>
        {characterComponent}
        <Navbar currentPage="home" />
      </div>
    </>
  );
};

export default Home;
