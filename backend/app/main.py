import openai
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

import json
import base64
from io import BytesIO
from PIL import Image

from . import config

app = FastAPI()

# CORSの設定
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 必要に応じて許可するオリジンを指定
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 静的ファイルの提供設定
# プロジェクトルートにある'static'ディレクトリを指定
app.mount("/static", StaticFiles(directory="static", html=True), name="static")

@app.post("/posttest")
async def ap():
    try:
        return { "a": "hello"}
    except Exception as e:
        return {"error": str(e)}

# 環境変数が読み込めるかテスト用
@app.get("/envtest")
async def envtest():
    try:
        return { "a": config.ENV_TEST}
    except Exception as e:
        return {"error": str(e)}


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
        # 画像データをデコード
        image_data = base64.b64decode(request.image)
        
        # PILで画像を開く
        image = Image.open(BytesIO(image_data))

        # 画像を圧縮（オプション）
        compressed_image_bytes = compress_image(image)
        compressed_image = Image.open(BytesIO(compressed_image_bytes))

        # 圧縮した画像を再度Base64エンコード
        buffered = BytesIO()
        compressed_image.save(buffered, format="PNG")
        img_str = base64.b64encode(buffered.getvalue()).decode()

        # ジャンルのリストを取得
        genres = '、'.join(config.DRINK_GENRES)
        prompt = config.PROMPT_TEMPLATE.format(genres=genres, image=img_str)

        # OpenAIにプロンプトを送信
        response = openai.chat.completions.create(
            model="gpt-4o",  # 使用するモデルを指定
            messages=[
                {"role": "system", "content": "あなたは画像を解析するAIアシスタントです。"},
                {"role": "user", "content": prompt}
            ],
            temperature=0.5,
        )

        # レスポンスから内容を取得
        response_content = response.choices[0].message.content

        # コードブロックが含まれている場合は削除
        cleaned_response = response_content.strip('```json').strip('```').strip()

        print(f"Cleaned Response content: {cleaned_response}")

        # JSON形式でパース
        if cleaned_response:
            result = json.loads(cleaned_response)
        else:
            return {"error": "OpenAIのレスポンスが空でした"}

        separated = result.get('separated')
        genre = result.get('genre')
        colors = result.get('colors', [])[:2]  # 2色

        return {
            "separated": separated,
            "genre": genre,
            "colors": colors
        }
    except json.JSONDecodeError:
        return {"error": "OpenAIからの応答をJSON形式で解析できませんでした。"}
    except Exception as e:
        return {"error": str(e)}