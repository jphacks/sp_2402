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

const dummyData = [
  {
    groupIndex: { image: "/log/eco.svg" },
    badges: [
      { image: "/log/eco1.svg", isUnlocked: true },
      { image: "/log/eco2.svg", isUnlocked: false },
      { image: "/log/eco3.svg", isUnlocked: false }
    ]
  },{
    groupIndex: { image: "/log/story.svg" },
    badges: [
      { image: "/log/story1.svg", isUnlocked: true },
      { image: "/log/story2.svg", isUnlocked: true },
      { image: "/log/story3.svg", isUnlocked: false },
    ]
  },{
    groupIndex: { image: "/log/character.svg" },
    badges: [
      { image: "/log/character1.svg", isUnlocked: true },
      { image: "/log/character2.svg", isUnlocked: false },
      { image: "/log/character3.svg", isUnlocked: false },
    ]
  }
];

const Log: React.FC = () => {
  const { userID } = useContext(Context);
  const navigate = useNavigate();
  // const [setUserData] = useState(initData);
  const [isUnlocked, setIsUnlocked] = useState(false);

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
          // const formattedData: UserData = {
          //   selectedCharacter:
          //     data.selectedCharacter || initData.selectedCharacter,
          //   bottoleSum: data.bottoleSum || initData.bottoleSum,
          //   characters: data.characters || initData.characters,
          // };
          // setUserData(formattedData);

          if (data.bottoleSum >= 10) {
            setIsUnlocked(true);
          }
        } else {
          console.log("ユーザーデータが見つかりません");
        }
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.badgesContainer}>
        {dummyData.map((data) => <Kinds indexImage={data.groupIndex.image} titleCards={data.badges} /> )}
      </div>
      {/* <div className={styles.viewer}>
        {dummyData.map((data, index) =>
          index === 1 ? (
            <TitlesCard
              key={index}
              image={data.image}
              isUnlocked={isUnlocked}
            />
          ) : (
            <TitlesCard
              key={index}
              image={data.image}
              isUnlocked={data.isUnlocked}
            />
          )
        )}
      </div> */}
      <Navbar currentPage="log" />
    </div>
  );
};

export default Log;
