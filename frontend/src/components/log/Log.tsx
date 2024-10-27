import { useContext, useEffect, useState } from "react";
import Navbar from "../utils/Navbar";
import styles from "../../css/log/Log.module.css"; // Log.module.css を正しいパスでインポート
import Header from "./Header";
import homes from "../../css/home/home.module.css"; // home.module.css をインポート
import LogBackground from "./LogBackground";
import { Context } from "../../providers/Provider";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

const titlesDataInitial = {
  title1: { image: "/log/eco1.svg", isUnlocked: true },
  title2: { image: "/log/eco2.svg", isUnlocked: true },
  title3: { image: "/log/eco3.svg", isUnlocked: true },
  title4: { image: "/log/story1.svg", isUnlocked: true },
  title5: { image: "/log/story2.svg", isUnlocked: true },
  title6: { image: "/log/story3.svg", isUnlocked: true },
  title7: { image: "/log/character1.svg", isUnlocked: true },
  title8: { image: "/log/character2.svg", isUnlocked: true },
  title9: { image: "/log/character3.svg", isUnlocked: false },
};

const Log = () => {
  const { userID } = useContext(Context);
  const [titlesData, setTitlesData] = useState(titlesDataInitial);
  const navigate = useNavigate();

  useEffect(() => {
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
          if (data.titles) {
            setTitlesData(data.titles);
          }
        } else {
          console.log("ユーザーデータが見つかりません");
        }
      }
    };

    fetchData();
  }, [userID, navigate]);
  return (
    <div className={homes.container}> {/* homes.container を使用 */}
      <Header />
      <div className={styles.viewer}>
        {Object.keys(titlesData).map((titleKey) => {
          const title = titlesData[titleKey];
          return (
            <img
              key={titleKey}
              src={title.isUnlocked ? title.image : "/log/lock_title.svg"}
              alt={titleKey}
              className={styles.titleImage}
            />
          );
        })}
      </div>
      <LogBackground /> {/* 背景コンポーネントを追加 */}
      <Navbar currentPage="log" />
    </div>
  );
  
};

export default Log;