// キャラクターのセリフの型定義
interface Dialogue {
  speaker: string; // 発言者 ("主人公" or "キャラ")
  text: string;    // セリフ内容
}

// 各話の型定義
interface Episode {
  index: number;
  title: string;          // 話のタイトル
  dialogues: Dialogue[];  // 会話のリスト
}

// シナリオ全体の構造
export const dummyStory: Episode[] = [
  {
    index: 1,
    title: "初めての出会い",
    dialogues: [
      { speaker: "主人公", text: "こんにちは！" },
      { speaker: "キャラ", text: "わん！こんにちは〜！君が私を呼び出したのかな〜！よろしくね" },
      { speaker: "主人公", text: "えっ、僕が呼び出したの？でもよろしくね！君の名前は？" },
      { speaker: "キャラ", text: "ごめんね、自己紹介が遅れちゃった！私は茶々（ちゃちゃ）だよ。お茶が大好きなんだ！" },
      { speaker: "主人公", text: "茶々さんか。素敵な名前だね！" }
    ]
  },
  {
    index: 2,
    title: "森での再会",
    dialogues: [
      { speaker: "主人公", text: "茶々さん、おはよう！" },
      { speaker: "キャラ", text: "おはようございます、お茶々！今日はとってもいい天気だね〜。一緒に森を散歩しない？" },
      { speaker: "主人公", text: "いいね！どこに行こうか？" },
      { speaker: "キャラ", text: "美味しいお茶が飲める場所を探しに行こう！" }
    ]
  },
  {
    index: 3,
    title: "お茶の話",
    dialogues: [
      { speaker: "主人公", text: "茶々さんは本当にお茶が好きなんだね。" },
      { speaker: "キャラ", text: "そうなの！お茶って心がほっこりするでしょ？お茶々！" },
      { speaker: "主人公", text: "確かに。おすすめのお茶はある？" },
      { speaker: "キャラ", text: "秘密の茶葉で作ったお茶が最高なんだ。また一緒に飲もうね！" }
    ]
  },
  {
    index: 4,
    title: "秘密の茶畑",
    dialogues: [
      { speaker: "主人公", text: "茶々さん、この前言ってた秘密の茶畑ってどこにあるの？" },
      { speaker: "キャラ", text: "実はね、森の奥深くにあるんだ。今度こっそり案内するね、お茶々！" },
      { speaker: "主人公", text: "本当？楽しみだな。一緒に行こう！" },
      { speaker: "キャラ", text: "うん、一緒に美味しいお茶を作ろう！" }
    ]
  },
  {
    index: 5,
    title: "深まる友情",
    dialogues: [
      { speaker: "主人公", text: "茶々さん、一緒に過ごす時間が増えて嬉しいよ。" },
      { speaker: "キャラ", text: "私もだよ、お茶々！あなたといると心が温かくなるんだ。" },
      { speaker: "主人公", text: "これからもたくさんお茶を飲みながらお話ししようね。" },
      { speaker: "キャラ", text: "うん！ずっと仲良しでいようね、お茶々！" }
    ]
  }
];
