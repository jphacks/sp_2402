import { useContext, useEffect, useState } from "react";
import Navbar from "../utils/Navbar";
import homes from "../../css/home/home.module.css";
import CharacterCard from "./CharacterCard";
import Header from "./Header";
import Lock from "./Lock";
import { characterData, characters } from "../../data/storyData";
import styles from "../../css/labely/Labely.module.css";
import LabelBackground from "./LabelyBackground";
import { Context } from "../../providers/Provider";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

const Labely = () => {
  const { userID } = useContext(Context);
  const [character, setCharacter] = useState(characterData);
  const navigate = useNavigate();

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
          setCharacter(data.characters);
          console.log(data.characters);
        } else {
          console.log("ユーザーデータが見つかりません");
        }
      }
    };

    fetchData();
  }, []);

  return (
    <div className={homes.container}>
      <Header />
      <div className={styles.viewer}>
        {Object.keys(characters).map((genre) => {
          const drink = characters[genre];
          const intimacyLevel = character[genre]?.intimacyLevel ?? 0;
          return (
            <>
              {intimacyLevel == 0 ? (
                <Lock key={genre} />
              ) : (
                <CharacterCard
                  key={genre}
                  CharacterCardLevel={intimacyLevel}
                  CharacterCardname={drink.name}
                  CharacterCardType={genre}
                  isSelected={drink.isSelected}
                />
              )}
            </>
          );
        })}
      </div>
      <LabelBackground />
      <Navbar currentPage="labely" />
    </div>
  );
};

export default Labely;
