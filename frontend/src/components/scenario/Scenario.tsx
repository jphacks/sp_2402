import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import homes from "../../css/home/home.module.css";
import Message from "./Message";
import FinishPopup from "./FinishPopup";
import ViewCoffee from "../utils/ViewCoffee";
import ViewTea_1 from "../utils/ViewTea_1";
import { Context } from "../../providers/Provider";
import { characters, initData, UserData } from "../../data/storyData";
import { doc, getDoc, increment, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

const Scenario = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [messageIndex, setMessageIndex] = useState(1);
  const [isFinished, setIsFinished] = useState(false);
  const [intimacyLevel, setIntimacyLevel] = useState(0);
  let index = 4;
  if (intimacyLevel < 100) {
    index = intimacyLevel / 20;
  }
  const story = characters[location.state.character].scenario[index];
  const title = story.title;
  const dialogues = story.dialogues;
  const enviroment = story.enviroment;
  const { userID } = useContext(Context);

  useEffect(() => {
    console.log("ユーザーデータを取得");
    console.log(location.state.colors)
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
          setIntimacyLevel(
            data.characters[location.state.character].intimacyLevel
          );

          updateDoc(userDocRef, {
            [`characters.${location.state.character}.intimacyLevel`]:
              data.characters[location.state.character].intimacyLevel + 20,
            bottleSum: increment(1),
          });
        } else {
          console.log("ユーザーデータが見つかりません");
        }
      }
    };

    fetchData();
  }, []);

  let characterComponent;

  switch (location.state.character) {
    case "tea_1":
      // characterComponent = <ViewTea_1 enviroment="park" />;
      characterComponent = <ViewTea_1 enviroment={enviroment} colors={location.state.colors}/>;
      break;
    case "coffee":
      characterComponent = <ViewCoffee enviroment={enviroment} />;
      break;
    default:
      characterComponent = <div>キャラクターが選択されていません。</div>;
      break;
  }

  const next = () => {
    if (messageIndex != dialogues.length) setMessageIndex(messageIndex + 1);
    else setIsFinished(true);
  };

  // 読み込み時に実行
  useEffect(() => {
    if (!location.state?.character) {
      navigate("/");
    }
  }, []);

  return (
    <>
      {intimacyLevel >= 100 && (
        <FinishPopup index={index + 1} title={title} intimacyLevel={100} />
      )}
      {isFinished && (
        <FinishPopup
          index={index + 1}
          title={title}
          intimacyLevel={intimacyLevel + 20}
        />
      )}
      <div className={homes.container}>
        {characterComponent}
        <Header index={index + 1} title={title} />
        <Message
          next={next}
          name={dialogues[messageIndex - 1].speaker}
          message={dialogues[messageIndex - 1].text}
        />
      </div>
    </>
  );
};

export default Scenario;
