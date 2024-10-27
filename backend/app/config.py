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
これはラベルが巻かれたペットボトル、または剝がされて指でつままれた状態のラベルの画像です

これについて、次の3つの情報をJSON形式のみで回答してください。
- ラベルがペットボトルから剥がされているかいないか
  - 剥がされて、指でつまんで広げられているときはtrueを返す
  - 剥がされておらず、ペットボトルに巻き付いているときはfalseを返す
- 飲み物のジャンル
  - 以下のリストから選び、回答
- ラベルに使用されているイメージカラー2つ
  - ラベル全体で支配的な2色を抽出し、カラーを回答
  - 色は必ずラベルの中から選ぶこと

飲み物のジャンルのリスト: {genres}

回答形式の例:
{{
  "separated": true/false,
  "genre": "genre",
  "colors": ["#RRGGBB", "#RRGGBB"]
}}
"""
