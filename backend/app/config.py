# app/config.py

import os

# 環境変数の取得
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
ENV_TEST = os.getenv("ENV_TEST")

DRINK_GENRES = [
    "水",
    "お茶",
    "紅茶",
    "コーヒー",
    "ジュース",
    "スポーツドリンク",
    "乳酸菌飲料",
]

PROMPT_TEMPLATE = """
これはペットボトルに巻かれたラベル、または剝がされた状態のラベルが含まれる画像です: {image}

これについて、次の3つの情報をJSON形式のみで回答してください。
- ラベルがペットボトルから剥がされているかいないか
  - 剥がされて、広げられているときはtrueを返す
    - あるいはボトルが写っておらず、ラベルのみ写っているとき
  - 剥がされていないときはfalseを返す
- 飲み物のジャンル
  - 以下のリストから選び、回答
- ラベルに使用されているイメージカラー2つ
  - ラベル全体で支配的な2色を抽出し、カラーを回答

飲み物のジャンルのリスト: {genres}

回答形式の例:
{{
  "separated": true/false,
  "genre": "genre",
  "colors": ["#RRGGBB", "#RRGGBB"]
}}
"""

def format_prompt(image_data: str):
    genres_list = "\n".join([f"{i+1}. {genre}" for i, genre in enumerate(DRINK_GENRES)])
    return PROMPT_TEMPLATE.format(image=image_data, genres=genres_list)