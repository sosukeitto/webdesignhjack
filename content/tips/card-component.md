---
title: "カードコンポーネント"
slug: "card-component"
section: "tips"
category: "element"
difficulty: "beginner"
priority: "high"
tags: ["card", "component", "grid", "object-fit", "shadow"]
estimatedTime: "15分"
publishedAt: "2025-01-15"
---

# カードコンポーネント

コンテンツをまとめて表示する、使いやすいカードを作りましょう。

## AIと一緒に学ぶポイント

### 🤖 AIへの効果的な質問例

```
ブログ記事一覧用のカードコンポーネントを作りたいです。
要件：
- 画像、タイトル、説明文、日付を含む
- ホバー時に浮き上がるアニメーション
- レスポンシブ対応
```

## 基本のカード構造

まずはシンプルなカードを作ります。

```html
<div class="card">
  <img src="image.jpg" alt="画像の説明" class="card-image">
  <div class="card-content">
    <h3 class="card-title">カードのタイトル</h3>
    <p class="card-description">カードの説明文がここに入ります。</p>
  </div>
</div>
```

## 基本のCSSスタイル

```css
:root {
  --card-bg: #ffffff;
  --card-border: #e2e8f0;
  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  --card-shadow-hover: 0 10px 30px rgba(0, 0, 0, 0.15);
  --card-radius: 12px;
  --card-transition: all 0.3s ease;
}

.card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: var(--card-radius);
  overflow: hidden;
  box-shadow: var(--card-shadow);
  transition: var(--card-transition);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--card-shadow-hover);
}
```

**ポイント**:
- `overflow: hidden`で角の丸みを画像にも適用
- `transform: translateY(-4px)`でホバー時に浮き上がる
- `box-shadow`で影をつけて立体感

## 画像のスタイリング

```css
.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}
```

**object-fitの使い方**:
- `cover`: 画像を縦横比を保ったまま、領域全体を覆う
- `contain`: 画像全体が見えるように縮小
- `fill`: 画像を引き伸ばして領域にフィット

### 🤖 AIに聞いてみよう

```
object-fitの各値（cover, contain, fill）の違いを
図で説明してください。
```

## コンテンツ部分

```css
.card-content {
  padding: 1.5rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #1e293b;
}

.card-description {
  font-size: 0.875rem;
  line-height: 1.6;
  color: #64748b;
  margin: 0;
}
```

## クリック可能なカード

カード全体をリンクにする方法：

```html
<a href="/article/1" class="card-link">
  <article class="card">
    <img src="image.jpg" alt="画像の説明" class="card-image">
    <div class="card-content">
      <h3 class="card-title">カードのタイトル</h3>
      <p class="card-description">カードの説明文</p>
    </div>
  </article>
</a>
```

```css
.card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.card-link:hover .card-title {
  color: #3b82f6;
}
```

**ポイント**:
- `<a>`タグで全体を囲む
- `color: inherit`で色を継承
- ホバー時にタイトルの色を変える

## バッジ付きカード

画像の上にバッジを配置します。

```html
<div class="card">
  <div class="card-image-wrapper">
    <img src="image.jpg" alt="画像の説明" class="card-image">
    <span class="card-badge">新着</span>
  </div>
  <div class="card-content">
    <h3 class="card-title">カードのタイトル</h3>
    <p class="card-description">カードの説明文</p>
  </div>
</div>
```

```css
.card-image-wrapper {
  position: relative;
}

.card-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.25rem 0.75rem;
  background: #ef4444;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 4px;
}
```

### 🤖 AIでの改善質問

```
このバッジを左上に配置したいです。
また、複数のバッジを並べる方法も教えてください。
```

## フッター付きカード

日付やアクションボタンを配置します。

```html
<div class="card">
  <img src="image.jpg" alt="画像の説明" class="card-image">
  <div class="card-content">
    <h3 class="card-title">カードのタイトル</h3>
    <p class="card-description">カードの説明文</p>
  </div>
  <div class="card-footer">
    <span class="card-date">2025/01/15</span>
    <button class="card-action">詳しく見る →</button>
  </div>
</div>
```

```css
.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--card-border);
}

.card-date {
  font-size: 0.875rem;
  color: #64748b;
}

.card-action {
  background: none;
  border: none;
  color: #3b82f6;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
}
```

## グリッドレイアウト

複数のカードを並べます。

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}
```

**grid-template-columnsの解説**:
- `repeat()`: 繰り返しパターンを指定
- `auto-fill`: 自動的に列数を調整
- `minmax(300px, 1fr)`: 最小300px、最大は均等配分

### 🤖 AIに質問

```
grid-template-columnsのauto-fillとauto-fitの違いは何ですか？
どういう時にどちらを使うべきですか？
```

## まとめ

### 学んだこと

- カードの基本構造（画像、コンテンツ、フッター）
- `object-fit`で画像をきれいに配置
- `position: absolute`でバッジを配置
- Grid Layoutで複数カードを並べる

### AIとの学習のポイント

1. **プロパティの違いを図で説明してもらう**（object-fit, auto-fill vs auto-fitなど）
2. **レイアウトの組み方を質問**
3. **実際の使用例を求める**
   - 例：「このカードをブログ一覧ページで使うには？」

### 🚀 次のステップ

- カードにアニメーションを追加してみよう
- ダークモード対応
- 装飾セクションでガラスモーフィズムカードに挑戦
