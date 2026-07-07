# ゲーム紹介サイト

個人開発ゲームの紹介サイト(Astro製)。

## 開発

```bash
npm install       # 初回のみ
npm run dev       # 開発サーバー起動 → http://localhost:4321
npm run build     # 本番ビルド(dist/ に出力)
```

## ゲームを追加・編集する

`src/content/games/` にMarkdownファイルを1つ作るだけで、トップページの一覧と詳細ページが自動で生成されます。

```markdown
---
title: ゲームのタイトル
catch: 一言キャッチコピー
category: unityroom        # ios または unityroom
unityroomNo: 7             # 100本投稿企画の何本目か(unityroomのみ)
genre: アクション
platforms: [unityroom]
releaseDate: 2026-01-01
color: "#274b8f"           # カードやページのアクセントカラー
cover: /images/games/xxx/cover.png
screenshots:
  - /images/games/xxx/shot1.png
links:
  - label: unityroomで遊ぶ
    url: https://unityroom.com/games/xxxxx
---

ここにゲームの紹介文をMarkdownで自由に書けます。
```

画像は `public/images/games/<ゲーム名>/` に置いてください。

- `category: unityroom` のゲームは「unityroom 100本投稿企画」セクションに表示され、
  その件数がトップページの進捗バー(◯/100本)に自動で反映されます。
- `category: ios` のゲームは「iOSアプリ」セクションに表示されます。
- 現在の7ゲームはすべてダミーデータです。実際のゲーム情報に差し替えてください。

## 自分の情報に書き換える箇所

- `src/layouts/BaseLayout.astro` — サイト名(`siteName`)とXのURL(`xUrl`)
- `src/pages/index.astro` — ヒーローのキャッチコピーとXのURL(`xUrl`)
- `src/pages/about.astro` — プロフィールと各種リンク

## 公開(デプロイ)

静的サイトなので無料ホスティングで公開できます。

- **Cloudflare Pages / Netlify / Vercel**: リポジトリを接続し、ビルドコマンド `npm run build`、出力ディレクトリ `dist` を指定
- **GitHub Pages**: [公式ガイド](https://docs.astro.build/ja/guides/deploy/github/) の手順でGitHub Actionsを設定
