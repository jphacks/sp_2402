import openai
from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi import FastAPI, Request
from pydantic import BaseModel

import json
import base64
from io import BytesIO
from PIL import Image

import config

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/static", StaticFiles(directory="C:/Users/Raven/Desktop/JPFUCKS2024", html=True), name="static")

# OpenAI APIキーを config から取得
openai.api_key = config.OPENAI_API_KEY

# リクエストボディのモデル
class ImageRequest(BaseModel):
    image: str  # base64形式の画像データ


# 画像を圧縮
def compress_image(image: Image) -> bytes:
    max_size = (500, 500)
    image.thumbnail(max_size)
    buffered = BytesIO()
    image.save(buffered, format="PNG")
    return buffered.getvalue()

@app.post("/process_image")
async def process_image(request: ImageRequest):
    try:
        image_data = base64.b64decode(request.image)
        
        # 画像をPILで処理
        image = Image.open(BytesIO(image_data))

        # base64エンコード
        buffered = BytesIO()
        image.save(buffered, format="PNG")
        img_str = base64.b64encode(buffered.getvalue()).decode()

        # ジャンルのリストを取得
        genres = '、'.join(config.DRINK_GENRES)
        prompt = config.PROMPT_TEMPLATE.format(genres=genres, image=img_str)

        # OpenAIに画像を送信
        response = openai.chat.completions.create(
            model="gpt-4o",
            messages=[
                {"role": "system", "content": "あなたは画像を解析するAIアシスタントです。"},
                {"role": "user", "content": prompt}
            ]
        )

        # コードブロックを取り除く
        response_content = response.choices[0].message.content
        cleaned_response = response_content.strip('```json').strip('```').strip()

        print(f"Cleaned Response content: {cleaned_response}")

        # JSONパース
        if cleaned_response:
            result = json.loads(cleaned_response)
        else:
            return {"error": "OpenAIのレスポンスが空でした"}

        separated = result['separated']
        genre = result['genre']
        colors = result['colors'][:2]  # 2色

        return {
            "separated": separated,
            "genre": genre,
            "colors": colors
        }
    except Exception as e:
        return {"error": str(e)}

@app.get("/", response_class=HTMLResponse)
async def index():
    html_content = """
    <!DOCTYPE html>
    <html lang="ja">
    <head>
        <meta charset="UTF-8">
        <title>ペットボトルラベル分別</title>
    </head>
    <body>
        <h1>ペットボトルラベル分別アプリ</h1>
        <video id="video" width="400" height="300" autoplay></video>
        <button id="snap">写真を撮る</button>
        <canvas id="canvas" width="400" height="300" style="display:none;"></canvas>
        <div id="result"></div>
    
        <script>
            const video = document.getElementById('video');
            const canvas = document.getElementById('canvas');
            const snap = document.getElementById('snap');
            const result = document.getElementById('result');
    
            // カメラを起動
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(stream => {
                    video.srcObject = stream;
                })
                .catch(err => {
                    console.error("カメラの起動に失敗しました: ", err);
                });
    
            snap.addEventListener('click', () => {
                // カメラから画像をキャプチャ
                const context = canvas.getContext('2d');
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
    
                // canvasからJPEG形式で圧縮し，Base64エンコード
                canvas.toBlob((blob) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(blob);
                    reader.onloadend = () => {
                        const base64Image = reader.result.split(',')[1];
    
                        // BEに送信
                        fetch('/process_image', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ image: base64Image }),
                        })
                        .then(response => {
                            if (!response.ok) {
                                throw new Error(`HTTP error! status: ${response.status}`);
                            }
                            return response.json();
                        })
                        .then(data => {
                            // JSON結果を出力
                            result.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
                        })
                        .catch(error => {
                            console.error('エラー:', error);
                            result.innerHTML = `<p>エラーが発生しました: ${error.message}</p>`;
                        });
                    };
                }, 'image/jpeg', 0.5); // 圧縮率0.5
            });
        </script>
    </body>
    </html>
    """
    return HTMLResponse(content=html_content)
