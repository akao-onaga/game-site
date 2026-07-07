# サイトレビュー: あかお＠ゲーム開発

Audit date: 2026-07-07
Target: local static build served from `dist` at `http://127.0.0.1:4321`
Scope: トップページ、ゲーム一覧、ゲーム詳細、About、モバイル表示、詳細から一覧へ戻る導線

## Captured Steps

1. `01-home-top-desktop.png` - トップ初期表示: Health good
   - ピクセルアート、空、地面、主人公の組み合わせで、個人ゲーム開発サイトの世界観がすぐ伝わる。
   - CTA が2つあり、ブラウザゲームとスマホアプリの入口が明確。

2. `02-home-games-desktop.png` - 100本企画セクション: Health mixed
   - カードの画像、タイトル、説明、バッジの構造は読みやすい。
   - `#unityroom` 着地時に sticky header が見出し上部を隠しており、セクション開始が少し壊れて見える。
   - 緑背景上の白文字はコントラストが弱い。白 `#ffffff` と緑 `#5cc94f` の比率は約 `2.12:1`。

3. `03-game-detail-desktop.png` - ゲーム詳細初期表示: Health good
   - ゲーム名、キャッチ、タグ、メイン画像、情報カード、プレイCTAが初期表示に入り、遊ぶ導線は強い。
   - ただし画像が大きいため、会話紹介や特徴説明は初期表示ではほぼ見えない。

4. `04-about-desktop.png` - 開発者ページ: Health good with structure issue
   - 余白が広く、プロフィールと相棒紹介は読みやすい。
   - DOM上はページの主見出しが `h2` から始まっており、ページごとの `h1` がない。

5. `05-home-top-mobile.png` - モバイルトップ: Health mixed
   - スマホ幅でもロゴ、ナビ、ヒーロー、CTAは破綻していない。
   - ヒーローが画面の大半を使うため、ゲームカードまではすぐ見えない。初訪問者には「実際の作品一覧」への到達が少し遅い。

6. `06-game-detail-mobile.png` - モバイル詳細初期表示: Health mixed
   - メイン画像は大きく魅力がある。
   - モバイルではプレイCTAの情報カードが本文の後に回るため、初期表示から「遊ぶ」まで遠い。

7. `07-game-detail-body-desktop.png` - 詳細中段の会話: Health good
   - おナガとあかおの会話はサイト固有のキャラ性を作れている。
   - 右の sticky 情報カードにCTAが残るので、デスクトップでは読みながら遊ぶ導線を失いにくい。

8. `08-game-detail-body-mobile.png` - モバイル詳細中段: Health mixed
   - 会話と特徴説明はスマホでも読める。
   - 吹き出しの横幅が狭く、長文では折り返しが多い。会話の量が増えると読み疲れが出やすい。

9. `09-detail-bottom-back-link.png` - 詳細下部の戻りリンク: Health mixed
   - 戻りリンク自体は見つけやすい。
   - CTA情報カードが下部まで残るデスクトップ体験は良い。

10. `10-after-back-link-click.png` - 戻りリンククリック後: Health poor
    - 「ゲーム一覧にもどる」が `/#games` に遷移するが、トップページに `id="games"` がないため、一覧ではなくページ上部に戻る。

## Strengths

- ピクセル調の表現が一貫していて、個人開発・ゲーム・100本企画という文脈に合っている。
- トップの2つの入口、ゲームカード、詳細ページのCTAは、基本の導線として理解しやすい。
- ゲーム詳細の会話形式は差別化になっている。単なるスペック紹介より記憶に残る。
- デスクトップ詳細の sticky 情報カードは、本文を読みながらプレイ導線を維持できている。

## UX Risks

1. 詳細から一覧へ戻る導線が壊れている。
   - Evidence: Step 09, Step 10.
   - Impact: 詳細ページを見た後に別作品を探したいユーザーが、一覧ではなくトップに戻される。
   - Recommendation: `/#games` を実在する `/#unityroom` に変えるか、一覧全体を包む `id="games"` を追加する。

2. アンカー遷移時に sticky header が見出しを隠す。
   - Evidence: Step 02.
   - Impact: ナビやヒーローCTAから移動した時、セクション見出しが欠けて雑に見える。
   - Recommendation: 対象セクションに `scroll-margin-top` を設定する。

3. モバイル詳細で「遊ぶ」CTAが遠い。
   - Evidence: Step 06, Step 08.
   - Impact: スマホで詳細を開いたユーザーが、遊べるリンクに到達する前に離脱しやすい。
   - Recommendation: モバイルではゲームヒーロー直下に主要CTAを1つ複製するか、情報カードを本文より前に出す。

4. トップのファーストビューが作品一覧に到達するまで長い。
   - Evidence: Step 05.
   - Impact: 世界観は伝わるが、作品を探したいユーザーには少し遠回り。
   - Recommendation: モバイルだけヒーロー下余白や装飾の高さを少し詰める。CTAからの着地も調整する。

## Accessibility Risks

1. 主要な白文字のコントラストが弱い。
   - Evidence: Step 02, Step 03.
   - Measured contrast: `#ffffff` on `#5cc94f` is about `2.12:1`; `#ffffff` on `#e0993c` is about `2.39:1`.
   - Recommendation: 本文は黒系にする、背景を暗くする、または影に頼らず十分なコントラストを持つ色へ変更する。

2. About ページに `h1` がない。
   - Evidence: Step 04 and DOM check.
   - Recommendation: 「開発者について」を `h1` にし、下位見出しを `h2` に整理する。

3. キーボードフォーカスの明示が弱い可能性がある。
   - Evidence: CSS check. hover/active はあるが、明確な `:focus-visible` スタイルが見当たらない。
   - Recommendation: ナビ、カード、CTA、戻りリンクにピクセル枠と相性の良い focus outline を追加する。

4. 進捗バーのアクセシブル名が不足している可能性がある。
   - Evidence: top page DOM/code check.
   - Recommendation: `role="progressbar"` に `aria-label="100本投稿企画の公開本数"` などを追加する。

## Evidence Limits

- スクリーンショット中心のレビューなので、スクリーンリーダー読み上げ、実キーボード操作、ズーム200%、OS高コントラスト設定までは未検証。
- 外部リンク先の unityroom、X、App Store は今回のレビュー対象外。
- ローカルでは `astro dev --background` が起動しなかったため、`dist` を静的HTTPサーバーで配信して確認した。

## Recommended Fix Order

1. `/#games` の戻りリンクを修正する。
2. `scroll-margin-top` でアンカー着地の見出し欠けを直す。
3. モバイル詳細のプレイCTAを上部にも配置する。
4. 緑・ゲーム色背景上の白文字コントラストを調整する。
5. About の見出し構造と focus-visible を整える。
