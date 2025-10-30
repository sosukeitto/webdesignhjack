---
title: "中央寄せのテクニック"
slug: "centering-techniques"
section: "tips"
category: "layout"
difficulty: "beginner"
priority: "high"
tags: ["centering", "flexbox", "grid", "position", "transform"]
estimatedTime: "12分"
publishedAt: "2025-01-16"
---

# 中央寄せのテクニック

要素を画面やコンテナの中央に配置する、様々な方法を学びましょう。

## AIと一緒に学ぶポイント

### 🤖 AIへの効果的な質問例

```
要素を画面の真ん中に配置したいです。
縦横ともに中央揃えで、
レスポンシブにも対応したいです。
```

## 中央寄せが難しい理由

CSSで中央寄せは意外と難しいです。理由は：
- 水平方向と垂直方向で方法が異なる
- インライン要素とブロック要素で方法が異なる
- コンテナの高さが指定されているか否かで変わる

でも、現代のCSSなら簡単です！

## 1. Flexboxを使う方法（推奨）

### 最もシンプルな方法

```html
<div class="flex-center">
  <div class="content">中央に配置</div>
</div>
```

```css
.flex-center {
  display: flex;
  justify-content: center; /* 水平方向の中央 */
  align-items: center;     /* 垂直方向の中央 */
  min-height: 100vh;       /* 画面いっぱい */
}
```

**メリット**:
- シンプルで理解しやすい
- レスポンシブ対応が簡単
- 最も推奨される方法

### 🤖 AIに聞いてみよう

```
justify-contentとalign-itemsの
役割をわかりやすく教えてください。
```

## 2. CSS Gridを使う方法

```css
.grid-center {
  display: grid;
  place-items: center; /* 水平・垂直ともに中央 */
  min-height: 100vh;
}
```

**ポイント**:
- `place-items: center`は`align-items: center`と`justify-items: center`のショートハンド
- Gridの方がさらにシンプル

## 3. position + transformを使う方法

```css
.parent {
  position: relative;
  min-height: 100vh;
}

.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

**仕組み**:
1. `top: 50%`, `left: 50%`で左上を中央に
2. `transform: translate(-50%, -50%)`で自分の幅・高さの半分だけ戻す

**デメリット**:
- コードがやや複雑
- `position: absolute`は他の要素のレイアウトに影響

### 🤖 AIでの改善質問

```
transformを使った中央寄せの仕組みを
図で説明してください。
```

## 水平方向のみの中央寄せ

### ブロック要素（幅が指定されている）

```css
.horizontal-center {
  width: 600px;
  margin: 0 auto; /* 左右を自動で均等に */
}
```

### インライン要素・テキスト

```css
.text-center {
  text-align: center;
}
```

## 垂直方向のみの中央寄せ

### Flexboxを使う

```css
.vertical-center {
  display: flex;
  align-items: center;
  min-height: 100vh;
}
```

### line-heightを使う（1行のテキスト限定）

```css
.line-center {
  height: 100px;
  line-height: 100px; /* heightと同じ値 */
}
```

**注意**: 複数行のテキストには使えない

## 実践例：ログインフォームの中央配置

```html
<div class="login-container">
  <form class="login-form">
    <h2>ログイン</h2>
    <input type="email" placeholder="メールアドレス">
    <input type="password" placeholder="パスワード">
    <button type="submit">ログイン</button>
  </form>
</div>
```

```css
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.login-form {
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

.login-form h2 {
  margin-bottom: 1.5rem;
  text-align: center;
}

.login-form input {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
}

.login-form button {
  width: 100%;
  padding: 0.75rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
}
```

## 実践例：ヒーローセクション

```html
<section class="hero">
  <div class="hero-content">
    <h1>Welcome</h1>
    <p>素晴らしいWebサイトを作ろう</p>
    <button>始める</button>
  </div>
</section>
```

```css
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: url('hero-bg.jpg') center/cover;
  color: white;
  text-align: center;
}

.hero-content {
  max-width: 600px;
  padding: 2rem;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
}
```

## 複数要素の中央配置

```html
<div class="center-multiple">
  <div class="item">アイテム1</div>
  <div class="item">アイテム2</div>
  <div class="item">アイテム3</div>
</div>
```

```css
.center-multiple {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  min-height: 100vh;
}
```

## 画像の中央配置

```html
<div class="image-container">
  <img src="logo.png" alt="ロゴ">
</div>
```

```css
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  background: #f1f5f9;
}

.image-container img {
  max-width: 100%;
  height: auto;
}
```

## 方法の使い分け

| 方法 | 使うべき場面 |
|------|------------|
| Flexbox | ほとんどの場合（推奨） |
| Grid | シンプルに1要素を中央配置 |
| margin: auto | 水平方向のみで十分な場合 |
| position + transform | 古いブラウザ対応が必要な場合 |

### 🤖 AIに質問

```
それぞれの中央寄せ方法のメリット・デメリットを
表形式で教えてください。
```

## まとめ

### 学んだこと

- Flexboxが最もシンプルで推奨される
- Gridも短く書ける
- `justify-content`で水平、`align-items`で垂直
- `place-items: center`でGridなら一発
- `margin: 0 auto`は水平方向のみ

### AIとの学習のポイント

1. **それぞれの方法の仕組みを図で理解**
2. **ブラウザ対応を確認**
   - 例：「Flexboxはどのブラウザで使える？」
3. **実際の使用例を質問**
   - 例：「モーダルを中央配置するには？」

### 🚀 次のステップ

- レスポンシブな中央配置を学ぼう
- アニメーション付きの中央配置
- 複雑なレイアウトでの中央配置
