import React from "react";
import Navbar from "../utils/Navbar";
// import LabelBackground from './LabelBackground'
import homes from "../../css/home/home.module.css";
import CharacterCard from "./CharacterCard";
import Header from "./Header";
import Lock from "./Lock";
import { characters } from "../../data/storyData";
import styles from "../../css/labely/Labely.module.css";

const Labely = () => {
  const dummydata = {
    CharacterCard: 60,
    name: "お茶わんこ",
    type: "tea1",
    attention: 1,
  };
  return (
    <div className={homes.container}>
      <Header />
      <div className={styles.viewer}>
        {Object.keys(characters).map((genre) => {
          const drink = characters[genre];
          return (
            <>
              {drink.intimacyLevel == 0 ? (
                <Lock key={genre} />
              ) : (
                <CharacterCard
                  key={genre}
                  CharacterCardLevel={drink.intimacyLevel}
                  CharacterCardname={drink.name}
                  CharacterCardType={genre}
                  isSelected={drink.isSelected}
                />
              )}
            </>
          );
        })}
      </div>
      <img src="/dev/labely.png" alt="" />
      {/* <LabelBackground /> */}
      <Navbar currentPage="labely" />
    </div>
  );
};

export default Labely;
