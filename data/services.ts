export type Service = {
  icon: string;
  title: string;
  examples: string[];
};

export const services: Service[] = [
  {
    icon: "🤖",
    title: "AI業務自動化",
    examples: ["文章生成", "業務効率化", "AI活用"],
  },
  {
    icon: "💬",
    title: "LINE Bot",
    examples: ["予約", "通知", "記録"],
  },
  {
    icon: "🖥️",
    title: "Webアプリ",
    examples: ["業務システム", "管理ツール"],
  },
  {
    icon: "🔗",
    title: "API連携",
    examples: ["Google", "LINE", "OpenAI"],
  },
];
