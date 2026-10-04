# もえ｜AI・業務自動化ポートフォリオ

AI活用・Googleサービス連携・LINE Botなどの個人開発作品を紹介するポートフォリオサイトです。

[作品一覧](https://github.com/moedaichi0629-ai/landing-page) · [ポートフォリオ](https://moedaichi0629-ai.github.io/landing-page/)

## 解決する課題

**想定利用者：** 制作の相談を検討する方・開発作品を確認する方

作品ごとに分かれた機能・使用技術・公開先をまとめて確認したいこと。

## 主な機能

- 個人開発作品の紹介
- 公開ポートフォリオへの入口

## デモ・利用方法

[ポートフォリオを見る](https://moedaichi0629-ai.github.io/landing-page/)

## 使用技術

Next.js / React / TypeScript / Tailwind CSS / GitHub Pages

## 工夫した点

Next.jsの静的エクスポートとGitHub Actionsで公開する構成です。

## 現在の実装範囲

掲載作品の実装範囲・利用条件は各リポジトリのREADMEを参照してください。

## 主力作品

| 作品 | 内容 |
|---|---|
| [美容室向けLINE問い合わせAI Bot](https://github.com/moedaichi0629-ai/line-reservation-bot) | 美容室に届く営業時間・設備などの質問へ、登録済みFAQをもとにAIが回答し、スタッフの問い合わせ対応を支援します。 |
| [クラウドワークスAI営業支援システム](https://github.com/moedaichi0629-ai/crowdworks-sales-assistant) | 案件収集から適合度分析、応募文の作成、応募後の履歴管理、営業KPIの振り返りまでを支援するローカルアプリです。 |
| [Googleマップ店舗情報収集・営業管理ツール](https://github.com/moedaichi0629-ai/hp-tataki-generator) | Googleマップから店舗情報を集め、HP制作の提案先を一覧で管理し、営業状況や制作したHPのURLを記録するWebアプリです。 |
| [GAS × AI ブログ記事下書き生成ツール](https://github.com/moedaichi0629-ai/gas-ai-blog-automation) | スプレッドシートのキーワードから記事のタイトル・本文・メタディスクリプションを生成し、同じシートに書き出すツールです。 |
| [Googleサービス連携 予約受付自動化ツール](https://github.com/moedaichi0629-ai/google-booking-automation) | Googleフォームの予約回答をもとに、カレンダーへの予定登録・予約完了メール送信・処理結果の記録を自動化します。 |

## その他の作品

- [日程調整支援ツール](https://github.com/moedaichi0629-ai/schedule-adjustment-tool)
- [Todo管理 × Google Sheets × LINE通知](https://github.com/moedaichi0629-ai/todo-app)
- [LINE食事記録Bot](https://github.com/moedaichi0629-ai/meal_management_tool)
- [ライブ思い出アルバムLINE Bot](https://github.com/moedaichi0629-ai/live_album_tool)
- [伝わる文章添削ツール](https://github.com/moedaichi0629-ai/writing-correction-tool)
- [SNS投稿文生成ツール](https://github.com/moedaichi0629-ai/sns-post-generator)
- [クラウドワークス案件マッチャー](https://github.com/moedaichi0629-ai/crowdworks-matcher)
- [LINE × Dify AIチャットボット](https://github.com/moedaichi0629-ai/line-dify-bot)（学習作品）
- [天気予報API連携Webアプリ](https://github.com/moedaichi0629-ai/weather-forecast-app)（学習作品）
- [ブラウザ保存型ToDoリスト](https://github.com/moedaichi0629-ai/todo-list-app)（学習作品）

## セットアップ・技術詳細

<details>
<summary>操作方法・構成・設定手順などの詳細を開く</summary>

個人開発しているAI活用ツール群を紹介するポートフォリオサイトです。

**公開URL:** https://moedaichi0629-ai.github.io/landing-page/

## 使用技術

- Next.js（App Router, 静的エクスポート）
- React / TypeScript
- Tailwind CSS

## ローカル開発

```bash
npm install
npm run dev
```

`http://localhost:3000` で確認できます。

## デプロイ

`main` ブランチへのpushをトリガーに、GitHub Actions（`.github/workflows/deploy.yml`）が静的エクスポートを行い、GitHub Pagesに自動デプロイします。

</details>

