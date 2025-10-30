---
title: "見出しのスタイリング"
slug: "heading-styling"
section: "tips"
category: "element"
difficulty: "beginner"
priority: "high"
tags: ["heading", "typography", "clamp", "responsive", "counter"]
estimatedTime: "12分"
publishedAt: "2025-01-15"
---

# 見出しのスタイリング

読みやすく、階層がわかりやすい見出しをデザインしましょう。

## AIと一緒に学ぶポイント

### 🤖 AIへの効果的な質問例

```
h1からh6まで統一感のある見出しスタイルを作りたいです。
要件：
- サイズは階層に応じて段階的に
- 行間と余白を適切に設定
- レスポンシブ対応
```

## デフォルトスタイルのリセット

ブラウザのデフォルトスタイルをリセットして、統一感を出します。

```css
:root {
  --heading-color: #1e293b;
  --heading-font: 'Inter', sans-serif;
  --heading-weight: 700;
  --line-height-tight: 1.2;
  --line-height-normal: 1.5;
}

h1, h2, h3, h4, h5, h6 {
  color: var(--heading-color);
  font-family: var(--heading-font);
  font-weight: var(--heading-weight);
  line-height: var(--line-height-tight);
  margin: 0;
}
```

**ポイント**:
- すべての見出しに共通のスタイルを適用
- `margin: 0`でデフォルトの余白をリセット

## サイズの設定

階層に応じたサイズを設定します。

```css
h1 {
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 1.5rem;
}

h2 {
  font-size: clamp(1.5rem, 4vw, 2.25rem);
  margin-bottom: 1.25rem;
}

h3 {
  font-size: clamp(1.25rem, 3vw, 1.875rem);
  margin-bottom: 1rem;
}

h4 {
  font-size: clamp(1.125rem, 2.5vw, 1.5rem);
  margin-bottom: 0.875rem;
}

h5 {
  font-size: clamp(1rem, 2vw, 1.25rem);
  margin-bottom: 0.75rem;
}

h6 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}
```

**clamp()関数の使い方**:
- `clamp(最小値, 可変値, 最大値)`
- 画面サイズに応じて自動的にサイズが変わる
- レスポンシブ対応が簡単

### 🤖 AIに聞いてみよう

```
clamp()関数の仕組みを詳しく教えてください。
具体例もお願いします。
```

## アクセント付き見出し

左側にアクセントラインを追加します。

```css
.heading-accent {
  position: relative;
  padding-left: 1rem;
}

.heading-accent::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
  border-radius: 2px;
}
```

HTMLでの使用：

```html
<h2 class="heading-accent">アクセント付き見出し</h2>
```

## ボーダー付き見出し

下線でセクションを区切ります。

```css
.heading-border {
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e2e8f0;
}

/* ホバー時に色が変わる */
.heading-border:hover {
  border-color: #3b82f6;
  transition: border-color 0.3s ease;
}
```

## 番号付き見出し

CSSカウンターで自動的に番号を追加します。

```css
/* カウンターのリセット */
.article {
  counter-reset: heading-counter;
}

.heading-numbered {
  counter-increment: heading-counter;
}

.heading-numbered::before {
  content: counter(heading-counter) ". ";
  color: #3b82f6;
  font-weight: 700;
  margin-right: 0.5rem;
}
```

HTMLでの使用：

```html
<article class="article">
  <h2 class="heading-numbered">最初のセクション</h2>
  <h2 class="heading-numbered">次のセクション</h2>
  <h2 class="heading-numbered">最後のセクション</h2>
</article>
```

**結果**:
```
1. 最初のセクション
2. 次のセクション
3. 最後のセクション
```

### 🤖 AIでの改善質問

```
このカウンターをネストされた見出し（1.1, 1.2のような階層）に
対応させるにはどうすればいいですか？
```

## セマンティックHTML

見出しは必ず階層順に使いましょう。

```html
<!-- 良い例 -->
<h1>ページタイトル</h1>
<h2>大セクション</h2>
<h3>小セクション</h3>

<!-- 悪い例 -->
<h1>ページタイトル</h1>
<h3>いきなりh3</h3> <!-- h2を飛ばしている -->
```

**なぜ重要か**:
- スクリーンリーダーが正しく読める
- SEOに良い影響
- コンテンツの構造が明確

### 🤖 AIに質問

```
見出しのセマンティックな使い方について教えてください。
アクセシビリティの観点でのベストプラクティスは？
```

## まとめ

### 学んだこと

- `clamp()`でレスポンシブなフォントサイズ
- `::before`疑似要素でアクセントを追加
- CSSカウンターで自動採番
- セマンティックHTMLの重要性

### AIとの学習のポイント

1. **関数の使い方がわからない時はAIに聞く**（clamp(), counter()など）
2. **アクセシビリティについて質問する**
3. **コード例を求める**
   - 例：「カウンターの階層化の実装例を教えて」

### 🚀 次のステップ

- 見出しにアニメーションを追加してみよう
- ダークモードに対応させよう
- 装飾セクションでグラデーション見出しに挑戦
