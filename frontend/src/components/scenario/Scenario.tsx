import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import homes from "../../css/home/home.module.css";
import Message from "./Message";
import { dummyStory } from "../../data/storyData";
import FinishPopup from "./FinishPopup";

const Scenario = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [messageIndex, setMessageIndex] = useState(1);
  const [name, setName] = useState("");
  const [isFinished, setIsFinished] = useState(false);

  const next = () => {
    if (messageIndex != dummyStory[location.state.index - 1].dialogues.length)
      setMessageIndex(messageIndex + 1);
    else setIsFinished(true);
  };

  // 読み込み時に実行
  useEffect(() => {
    if (!location.state?.character) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if (
      dummyStory[location.state.index - 1].dialogues[messageIndex - 1]
        .speaker == "主人公"
    ) {
      setName("あなた");
    } else if (
      dummyStory[location.state.index - 1].dialogues[messageIndex - 1]
        .speaker == "キャラ"
    ) {
      setName("茶々");
    }
  }, [messageIndex]);

  return (
    <>
      {isFinished && (
        <FinishPopup
          index={location.state.index}
          title={dummyStory[location.state.index - 1].title}
          intimacyLevel={20}
        />
      )}
      <div className={homes.container}>
        <img src="/dev/summon.png" alt="" />
        <Header index={location.state.index} title={"初めての出会い"} />
        <Message
          next={next}
          name={name}
          message={
            dummyStory[location.state.index - 1].dialogues[messageIndex - 1]
              .text
          }
        />
      </div>
    </>
  );
};

export default Scenario;
