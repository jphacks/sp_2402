// Log.tsx

import React, { useContext, useEffect, useState } from "react";
import styles from "../../css/log/Log.module.css";
import Navbar from "../utils/Navbar";
import Header from "./Header";
import Kinds from "./kinds";
import { Context } from "../../providers/Provider";
import { useNavigate } from "react-router-dom";
// import { initData, UserData } from "../../data/storyData";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { characters, initData, UserData } from "../../data/storyData";

const titleData = [
  {
    group: "eco",
    groupIndex: { image: "/log/eco.svg" },
    badges: [
      { image: "/log/eco1.svg", isUnlocked: false, conditions: 1 },
      { image: "/log/eco2.svg", isUnlocked: false, conditions: 10 },
      { image: "/log/eco3.svg", isUnlocked: false, conditions: 50 },
    ],
  },
  {
    group: "story",
    groupIndex: { image: "/log/story.svg" },
    badges: [
      { image: "/log/story1.svg", isUnlocked: false, conditions: 1 },
      { image: "/log/story2.svg", isUnlocked: false, conditions: 5 },
      { image: "/log/story3.svg", isUnlocked: false, conditions: 35 },
    ],
  },
  {
    group: "character",
    groupIndex: { image: "/log/character.svg" },
    badges: [
      { image: "/log/character1.svg", isUnlocked: false, conditions: 1 },
      { image: "/log/character2.svg", isUnlocked: false, conditions: 3 },
      { image: "/log/character3.svg", isUnlocked: false, conditions: 7 },
    ],
  },
];

const Log: React.FC = () => {
  const { userID } = useContext(Context);
  const navigate = useNavigate();
  const [userData, setUserData] = useState(initData);

  useEffect(() => {
    console.log("ユーザーデータを取得");
    const fetchData = async () => {
      // ログインしていなかったらログイン画面へ
      if (!localStorage.getItem("userID")) {
        navigate("/login");
        return;
      }

      if (userID) {
        // ユーザーデータを取得
        const userDocRef = doc(db, "user", userID);
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists()) {
          const data = userDocSnap.data();
          // 型チェックとデフォルト値を適用
          const formattedData: UserData = {
            selectedCharacter:
              data.selectedCharacter || initData.selectedCharacter,
            bottoleSum: data.bottoleSum || initData.bottoleSum,
            characters: data.characters || initData.characters,
          };
          setUserData(formattedData);
        } else {
          console.log("ユーザーデータが見つかりません");
        }
      }
    };

    fetchData();
  }, []);

  const updatedTitleData = titleData.map((data) => {
    let badges;
    if (data.group == "eco") {
      badges = data.badges.map((badge) => ({
        ...badge,
        isUnlocked: userData.bottoleSum >= badge.conditions,
      }));
    } else if (data.group == "character") {
      badges = data.badges.map((badge) => ({
        ...badge,
        isUnlocked:
          Object.values(userData.characters).filter(
            (character) => character.intimacyLevel >= 1
          ).length >= badge.conditions,
      }));
    } else {
      const totalIntimacyLevel = Object.values(userData.characters).reduce(
        (sum, character) => sum + character.intimacyLevel,
        0
      );
      badges = data.badges.map((badge) => ({
        ...badge,
        isUnlocked: totalIntimacyLevel / 20 >= badge.conditions,
      }));
    }
    return {
      ...data,
      badges,
    };
  });

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.badgesContainer}>
        {updatedTitleData.map((data) => (
          <Kinds indexImage={data.groupIndex.image} titleCards={data.badges} />
        ))}
      </div>
      <Navbar currentPage="log" />
    </div>
  );
};

export default Log;
