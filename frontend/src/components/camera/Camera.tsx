import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const Camera = () => {
  const webcamRef = useRef<Webcam>(null);
  const [image, setImage] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);

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
        setResult(
          `ラベルが分離されています。ジャンル: ${
            data.genre
          }、イメージカラー: ${data.colors.join(", ")}`
        );
      } else {
        setResult("ラベルが分離されていません。");
      }
    } catch (error) {
      console.error("エラー:", error);
      setResult("エラーが発生しました。");
    }
  };

  return (
    <>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={{
          width: 390,
          height: 474,
          facingMode: "user",
        }}
      />
      <button onClick={capture}>Capture Photo</button>
      {image && (
        <>
          <img src={image} alt="Captured" width={200} />
          <button onClick={sendImageToAPI}>Send to API</button>
        </>
      )}
      {result && <p>{result}</p>}
    </>
  );
};

export default Camera;
