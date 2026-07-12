export type Stat = {
  value: string;
  suffix?: string;
  label: string;
  /** カウントアップする数値。省略時は静的テキストとして表示 */
  countTo?: number;
};

export const stats: Stat[] = [
  { value: "10", suffix: "+", label: "公開アプリ", countTo: 10 },
  { value: "10", suffix: "+", label: "API連携", countTo: 10 },
  { value: "企画〜公開", label: "一貫対応" },
];
