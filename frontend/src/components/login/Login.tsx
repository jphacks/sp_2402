import { signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { auth, db, provider } from "../../firebase";
import { Context } from "../../providers/Provider";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setUserID } = useContext(Context);
  const navigate = useNavigate();

  const loginInWithGoogle = async () => {
    signInWithPopup(auth, provider);
    const user = auth.currentUser;

    // グローバル変数を変更
    if (user) {
      setUserID(user.uid);
      localStorage.setItem("userID", user.uid);

      const userDocRef = doc(db, "user", user.uid);
      const docSnap = await getDoc(userDocRef);
      if (!docSnap.exists()) {
        await setDoc(doc(db, "user", user.uid), {
          selectedCharacter: "tea_1",
          bottoleSum: 0,
          characters:{
            tea_1: {
              intimacyLevel: 0,
            },
            water: {
              intimacyLevel: 0,
            },
            tea_2: {
              intimacyLevel: 0,
            },
            coffee: {
              intimacyLevel: 0,
            },
            juice: {
              intimacyLevel: 0,
            },
            sportsDrinks: {
              intimacyLevel: 0,
            },
            probioticDrinks: {
              intimacyLevel: 0,
            },
          }
        });
        navigate("/");
      } else {
        navigate("/");
      }
    }
  };

  return (
    <div>
      <button onClick={loginInWithGoogle}>Googleアカウントでログイン</button>
    </div>
  );
};

export default Login;
