// キャラクターのセリフの型定義
interface Dialogue {
  speaker: string; // 発言者 ("あなた" or "キャラ")
  text: string;    // セリフ内容
}

// 各話の型定義
interface Episode {
  title: string;          // 話のタイトル
  dialogues: Dialogue[];  // 会話のリスト
}

// シナリオ全体の構造
export const tea_1Story: Episode[] = [
  {
    title: "初めての出会い",
    dialogues: [
      { speaker: "あなた", text: "こんにちは！" },
      { speaker: "茶々", text: "わん！こんにちは〜！君が私を呼び出したのかな〜！よろしくね" },
      { speaker: "あなた", text: "えっ、僕が呼び出したの？でもよろしくね！君の名前は？" },
      { speaker: "茶々", text: "ごめんね、自己紹介が遅れちゃった！私は茶々（ちゃちゃ）だよ。お茶が大好きなんだ！" },
      { speaker: "あなた", text: "茶々さんか。素敵な名前だね！" }
    ]
  },
  {
    title: "森での再会",
    dialogues: [
      { speaker: "あなた", text: "茶々さん、おはよう！" },
      { speaker: "茶々", text: "おはようございます、お茶々！今日はとってもいい天気だね〜。一緒に森を散歩しない？" },
      { speaker: "あなた", text: "いいね！どこに行こうか？" },
      { speaker: "茶々", text: "美味しいお茶が飲める場所を探しに行こう！" }
    ]
  },
  {
    title: "お茶の話",
    dialogues: [
      { speaker: "あなた", text: "茶々さんは本当にお茶が好きなんだね。" },
      { speaker: "茶々", text: "そうなの！お茶って心がほっこりするでしょ？お茶々！" },
      { speaker: "あなた", text: "確かに。おすすめのお茶はある？" },
      { speaker: "茶々", text: "秘密の茶葉で作ったお茶が最高なんだ。また一緒に飲もうね！" }
    ]
  },
  {
    title: "秘密の茶畑",
    dialogues: [
      { speaker: "あなた", text: "茶々さん、この前言ってた秘密の茶畑ってどこにあるの？" },
      { speaker: "茶々", text: "実はね、森の奥深くにあるんだ。今度こっそり案内するね、お茶々！" },
      { speaker: "あなた", text: "本当？楽しみだな。一緒に行こう！" },
      { speaker: "茶々", text: "うん、一緒に美味しいお茶を作ろう！" }
    ]
  },
  {
    title: "深まる友情",
    dialogues: [
      { speaker: "あなた", text: "茶々さん、一緒に過ごす時間が増えて嬉しいよ。" },
      { speaker: "茶々", text: "私もだよ、お茶々！あなたといると心が温かくなるんだ。" },
      { speaker: "あなた", text: "これからもたくさんお茶を飲みながらお話ししようね。" },
      { speaker: "茶々", text: "うん！ずっと仲良しでいようね、お茶々！" }
    ]
  }
];

interface CharacterInfo {
  intimacyLevel: number;
  name: string;
  scenario: Episode[];
  isSelected: boolean;
}

export const characters: Record<string, CharacterInfo> = {
  tea_1: {
    intimacyLevel: 60,
    name: "茶々",
    scenario: tea_1Story,
    isSelected: true,
  },
  water: {
    intimacyLevel: 0,
    name: "ミネラルウォーター",
    scenario: tea_1Story,
    isSelected: false,
  },
  tea_2: {
    intimacyLevel: 0,
    name: "紅茶",
    scenario: tea_1Story,
    isSelected: false,
  },
  coffee: {
    intimacyLevel: 0,
    name: "コーヒー",
    scenario: tea_1Story,
    isSelected: false,
  },
  juice: {
    intimacyLevel: 0,
    name: "フルーツジュース",
    scenario: tea_1Story,
    isSelected: false,
  },
  "sports drinks": {
    intimacyLevel: 0,
    name: "スポーツドリンク",
    scenario: tea_1Story,
    isSelected: false,
  },
  "probiotic drinks": {
    intimacyLevel: 0,
    name: "プロバイオティクス飲料",
    scenario: tea_1Story,
    isSelected: false,
  },
};

interface User {
  selectedCharacter: string;
  bottoleSum: number;
  characters: Record<string, CharacterInfo>;
}

export const dummyUser:User =  {
  selectedCharacter: "tea_1",
  bottoleSum: 20,
  characters: characters,
}
