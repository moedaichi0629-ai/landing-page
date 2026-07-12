export type ProcessStep = {
  number: string;
  icon: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    icon: "🗣️",
    title: "ヒアリング",
    description: "現状の課題や、どんな作業を楽にしたいかをお伺いします。",
  },
  {
    number: "02",
    icon: "📝",
    title: "提案",
    description: "課題に合わせて、必要な機能と進め方をご提案します。",
  },
  {
    number: "03",
    icon: "🧪",
    title: "試作品",
    description: "実際に触れる試作品をつくり、認識のズレをなくします。",
  },
  {
    number: "04",
    icon: "🛠️",
    title: "制作",
    description: "フィードバックを反映しながら本制作を進めます。",
  },
  {
    number: "05",
    icon: "🚀",
    title: "納品",
    description: "動作確認のうえ公開し、使い方もあわせてお伝えします。",
  },
];
