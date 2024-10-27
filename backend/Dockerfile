# Dockerfile

# ベースイメージとしてPython 3.12を使用
FROM python:3.12-slim

# 環境変数の設定
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# 作業ディレクトリの作成
WORKDIR /code

# パッケージを最新に
RUN apt-get update && apt-get upgrade -y

# Pythonの依存関係をコピー
COPY requirements.txt .

# 依存関係のインストール
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# ポート8000を開放
EXPOSE 8000
