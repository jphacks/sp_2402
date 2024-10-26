import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import homes from "../../css/home/home.module.css";
import Message from "./Message";
import { dummyUser, tea_1Story} from "../../data/storyData";
import FinishPopup from "./FinishPopup";
import ViewCoffee from "../utils/ViewCoffee";
import ViewTea_1 from "../utils/ViewTea_1";

const Scenario = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [messageIndex, setMessageIndex] = useState(1);
  const [isFinished, setIsFinished] = useState(false);
  const intimacyLevel = dummyUser.characters[location.state.character].intimacyLevel;
  const index =  intimacyLevel / 20;
  const story = dummyUser.characters[location.state.character].scenario[index];
  const title = story.title;
  const dialogues = story.dialogues;
  const enviroment = story.enviroment;
  

  let characterComponent;

  switch (location.state.character) {
    case "tea_1":
      // characterComponent = <ViewTea_1 enviroment="park" />;
      characterComponent = <ViewTea_1 enviroment={enviroment} />;
      break;
    case "coffee":
      characterComponent = <ViewCoffee enviroment={enviroment} />;
      break;
    default:
      characterComponent = <div>キャラクターが選択されていません。</div>;
      break;
  }

  const next = () => {
    if (messageIndex != dialogues.length)
      setMessageIndex(messageIndex + 1);
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
      {isFinished && (
        <FinishPopup
          index={index+1}
          title={title}
          intimacyLevel={intimacyLevel+20}
        />
      )}
      <div className={homes.container}>
        {characterComponent}
        <Header index={index+1} title={title} />
        <Message
          next={next}
          name={dialogues[messageIndex - 1].speaker}
          message={
            dialogues[messageIndex - 1]
              .text
          }
        />
      </div>
    </>
  );
};

export default Scenario;
