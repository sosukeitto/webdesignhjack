---
title: "Flexboxの基本"
slug: "flexbox-basics"
section: "tips"
category: "layout"
difficulty: "beginner"
priority: "high"
tags: ["flexbox", "layout", "alignment", "responsive", "gap"]
estimatedTime: "15分"
publishedAt: "2025-01-16"
---

# Flexboxの基本

Flexboxを使って、要素を横並び・縦並びにする基本的なレイアウトを学びましょう。

## AIと一緒に学ぶポイント

### 🤖 AIへの効果的な質問例

```
Flexboxで要素を均等に配置したいです。
要件：
- 要素同士の間隔を一定に
- レスポンシブ対応
- 折り返しも対応
```

## Flexboxとは

Flexbox（Flexible Box Layout）は、要素を柔軟に配置するためのCSSレイアウトモデルです。

**できること**:
- 要素を横並び・縦並びにする
- 要素の間隔を調整する
- 要素の配置（左寄せ、中央、右寄せ）
- 要素の並び順を変える

## 基本の使い方

```html
<div class="flex-container">
  <div class="flex-item">アイテム1</div>
  <div class="flex-item">アイテム2</div>
  <div class="flex-item">アイテム3</div>
</div>
```

```css
.flex-container {
  display: flex;
}

.flex-item {
  padding: 1rem;
  background: #3b82f6;
  color: white;
}
```

**ポイント**:
- `display: flex`を親要素に指定
- 子要素が自動的に横並びになる

### 🤖 AIに聞いてみよう

```
display: flexとdisplay: blockの違いを
図で説明してください。
```

## 主な方向指定

```css
/* 横並び（デフォルト） */
.flex-row {
  display: flex;
  flex-direction: row;
}

/* 縦並び */
.flex-column {
  display: flex;
  flex-direction: row;
}

/* 横並び（逆順） */
.flex-row-reverse {
  display: flex;
  flex-direction: row-reverse;
}

/* 縦並び（逆順） */
.flex-column-reverse {
  display: flex;
  flex-direction: column-reverse;
}
```

## 主な配置プロパティ

### 水平方向の配置（justify-content）

```css
/* 左寄せ（デフォルト） */
.flex-start {
  display: flex;
  justify-content: flex-start;
}

/* 中央寄せ */
.flex-center {
  display: flex;
  justify-content: center;
}

/* 右寄せ */
.flex-end {
  display: flex;
  justify-content: flex-end;
}

/* 均等配置（両端は余白なし） */
.flex-space-between {
  display: flex;
  justify-content: space-between;
}

/* 均等配置（両端にも余白） */
.flex-space-around {
  display: flex;
  justify-content: space-around;
}

/* 均等配置（全ての間隔が同じ） */
.flex-space-evenly {
  display: flex;
  justify-content: space-evenly;
}
```

### 垂直方向の配置（align-items）

```css
/* 上寄せ（デフォルト） */
.align-start {
  display: flex;
  align-items: flex-start;
}

/* 中央寄せ */
.align-center {
  display: flex;
  align-items: center;
}

/* 下寄せ */
.align-end {
  display: flex;
  align-items: flex-end;
}

/* ベースライン揃え */
.align-baseline {
  display: flex;
  align-items: baseline;
}

/* 高さを揃える */
.align-stretch {
  display: flex;
  align-items: stretch;
}
```

### 🤖 AIでの改善質問

```
justify-contentとalign-itemsの使い分けを
わかりやすく図で説明してください。
```

## 間隔の調整（gap）

```css
.flex-gap {
  display: flex;
  gap: 1rem; /* 要素間の間隔 */
}

/* 縦横で異なる間隔 */
.flex-gap-different {
  display: flex;
  gap: 1rem 2rem; /* 縦 横 */
}
```

**gapのメリット**:
- marginを個別に設定する必要がない
- 最初・最後の要素にも余白がつかない
- コードがシンプル

## 折り返し（flex-wrap）

```css
/* 折り返さない（デフォルト） */
.flex-nowrap {
  display: flex;
  flex-wrap: nowrap;
}

/* 折り返す */
.flex-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

/* 逆順で折り返す */
.flex-wrap-reverse {
  display: flex;
  flex-wrap: wrap-reverse;
}
```

## 実践例：ナビゲーションメニュー

```html
<nav class="nav">
  <a href="/" class="nav-link">ホーム</a>
  <a href="/about" class="nav-link">About</a>
  <a href="/services" class="nav-link">Services</a>
  <a href="/contact" class="nav-link">Contact</a>
</nav>
```

```css
.nav {
  display: flex;
  gap: 2rem;
  padding: 1rem;
  background: #1e293b;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: background 0.2s;
}

.nav-link:hover {
  background: #334155;
  border-radius: 4px;
}

/* レスポンシブ */
@media (max-width: 768px) {
  .nav {
    flex-direction: column;
    gap: 0.5rem;
  }
}
```

## 実践例：カードレイアウト

```html
<div class="card-grid">
  <div class="card">カード1</div>
  <div class="card">カード2</div>
  <div class="card">カード3</div>
</div>
```

```css
.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.card {
  flex: 1 1 300px; /* 成長 縮小 ベース幅 */
  padding: 1.5rem;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}
```

**flex プロパティの解説**:
- `flex-grow: 1` - 余白がある時に伸びる
- `flex-shrink: 1` - スペースが足りない時に縮む
- `flex-basis: 300px` - 基本の幅は300px

### 🤖 AIに質問

```
flexプロパティ（flex-grow, flex-shrink, flex-basis）の
動作を具体例で教えてください。
```

## まとめ

### 学んだこと

- `display: flex`でFlexboxを有効化
- `flex-direction`で方向指定
- `justify-content`で水平方向の配置
- `align-items`で垂直方向の配置
- `gap`で間隔調整
- `flex-wrap`で折り返し

### AIとの学習のポイント

1. **配置パターンの違いを図で理解**（space-between, space-around, space-evenlyなど）
2. **実際の使用例を質問**
   - 例：「ヘッダーにロゴとメニューを左右に配置するには？」
3. **プロパティの組み合わせを相談**

### 🚀 次のステップ

- CSS Gridと組み合わせてみよう
- flexプロパティを詳しく学ぼう
- アニメーション付きのFlexboxレイアウトに挑戦
