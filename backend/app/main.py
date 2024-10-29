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
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 静的ファイルの提供設定
app.mount("/static", StaticFiles(directory="static", html=True), name="static")

@app.post("/posttest")
async def ap():
    try:
        return { "a": "hello"}
    except Exception as e:
        return {"error": str(e)}

# 環境変数が読み込めるかテスト
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
    max_size = (512, 512)
    image.thumbnail(max_size)
    
    # 画像がRGBAモードの場合、RGBに変換
    if image.mode == 'RGBA':
        image = image.convert('RGB')
        
    buffered = BytesIO()
    image.save(buffered, format='JPEG', quality=85, optimize=True, progressive=True)
    return buffered.getvalue()

@app.post("/process_image")
async def process_image(request: ImageRequest):
    try:
        # 画像データをデコード
        image_data = base64.b64decode(request.image)
        
        # PILで画像を開く
        image = Image.open(BytesIO(image_data))

        # 画像を圧縮
        compressed_image_bytes = compress_image(image)

        # 圧縮した画像をBase64エンコード
        img_str = base64.b64encode(compressed_image_bytes).decode()

        # ジャンルのリストを取得
        genres = '、'.join(config.DRINK_GENRES)
        prompt = config.PROMPT_TEMPLATE.format(genres=genres)

        # OpenAIにプロンプトを送信
        response = openai.chat.completions.create(
            model="gpt-4o",
            messages=[
                {
                    "role": "system", "content": "あなたは画像を解析するAIアシスタントです。"
                },
                {
                    "role": "user", "content": [
                        {"type": "text", "text": prompt},
                        {
                            "type": "image_url",
                            "image_url": {
                                "url":  f"data:image/jpeg;base64,{img_str}",
                                "detail": "auto"
                            }
                        }
                    ]
                }
            ],
            temperature=0.4,
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
