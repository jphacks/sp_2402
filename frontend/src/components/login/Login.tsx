import { signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { auth, db, provider } from "../../firebase";
import { Context } from "../../providers/Provider";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import LoginBackground from "./LoginBackground";
import LoginFrame from "./LoginFrame";
const styleElement = document.createElement('style');
function generateRandomGradients(count:any) {
  const gradients = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    const size = Math.floor(Math.random() * 5) + 1;
    gradients.push(`radial-gradient(${size}px ${size}px at ${x}% ${y}%, rgba(255, 255, 255, 0.8), transparent)`);
  }
  return gradients.join(',\n');
}

// 生成したランダムなグラデーション、白い枠線、中央の画像をCSSコードに組み込む
styleElement.textContent = `
  .container {
      width: 100%;
      height: 100vh;
      display: block;
      position: fixed;
      top: 0;
      z-index: -1;
      background: 
          ${generateRandomGradients(50)},
          linear-gradient(to bottom, #181E59, #5E85F7); /* グラデーション背景 */
      background-repeat: no-repeat;
      background-size: cover;
      overflow: hidden;
      position: relative;
  }

  /* 内側の白い枠線を生成する::before疑似要素 */
  .container::before {
      content: '';
      position: absolute;
      top: 2%;
      left: 2%;
      width: 96%;
      height: 96%;
      border: 2px solid white;
      box-sizing: border-box;
      pointer-events: none;
      z-index: 1;
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
  }

  /* 背景の1つ上のレイヤーの中央に画像を表示する::after疑似要素 */
  .container::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100px; /* 画像の幅を調整 */
      height: 100px; /* 画像の高さを調整 */
      background-image: url('/path/to/your/image.png'); /* 画像のパスを設定 */
      background-size: contain;
      background-repeat: no-repeat;
      z-index: 2;
  }
`;

// <style>要素を<head>に追加
document.head.appendChild(styleElement);
const Login = () => {
  const { setUserID } = useContext(Context);
  const navigate = useNavigate();

  // Googleでログインする関数
  const loginInWithGoogle = async () => {
    try {
      // Googleのポップアップでサインイン
      await signInWithPopup(auth, provider);
      const user = auth.currentUser;

      if (user) {
        setUserID(user.uid);
        localStorage.setItem("userID", user.uid);

        const userDocRef = doc(db, "user", user.uid);
        const docSnap = await getDoc(userDocRef);

        if (!docSnap.exists()) {
          await setDoc(userDocRef, {
            selectedCharacter: "tea_1",
            bottoleSum: 0,
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
      <LoginBackground />
      <LoginFrame onLogin={loginInWithGoogle} />
    </div>
  );
};

export default Login;
