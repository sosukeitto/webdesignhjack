---
title: "CSS Gridレイアウト"
slug: "css-grid-basics"
section: "tips"
category: "layout"
difficulty: "intermediate"
priority: "high"
tags: ["grid", "layout", "responsive", "grid-template", "auto-fill"]
estimatedTime: "20分"
publishedAt: "2025-01-16"
---

# CSS Gridレイアウト

CSS Gridを使って、複雑な2次元レイアウトを簡単に作る方法を学びましょう。

## AIと一緒に学ぶポイント

### 🤖 AIへの効果的な質問例

```
CSS Gridで3列のカードレイアウトを作りたいです。
要件：
- 画面幅に応じて自動的に列数を調整
- カード間の間隔を一定に
- 最小幅を指定
```

## CSS Gridとは

CSS Grid Layout は、行と列の2次元でレイアウトを制御できる強力なツールです。

**FlexboxとGridの違い**:
- Flexbox: 1次元（横並びor縦並び）
- Grid: 2次元（行と列を同時に制御）

### 🤖 AIに聞いてみよう

```
FlexboxとCSS Gridの使い分けを
具体例付きで教えてください。
```

## 基本の使い方

```html
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
</div>
```

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3列 */
  gap: 1rem;
}

.grid-item {
  padding: 2rem;
  background: #3b82f6;
  color: white;
  text-align: center;
}
```

**ポイント**:
- `display: grid`でGridを有効化
- `grid-template-columns`で列の定義
- `1fr`は「残りのスペースを均等に分割」

## 列の定義方法

```css
/* 固定幅 */
.grid-fixed {
  display: grid;
  grid-template-columns: 200px 200px 200px;
}

/* fr単位（均等分割） */
.grid-fr {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

/* repeat関数 */
.grid-repeat {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

/* 異なる幅 */
.grid-mixed {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr; /* 2:1:1の比率 */
}

/* ピクセルとfrの組み合わせ */
.grid-sidebar {
  display: grid;
  grid-template-columns: 250px 1fr; /* サイドバー + メイン */
}
```

## 行の定義

```css
.grid-rows {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 200px auto; /* 3行 */
}
```

## レスポンシブGrid

### auto-fillで自動調整

```css
.grid-auto {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}
```

**仕組み**:
- `auto-fill`: 画面幅に応じて自動的に列数を調整
- `minmax(250px, 1fr)`: 最小250px、最大は均等分割
- 画面が狭くなると自動的に折り返す

### 🤖 AIでの改善質問

```
auto-fillとauto-fitの違いを
実際の動作と共に教えてください。
```

## 間隔の調整

```css
/* 全体の間隔 */
.grid-gap {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

/* 行と列で異なる間隔 */
.grid-gap-different {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 1rem;    /* 行の間隔 */
  column-gap: 2rem; /* 列の間隔 */
}
```

## アイテムの配置

### 複数列にまたがる

```html
<div class="grid-span">
  <div class="grid-item header">ヘッダー</div>
  <div class="grid-item sidebar">サイドバー</div>
  <div class="grid-item main">メインコンテンツ</div>
  <div class="grid-item footer">フッター</div>
</div>
```

```css
.grid-span {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 1rem;
}

.header {
  grid-column: 1 / 3; /* 1列目から3列目まで（＝2列分） */
}

.footer {
  grid-column: span 2; /* 2列分を占める */
}
```

### 行方向のスパン

```css
.tall-item {
  grid-row: span 2; /* 2行分の高さ */
}
```

## 実践例：ダッシュボードレイアウト

```html
<div class="dashboard">
  <header class="dashboard-header">ヘッダー</header>
  <aside class="dashboard-sidebar">サイドバー</aside>
  <main class="dashboard-main">メイン</main>
  <footer class="dashboard-footer">フッター</footer>
</div>
```

```css
.dashboard {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 60px 1fr 50px;
  min-height: 100vh;
  gap: 0;
}

.dashboard-header {
  grid-column: 1 / 3;
  background: #1e293b;
  color: white;
  padding: 1rem;
}

.dashboard-sidebar {
  background: #f1f5f9;
  padding: 1rem;
}

.dashboard-main {
  background: white;
  padding: 2rem;
}

.dashboard-footer {
  grid-column: 1 / 3;
  background: #1e293b;
  color: white;
  padding: 1rem;
  text-align: center;
}

/* レスポンシブ */
@media (max-width: 768px) {
  .dashboard {
    grid-template-columns: 1fr;
    grid-template-rows: 60px auto 1fr 50px;
  }

  .dashboard-header,
  .dashboard-sidebar,
  .dashboard-footer {
    grid-column: 1;
  }
}
```

## 実践例：画像ギャラリー

```html
<div class="gallery">
  <img src="1.jpg" class="gallery-item">
  <img src="2.jpg" class="gallery-item large">
  <img src="3.jpg" class="gallery-item">
  <!-- ... -->
</div>
```

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.gallery-item {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

/* 大きな画像 */
.gallery-item.large {
  grid-column: span 2;
  grid-row: span 2;
  height: auto;
}
```

## グリッドエリア名を使った配置

```css
.grid-areas {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 60px 1fr 50px;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  gap: 1rem;
  min-height: 100vh;
}

.area-header {
  grid-area: header;
}

.area-sidebar {
  grid-area: sidebar;
}

.area-main {
  grid-area: main;
}

.area-footer {
  grid-area: footer;
}
```

**メリット**:
- レイアウト構造が視覚的にわかりやすい
- 配置の変更が簡単

### 🤖 AIに質問

```
grid-template-areasを使った
複雑なレイアウトの例を教えてください。
```

## まとめ

### 学んだこと

- `display: grid`でGridを有効化
- `grid-template-columns`で列を定義
- `repeat()`で繰り返し
- `fr`単位で柔軟な幅指定
- `auto-fill`でレスポンシブ対応
- `grid-column`、`grid-row`でアイテムの配置
- `grid-template-areas`で名前付き配置

### AIとの学習のポイント

1. **FlexboxとGridの使い分けを理解**
2. **レイアウトパターンを質問**
   - 例：「3カラムレイアウトの作り方は？」
3. **auto-fillとauto-fitの違いを学ぶ**
4. **実際のサイトのレイアウトを再現**

### 🚀 次のステップ

- サブグリッド（subgrid）を学ぼう
- GridとFlexboxを組み合わせよう
- アニメーション付きGridレイアウトに挑戦
