# Dockerfile

# ベースイメージとしてPython 3.9を使用
FROM python:3.9-slim

# 環境変数の設定
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# 作業ディレクトリの作成
WORKDIR /code

# システムの依存関係をインストール
RUN apt-get update && apt-get install -y build-essential libpq-dev && rm -rf /var/lib/apt/lists/*

# Pythonの依存関係をコピー
COPY requirements.txt .

# 依存関係のインストール
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# アプリケーションコードをコピー
COPY ./app /code/app
COPY ./alembic /code/alembic
COPY ./alembic.ini /code/alembic.ini
COPY ./static /code/static

# ポート8000を開放
EXPOSE 8000

# アプリケーションの起動コマンド
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
