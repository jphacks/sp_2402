// キャラクターのセリフの型定義
interface Dialogue {
  speaker: string; // 発言者 ("あなた" or "キャラ")
  text: string;    // セリフ内容
}

// 各話の型定義
interface Episode {
  title: string;          // 話のタイトル
  enviroment:
    | "apartment"
    | "city"
    | "dawn"
    | "forest"
    | "lobby"
    | "night"
    | "park"
    | "studio"
    | "sunset"
    | "warehouse"
    | undefined;
  dialogues: Dialogue[];  // 会話のリスト
}

// シナリオ全体の構造
export const tea_1Story: Episode[] = [
  {
    title: "初めての出会い",
    enviroment: undefined,
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
    enviroment: "forest",
    dialogues: [
      { speaker: "あなた", text: "茶々さん、おはよう！" },
      { speaker: "茶々", text: "おはようございます、お茶々！今日はとってもいい天気だね〜。一緒に森を散歩しない？" },
      { speaker: "あなた", text: "いいね！どこに行こうか？" },
      { speaker: "茶々", text: "美味しいお茶が飲める場所を探しに行こう！" }
    ]
  },
  {
    title: "お茶の話",
    enviroment: "apartment",
    dialogues: [
      { speaker: "あなた", text: "茶々さんは本当にお茶が好きなんだね。" },
      { speaker: "茶々", text: "そうなの！お茶って心がほっこりするでしょ？お茶々！" },
      { speaker: "あなた", text: "確かに。おすすめのお茶はある？" },
      { speaker: "茶々", text: "秘密の茶葉で作ったお茶が最高なんだ。また一緒に飲もうね！" }
    ]
  },
  {
    title: "秘密の茶畑",
    enviroment: "lobby",
    dialogues: [
      { speaker: "あなた", text: "茶々さん、この前言ってた秘密の茶畑ってどこにあるの？" },
      { speaker: "茶々", text: "実はね、森の奥深くにあるんだ。今度こっそり案内するね、お茶々！" },
      { speaker: "あなた", text: "本当？楽しみだな。一緒に行こう！" },
      { speaker: "茶々", text: "うん、一緒に美味しいお茶を作ろう！" }
    ]
  },
  {
    title: "深まる友情",
    enviroment: "park",
    dialogues: [
      { speaker: "あなた", text: "茶々さん、一緒に過ごす時間が増えて嬉しいよ。" },
      { speaker: "茶々", text: "私もだよ、お茶々！あなたといると心が温かくなるんだ。" },
      { speaker: "あなた", text: "これからもたくさんお茶を飲みながらお話ししようね。" },
      { speaker: "茶々", text: "うん！ずっと仲良しでいようね、お茶々！" }
    ]
  }
];

// カフェラのシナリオ
const coffeeStory: Episode[] = [
  {
    title: "初めての出会い",
    enviroment: undefined,
    dialogues: [
      { speaker: "あなた", text: "こんにちは！" },
      { speaker: "カフェラ", text: "こんにちは。もしかして、私を呼び出してくれたのかしら？よろしくね。" },
      { speaker: "あなた", text: "え、僕が呼び出したの？でも、よろしくお願いします！君の名前は？" },
      { speaker: "カフェラ", text: "ごめんなさい、自己紹介が遅れてしまったわね。私はカフェラ。コーヒーが大好きな猫よ。" },
      { speaker: "あなた", text: "カフェラさんか。素敵な名前だね！" }
    ]
  },
  {
    title: "森での再会",
    enviroment: "forest",
    dialogues: [
      { speaker: "あなた", text: "カフェラさん、おはようございます！" },
      { speaker: "カフェラ", text: "おはようございます。今日も美しい朝ね。一緒に森を散歩しない？" },
      { speaker: "あなた", text: "ぜひ！おすすめの場所はありますか？" },
      { speaker: "カフェラ", text: "ええ、とっておきのコーヒースポットがあるの。一緒に行きましょう。" }
    ]
  },
  {
    title: "コーヒーの話",
    enviroment: "apartment",
    dialogues: [
      { speaker: "あなた", text: "カフェラさんは本当にコーヒーが好きなんですね。" },
      { speaker: "カフェラ", text: "ええ、コーヒーには無限の魅力があるの。香りや味わい、一杯一杯が特別なのよ。" },
      { speaker: "あなた", text: "そうなんですか。どんなコーヒーがおすすめですか？" },
      { speaker: "カフェラ", text: "特別な豆で淹れた一杯を今度ご馳走するわ。きっと気に入るはずよ。" }
    ]
  },
  {
    title: "秘密のコーヒー豆",
    enviroment: "lobby",
    dialogues: [
      { speaker: "あなた", text: "この前の特別なコーヒー、ぜひ飲んでみたいです！" },
      { speaker: "カフェラ", text: "ふふ、待っていたわ。実は森の奥に秘密のコーヒー豆を育てているの。" },
      { speaker: "あなた", text: "本当ですか？ぜひ見てみたいです。" },
      { speaker: "カフェラ", text: "もちろんよ。一緒に行きましょう。そして一緒にコーヒーを淹れましょう。" }
    ]
  },
  {
    title: "深まる友情",
    enviroment: "park",
    dialogues: [
      { speaker: "あなた", text: "カフェラさんと過ごす時間、本当に楽しいです。" },
      { speaker: "カフェラ", text: "私もよ。あなたと話すと心が温まるわ。" },
      { speaker: "あなた", text: "これからもたくさんお話ししましょうね。" },
      { speaker: "カフェラ", text: "ええ、ずっと仲良くしていきましょう。美味しいコーヒーを飲みながらね。" }
    ]
  }
];

interface CharacterInfo {
  name: string;
  scenario: Episode[];
  isSelected: boolean;
}

export const characters: Record<string, CharacterInfo> = {
  tea_1: {
    name: "茶々",
    scenario: tea_1Story,
    isSelected: true,
  },
  water: {
    name: "ミネラルウォーター",
    scenario: tea_1Story,
    isSelected: false,
  },
  tea_2: {
    name: "紅茶",
    scenario: tea_1Story,
    isSelected: false,
  },
  coffee: {
    name: "カフェラ",
    scenario: coffeeStory,
    isSelected: false,
  },
  juice: {
    name: "フルーツジュース",
    scenario: tea_1Story,
    isSelected: false,
  },
  sportDrinks: {
    name: "スポーツドリンク",
    scenario: tea_1Story,
    isSelected: false,
  },
  probioticDrinks: {
    name: "プロバイオティクス飲料",
    scenario: tea_1Story,
    isSelected: false,
  },
};

interface CharacterData {
  intimacyLevel: number;
}

export interface UserData {
  selectedCharacter: string,
  bottoleSum: number,
  characters: Record<string, CharacterData>;
}

export const initData: UserData = {
  selectedCharacter: "tea_1",
  bottoleSum: 0,
  characters:{
    tea_1: {
      intimacyLevel: 0,
    },
    water: {
      intimacyLevel: 0,
    },
    tea_2: {
      intimacyLevel: 0,
    },
    coffee: {
      intimacyLevel: 0,
    },
    juice: {
      intimacyLevel: 0,
    },
    sportsDrinks: {
      intimacyLevel: 0,
    },
    probioticDrinks: {
      intimacyLevel: 0,
    },
  }
}

export const characterData: Record<string, CharacterData> = {
  tea_1: {
    intimacyLevel: 0,
  },
  water: {
    intimacyLevel: 0,
  },
  tea_2: {
    intimacyLevel: 0,
  },
  coffee: {
    intimacyLevel: 0,
  },
  juice: {
    intimacyLevel: 0,
  },
  sportsDrinks: {
    intimacyLevel: 0,
  },
  probioticDrinks: {
    intimacyLevel: 0,
  },
}
