import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import cameras from "../../css/camera/camera.module.css";
import { useNavigate } from "react-router-dom";
import Popup from "./Popup";
import { characters } from "../../data/storyData";

interface ScenarioState {
  character: string;
}

const Camera = () => {
  const webcamRef = useRef<Webcam>(null);
  const [image, setImage] = useState<string | null>(null);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const closePopup = () => {
    setError(false);
    setImage(null);
  };

  // 画像をキャプチャする関数
  const capture = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setImage(imageSrc);
    }
  };

  // 圧縮された画像を作成する関数
  const compressImage = (
    base64Image: string,
    quality: number
  ): Promise<string> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = base64Image;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (ctx) {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
          const compressedImage = canvas.toDataURL("image/jpeg", quality); // qualityを指定
          resolve(compressedImage);
        }
      };
    });
  };

  const convertColors = (colors: string[]) => {
    return colors.map((color) => {
      // 色コードが「#RRGGBB」の形式であることを想定
      if (color.length === 7) {
        return `#${color[1]}${color[3]}${color[5]}`; // #F53 と #C03 に変換
      }
      return color; // もし短縮形にできない場合はそのまま返す
    });
  };

  // APIに画像を送信する関数
  const sendImageToAPI = async () => {
    if (!image) return;

    const compressedImage = await compressImage(image, 0.7); // 圧縮率を指定
    console.log(compressedImage.split(",")[1]); // 圧縮後の画像をログに表示

    try {
      const response = await fetch("http://localhost:8000/process_image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: compressedImage.split(",")[1] }), // 送信するデータ
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
      if (data.separated) {
        // setResult(
        //   `ラベルが分離されています。ジャンル: ${
        //     data.genre
        //   }、イメージカラー: ${data.colors.join(", ")}`
        // );
        let character = "tea_1";
        if (data.genre == "水") character = "water";
        else if (data.genre == "お茶") character = "tea_1";
        else if (data.genre == "紅茶") character = "tea_2";
        else if (data.genre == "コーヒー") character = "coffee";
        else if (data.genre == "ジュース") character = "juice";
        else if (data.genre == "スポーツドリンク") character = "sportsDrinks";
        else character == "probioticDrinks";

        const convertedColors = convertColors(data.colors);
        navigate("/scenario", {
          state: { character, colors: convertedColors },
        });
      } else {
        setError(true);
      }
    } catch (error) {
      console.error("エラー:", error);
    }
  };

  return (
    <>
      {image ? (
        <>
          <div className={cameras.header}>
            <div className={cameras.backButton} onClick={() => setImage(null)}>
              <img src="/utils/Icon/back.svg" alt="戻る" />
            </div>
          </div>
          <div className={cameras.content}>
            <img src={image} alt="撮影写真" />
            <div className={cameras.messageWrapper}>
              <div>
                <img src="/utils/Icon/check.svg" alt="チェック" />
                <p>ラベルはペットボトルからはがしてあるかな？</p>
              </div>
              <div>
                <img src="/utils/Icon/check.svg" alt="チェック" />
                <p>
                  ラベリィを召喚したあとはラベルとキャップを分別してからペットボトルを捨てよう…！
                </p>
              </div>
            </div>
          </div>
          <img
            src="/camera/Camera/summonButton.svg"
            alt="召喚する"
            onClick={sendImageToAPI}
            className={cameras.summonButton}
          />
        </>
      ) : (
        <>
          <div className={cameras.header}>
            <div className={cameras.backButton} onClick={() => navigate("/")}>
              <img src="/utils/Icon/back.svg" alt="戻る" />
            </div>
          </div>
          <Webcam
            className={cameras.camera}
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={{
              width: 390,
              height: 474,
              facingMode: "user",
            }}
          />
          <div className={cameras.message}>
            <p>ラベルをペットボトルからはがして、写真を撮ろう！</p>
          </div>
          <img
            className={cameras.button}
            src="/camera/Camera/cameraButton.svg"
            alt="撮影"
            onClick={capture}
          />
        </>
      )}
      {error && <Popup closePopup={closePopup} />}
    </>
  );
};

export default Camera;
