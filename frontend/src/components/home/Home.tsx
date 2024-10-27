import { useContext, useEffect, useState } from "react";
import Navbar from "../utils/Navbar";
import homes from "../../css/home/home.module.css";
import SummonButton from "./SummonButton";
import Intimacy from "./Intimacy";
import Plasticbottles from "./PlasticBottle";
import { characters, initData, UserData } from "../../data/storyData";
import ViewCoffee from "../utils/ViewCoffee";
import ViewTea_1 from "../utils/ViewTea_1";
import { Context } from "../../providers/Provider";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

const Home = () => {
  const { userID } = useContext(Context);
  const navigate = useNavigate();
  let characterComponent;
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

  switch (userData.selectedCharacter) {
    case "tea_1":
      characterComponent = <ViewTea_1 enviroment="park" />;
      break;
    case "coffee":
      characterComponent = <ViewCoffee enviroment="apartment" />;
      break;
    default:
      characterComponent = <div>キャラクターが選択されていません。</div>;
      break;
  }

  return (
    <>
      <Intimacy
        name={characters[userData.selectedCharacter].name}
        intimacyLevel={
          userData.characters[userData.selectedCharacter].intimacyLevel
        }
      />
      <Plasticbottles number={userData.bottoleSum} />
      <SummonButton />
      <div className={homes.container}>
        {characterComponent}
        <Navbar currentPage="home" />
      </div>
    </>
  );
};

export default Home;
