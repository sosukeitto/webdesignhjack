---
title: "ボタンの基本実装"
slug: "button-basic"
section: "tips"
category: "element"
difficulty: "beginner"
priority: "high"
tags: ["button", "hover", "transition", "focus-state", "css-variables"]
estimatedTime: "10分"
publishedAt: "2025-01-15"
---

# ボタンの基本実装

Webサイトで最も使われる要素の一つ、ボタン。基本的なHTMLとCSSで、クリックしやすい美しいボタンを作る方法を学びましょう。

## AIと一緒に学ぶポイント

このTipsでは、**AIにどう質問すればより良いコードが得られるか**も一緒に学んでいきます。

### 🤖 AIへの効果的な質問例

```
クリックしやすいボタンのCSSを作りたいです。
以下の要件でお願いします：
- ホバー時に滑らかにトランジション
- アクセシビリティを考慮
- CSS変数を使って色を管理
```

**工夫ポイント**:
- 「かっこいい」という曖昧な言葉だけでなく、**具体的な要件を箇条書き**で伝える
- 「アクセシビリティ」など、**考慮すべき観点**も明示する
- 「CSS変数」など、**使いたい技術**を指定する

## 基本のHTML構造

まずは、シンプルなボタンのHTMLから。

```html
<button class="btn">ボタン</button>
```

**ポイント**:
- `<button>`要素を使う（`<div>`や`<a>`ではなく）
- クリック可能な要素として認識されやすい
- キーボード操作にも対応（Enterキーで押せる）

## CSS実装

CSS変数を使って、保守しやすいスタイルを作ります。

```css
/* CSS変数の定義 */
:root {
  --btn-bg: #3b82f6;
  --btn-bg-hover: #2563eb;
  --btn-text: #ffffff;
  --btn-radius: 8px;
  --btn-padding: 12px 24px;
  --btn-transition: all 0.2s ease;
}

/* ボタンのスタイル */
.btn {
  /* 配置とサイズ */
  padding: var(--btn-padding);
  border-radius: var(--btn-radius);
  border: none;

  /* 色 */
  background: var(--btn-bg);
  color: var(--btn-text);

  /* テキスト */
  font-size: 16px;
  font-weight: 600;
  font-family: inherit;

  /* インタラクション */
  cursor: pointer;
  transition: var(--btn-transition);
}

/* ホバー状態 */
.btn:hover {
  background: var(--btn-bg-hover);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

/* アクセシビリティ: フォーカス状態 */
.btn:focus-visible {
  outline: 3px solid var(--btn-bg);
  outline-offset: 2px;
}

/* 無効状態 */
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}
```

**各プロパティの役割**:

- `padding`: ボタン内の余白（テキストとボタンの縁の距離）
- `border-radius`: 角の丸み
- `transition`: 状態変化を滑らかにする
- `cursor: pointer`: マウスオーバー時に手のアイコンを表示
- `transform: translateY(-2px)`: ホバー時に少し上に移動
- `box-shadow`: ホバー時に影を追加
- `:focus-visible`: キーボード操作時のアウトライン（マウスクリック時は表示されない）

## なぜこの書き方が良いのか

### CSS変数のメリット

色やサイズをCSS変数で管理すると：
- 後で色を変更したい時、1箇所変えるだけでOK
- ダークモード対応が簡単になる
- 複数のボタンで同じ値を共有できる

### 疑似クラスの使い方

- `:hover` - マウスを乗せた時
- `:focus-visible` - キーボードでフォーカスした時（マウスクリックでは表示されない）
- `:disabled` - ボタンが無効な時

### 🤖 AIでコードレビュー

コードを書いたら、AIにレビューしてもらうのも効果的です：

```
このボタンのCSSをレビューしてください。
特に以下の観点でお願いします：
1. アクセシビリティの改善点
2. パフォーマンスの最適化
3. より良い書き方の提案
```

AIに**観点を明示**することで、より具体的なフィードバックが得られます。

## まとめ

### 学んだこと

- `<button>`要素の基本的な使い方
- CSS変数を使った色・サイズの管理
- `:hover`、`:focus-visible`、`:disabled`の使い分け
- `transition`でスムーズなアニメーション

### AIとの学習のポイント

1. **具体的な要件を箇条書きで伝える**（「かっこいいボタン」ではなく「ホバー時にトランジション」など）
2. **コードレビューを依頼する**（観点を明示すると良いフィードバックが得られる）
3. **わからない用語はすぐにAIに質問**
   - 例：「CSS変数って何？」
   - 例：「focus-visibleとfocusの違いは？」
   - 例：「transformとtransitionの使い分けは？」

### 🚀 次のステップ

基本のボタンが作れたら、装飾セクションで色々なデザインに挑戦してみよう：
- プライマリ、セカンダリ、アウトラインのバリエーション
- グラデーションボタン
- ガラスモーフィズム風のボタン
- アイコン付きボタン
