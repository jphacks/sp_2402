import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import homes from "../../css/home/home.module.css";
import Message from "./Message";
import { dummyUser, tea_1Story} from "../../data/storyData";
import FinishPopup from "./FinishPopup";

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
        <img src="/dev/summon.png" alt="" />
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
