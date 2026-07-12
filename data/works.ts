export type Work = {
  id: string;
  icon: string;
  /** 実際のスクリーンショット(/works/配下)。未指定の場合はiconのタイル表示になる */
  image?: string;
  title: string;
  target: string;
  problem: string;
  solution: string;
  tags: string[];
  demoUrl?: string;
  githubUrl: string;
};

// 実績を追加する場合は、この配列に1件追加するだけでカードが増えます。
export const works: Work[] = [
  {
    id: "hp-tataki-generator",
    icon: "🗺️",
    image: "/landing-page/works/hp-tataki-generator.png",
    title: "Googleマップ×ホームページ生成",
    target: "ホームページを持っていない個人店舗・小規模事業者の方に向けて、",
    problem: "「HPが欲しいけど何を書けばいいか分からない」「制作会社に頼むと高い」という課題を、",
    solution:
      "Googleマップの店舗情報を検索し、AIがキャッチコピーから問い合わせ文まで含むホームページのたたき台を自動生成することで解決。そのままHTMLファイルとしてダウンロードして使えます。",
    tags: ["Next.js", "TypeScript", "OpenAI API", "Google Places API", "Google Sheets API"],
    githubUrl: "https://github.com/moedaichi0629-ai/hp-tataki-generator",
  },
  {
    id: "todo-app",
    icon: "✅",
    image: "/landing-page/works/todo-app.png",
    title: "Todoアプリ",
    target: "タスク管理をメモ帳やLINEで済ませている個人・小さなチームに向けて、",
    problem: "「進捗が埋もれる」「期限が管理できていない」という課題を、",
    solution:
      "優先順位・期限・検索フィルターに対応したシンプルなタスク管理アプリで解決。データはGoogleスプレッドシートに保存されるため、アプリを開かなくても内容を確認できます。",
    tags: ["Python", "Flask", "Google Sheets API", "LINE通知"],
    demoUrl: "https://todo-app-1p8e.onrender.com",
    githubUrl: "https://github.com/moedaichi0629-ai/todo-app",
  },
  {
    id: "writing-correction-tool",
    icon: "✍️",
    image: "/landing-page/works/writing-correction-tool.png",
    title: "文章添削AI",
    target: "LINEやメールの文面に毎回悩む個人事業主・店舗スタッフに向けて、",
    problem: "「失礼にならないか不安」「文章を考える時間がもったいない」という課題を、",
    solution:
      "用途とトーンを選ぶだけでAIが修正文・別パターン・コピペ用の完成文まで提案するツールで解決。スマホからその場で文章を整えられます。",
    tags: ["Python", "Streamlit", "OpenAI API"],
    demoUrl: "https://writing-correction-tool-mygnto9hpkyehkzquhma9q.streamlit.app",
    githubUrl: "https://github.com/moedaichi0629-ai/writing-correction-tool",
  },
  {
    id: "kabuki-chatbot",
    icon: "🎭",
    image: "/landing-page/works/kabuki-chatbot.png",
    title: "歌舞伎予習AI",
    target: "観劇の予定はあるものの予習の時間が取れない方に向けて、",
    problem: "「あらすじや役者が分からないまま観に行くのは不安」という課題を、",
    solution:
      "演目・役者・用語をAIチャットで質問できるほか、配役情報を入力するだけで予習内容を自動生成する仕組みで解決しました。",
    tags: ["React", "TypeScript", "Dify"],
    demoUrl: "https://heroic-blini-04272e.netlify.app",
    githubUrl: "https://github.com/moedaichi0629-ai/kabuki-chatbot",
  },
  {
    id: "schedule-adjustment-tool",
    icon: "📅",
    title: "日程調整ツール",
    target: "商談・面談の日程調整に毎回時間を取られている個人事業主・営業担当の方に向けて、",
    problem: "「候補日を出すのに時間がかかる」「ダブルブッキングが心配」という課題を、",
    solution:
      "Googleカレンダーと連携して空き時間を自動抽出し、LINE・メール用の送信文章まで自動生成するツールで解決しました。",
    tags: ["Python", "Streamlit", "Google Calendar API", "OAuth 2.0"],
    demoUrl: "https://my-tool-xpv5memhwjfqnsupvuudfk.streamlit.app",
    githubUrl: "https://github.com/moedaichi0629-ai/schedule-adjustment-tool",
  },
  {
    id: "line-automation",
    icon: "🍽️",
    title: "LINE自動化ツール",
    target: "日々のちょっとした記録をLINEで済ませたい方・店舗に向けて、",
    problem: "「記録が続かない」「スプレッドシートを開くのが面倒」という課題を、",
    solution:
      "LINEに写真を送るだけでAIが内容を解析し、Googleスプレッドシートへ自動記録。日次・週次のレポートも自動生成する仕組みで解決しました。",
    tags: ["Python", "Flask", "LINE API", "OpenAI Vision", "Google Sheets API"],
    githubUrl: "https://github.com/moedaichi0629-ai/meal_management_tool",
  },
];
