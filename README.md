# ラベル×妖精「Labely」
![](https://github.com/jphacks/sp_2402/blob/main/assets/image/header_1.jpg)

## 製品概要
キャラクターとの親密度を上げていくことを通して、ペットボトルのラベルとキャップの分別を促進するアプリ。

### 背景（製品開発のきっかけ、課題等）
#### きっかけ
私たちの所属しているサークルの部室では、ほとんどのペットボトルがラベルやキャップを付けたまま捨てられています。１人のチームメンバーがその是非を問い声を上げたところ、ラベルは剥がすものだと思っているメンバーとラベルは剥がさずに捨てて良いと思っているメンバーがおり、チーム内でも意識の差があることが明らかになりました。
#### 課題(札幌市におけるペットボトルの分別状況)
札幌市では、ラベルやキャップはペットボトルから外して容器包装プラスチックに出すことが推奨されています。
> ペットボトルのラベルは、はがして「容器包装プラスチック」へ出してください。
プラスチック製のふたははずして「容器包装プラスチック」、アルミボトルのふたははずして「びん・缶・ペットボトル」、これ以外のふたは「燃やせないごみ」（有料）となります。

[びん・缶・ペットボトル - 札幌市](https://www.city.sapporo.jp/seiso/gomi/bin_kan_pet.html#:~:text=%E3%83%9A%E3%83%83%E3%83%88%E3%83%9C%E3%83%88%E3%83%AB%E3%81%AE%E3%83%A9%E3%83%99%E3%83%AB%E3%81%AF,%E3%80%8D%EF%BC%88%E6%9C%89%E6%96%99%EF%BC%89%E3%81%A8%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82)

また、中沼資源選別センターでは回収されたペットボトルの内、約4割がキャップがついたままであり、手作業により取り外されているという状況です。
> アルミ選別機を通った後はペットボトルを⼿選別します。各ラインに付つき5名の作業員が、リサイクルが可能なペットボトルをシュートへ投⼊します。その数量は中沼資源選別センター全体で1⽇に70万個こにもなります。そのうち、約4割のキャップが付いたままで、取外す作業が⼤きな負担になっています

[資源選別センターWeb工場見学へGO！](https://www.kankyou-sapporo.jp/factory)

そこで私たちは、ペットボトルのラベルとキャップの分別を促進するアプリを開発し、ゴミ処理コストを削減することで社会貢献できるのではないかと考えました。
 
### 製品説明（具体的な製品の説明）
ラベルを剥がし、その写真を撮ることによって物語が進みます。ペットボトルからラベルを剥がして写真を撮影すると、その飲み物をテーマにした可愛らしい妖精、ラベリィがラベルの色に応じて特定の場所の色が変わり召喚され、シナリオを進めることによりラベリィとの親密度を上げることができます。また、これまでに分別したラベルの量やシナリオの進行度を保存することができ、それが称号という形で可視化されるためにラベルを剥がすという行為で楽しみと達成感を得ることができます。
- [デモ動画](https://drive.google.com/file/d/15mBVd_NR1nkh5yrBQFNBsayqJPf_ti-e/view?usp=drive_link)
- [アプリ](https://labely-a49fe.web.app/)
※APIの利用制限があるため、画像認識APIが組み込まれていません。撮影した写真によらず、「コーヒー」のキャラクターが現れます。シナリオやUIをご確認ください。(デプロイはしておりませんが、フロントエンドと画像認識APIのつなぎこみは動作確認済です)

### 特長
#### 1. ゲーミフィケーションにより日常の小さなエコ行動を促進し、環境意識を高める仕組み
分別やリサイクルは「面倒」と感じられがちですが、本アプリではラベル分別がアプリ内でのキャラクター召喚やシナリオの解放、称号の獲得と結びつくことで、楽しみながら環境への貢献を実感できます。ゲーミフィケーションの要素を取り入れて、環境教育やSDGsという真面目な課題により取り組みやすくし、ユーザーの分別行動を習慣化させることを目指しています。

#### 2. 3Dモデルとカメラ機能による直感的で楽しいインタラクション
3Dモデルの妖精「ラベリィ」が、ペットボトルから取り外したラベルをカメラで撮影することで召喚され、個性豊かに登場します。愛らしいキャラクター達が、リサイクル行動に楽しさと達成感をプラスし、ラベル分別を自然と日常化させます。

#### 3. OpenAIを活用したラベル認識
最新のAI技術であるOpenAIのAPIを活用し、ラベル認識と分別判定、色抽出を実現しています。ユーザーがラベルを撮影するとAIがラベルの色を抽出し、その色が反映したキャラクターが召喚されます。これにより、ユーザーは飽きずにラベル撮影・キャラクター召喚を楽しむことができ、リサイクル行動への意欲も高まります。

### 解決できること
- **楽しくリサイクル意識を高める**  
SDGsの目標である12番「つくる責任 つかう責任」や14番「海の豊かさを守ろう」に向けて、このアプリはユーザーが楽しみながらリサイクルに参加できる仕組みを提供します。キャラクターの召喚やシナリオの解放といったゲーム要素で、リサイクルや分別行動が自然と習慣になります。これで、持続可能な社会への一歩を踏み出せます。
- **ゴミ処理コストの削減に貢献**  
正しい分別がされていないと、自治体のゴミ処理コストが増えてしまい、結果的に税金が多く使われることにあります。Labelyを使うことで、適切な分別が進み、ゴミ処理の手間が減少。これにより、税金の無駄遣いを減らし、財政負担の軽減につながります。  
- **楽しく学べるエコ教育**
環境保護の意識を高めるには、エコ教育がとても大切だと思います。このアプリでは、カメラを使って妖精と触れ合うことで、子どもから大人まで楽しみながらリサイクルの習慣を身につけられます。楽しみながら学べるので、将来にわたって環境への関心が高まります。

### 今後の展望
- **企業や自治体との提携**
企業や自治体と提携してユーザーへの報酬を強化することで、利用者数の増加が見込まれます。例えば、分別したラベルの数に応じてポイントを付与し、提携企業との商品やサービスと交換できる仕組みが考えられます。本アプリでは環境問題へのアプローチを行っているため、提携することで企業や自治体へもメリットを提供できると考えています。
- **SNSを活用したコミュニティ機能**  
分別した数やシナリオの開放状況、その日に出てきたラベリィの画像をSNSで共有する機能を実装することで、ユーザー間の話題性やモチベーションなどを生み出すことができると考えられます。
- **データベース設計の見直しや再実装**  
本来は[後述](###独自技術)で紹介する技術を実装する予定でしたが、バックエンド担当者の体調不良によりFirebaseでの実装に切り替えています。データベース設計の見直しや再実装を行うことで、バックエンドの構築作業を最小限にしつつ、必要なデータを効率よく管理できるようになります。
- **画像認識機能の検証**  
画像認識機能の検証を行うことで、ラベルの分別判定や色抽出の精度を高めることができると考えられます。
- **ゲーミフィケーションの向上**
現在は単にシナリオを読む形のノベルゲームですが、分岐を作ったり過去の選択を保存して後のシナリオにも反映したり(たとえばあいさつを選択するなど)することで、ユーザーの体験を向上させることができると考えられます。
- **3Dモデルやシナリオの追加**
画像認識では、飲み物を7ジャンルに分類しているのですが、現在「お茶」と「コーヒー」に対応する3Dモデル・シナリオのみ実装済です。その他の5ジャンルに対応する3Dモデルやシナリオを追加予定です。

### 注力したこと（こだわり等）
- 直感的で洗練されたUIデザインの追求
- ユーザーが親しみを持てる可愛らしい3Dモデルの作成

## 開発技術
### 活用した技術

#### API・データ
- OpenAI gpt-4o Tier 3

#### フレームワーク・ライブラリ・モジュール
- **フレームワーク**
  - React
  - fastAPI
  - Firebase

- **ライブラリ**
  - **プログラミング言語関連**
    - Python
    - TypeScript
  - **ビルドツール**
    - Vite
  - **3D関連**
    - Three.js (`three`)
    - react-three/fiber
    - react-three/drei
    - gltfjsx
  - **AI関連**
    - OpenAI
  - **開発環境・サーバー**
    - Docker
    - Uvicorn
  - **3Dモデリングツール**
    - Blender

- **モジュール**
  - HTML
  - CSS Modules
  - Figma

### デバイス
- Android
- IOS

### 独自技術

#### ハッカソンで開発した独自機能・技術
##### 実装済
- **画像認識API**
OpenAI gpt-4o Tier 3を用いて、ラベル写真からラベルが剥がれているか判定し、ジャンルの分類と色の抽出を行います。
- **3Dモデルの色変更**
gltfjsxを使用し、モデルの特定のメッシュの色を変更します。「お茶」に対応するモデルにのみ実装済。

##### 未実装
- データベース設計と最適化構想  
PostgreSQLを利用し、効率的なデータ取得やデータ管理を重視したテーブル設計を進め、特にクエリ最適化やインデックス設計に力を入れた（未完成）。

- マイグレーションと認証機能の統合  
データベースマイグレーションをAlembicで自動化し、セキュアな認証機能を組み込んだ（未完成）。

##### しかし・・・
バックエンド全般を担当する者が2日目に体調を崩してしまい、一部構築を断念することになりました。
