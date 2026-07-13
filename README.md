# もえ | Portfolio

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
