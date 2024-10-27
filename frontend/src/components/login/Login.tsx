import { signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { auth, db, provider } from "../../firebase";
import { Context } from "../../providers/Provider";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import LoginBackground from "./LoginBackground";
import LoginFrame from "./LoginFrame";
import styles from "../../css/login/Login.module.css";

const Login = () => {
  const { setUserID } = useContext(Context);
  const navigate = useNavigate();

  // Googleでログインする関数
  const loginInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      if (user) {
        setUserID(user.uid);
        localStorage.setItem("userID", user.uid);

        const userDocRef = doc(db, "user", user.uid);
        const docSnap = await getDoc(userDocRef);

        if (!docSnap.exists()) {
          await setDoc(userDocRef, {
            selectedCharacter: "tea_1",
            bottleSum: 0,
            characters: {
              tea_1: { intimacyLevel: 0 },
              water: { intimacyLevel: 0 },
              tea_2: { intimacyLevel: 0 },
              coffee: { intimacyLevel: 0 },
              juice: { intimacyLevel: 0 },
              sportsDrinks: { intimacyLevel: 0 },
              probioticDrinks: { intimacyLevel: 0 },
            },
          });
        }
        navigate("/");
      }
    } catch (error) {
      console.error("Login error: ", error);
    }
  };

  return (
    <div className="container">
      <div className={styles.label}>
        <h1>Labely</h1>
        {/* <p>ラベル×妖精</p> */}
      </div>
      <LoginBackground />
      <LoginFrame onLogin={loginInWithGoogle} />
    </div>
  );
};

export default Login;
