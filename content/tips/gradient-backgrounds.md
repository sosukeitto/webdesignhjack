---
title: "グラデーションの使い方"
slug: "gradient-backgrounds"
section: "tips"
category: "decoration"
difficulty: "beginner"
priority: "high"
tags: ["gradient", "background", "linear-gradient", "radial-gradient", "color"]
estimatedTime: "15分"
publishedAt: "2025-01-16"
---

# グラデーションの使い方

CSSグラデーションを使って、美しい背景やデザインを作る方法を学びましょう。

## AIと一緒に学ぶポイント

### 🤖 AIへの効果的な質問例

```
青から紫へのグラデーションを作りたいです。
要件：
- 斜め方向
- 滑らかな色の変化
- モダンな配色
```

## グラデーションとは

グラデーション（gradation）は、2色以上の色を滑らかに変化させる表現方法です。

**使える場所**:
- 背景（`background`）
- テキスト（`background-clip`と組み合わせ）
- ボーダー（`border-image`）

## 線形グラデーション（linear-gradient）

### 基本的な使い方

```css
.gradient-basic {
  background: linear-gradient(to right, #3b82f6, #8b5cf6);
}
```

**構文**:
```css
linear-gradient(方向, 開始色, 終了色)
```

### 方向の指定

```css
/* 上から下（デフォルト） */
.gradient-top {
  background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
}

/* 左から右 */
.gradient-right {
  background: linear-gradient(to right, #3b82f6, #8b5cf6);
}

/* 斜め */
.gradient-diagonal {
  background: linear-gradient(to bottom right, #3b82f6, #8b5cf6);
}

/* 角度指定 */
.gradient-angle {
  background: linear-gradient(45deg, #3b82f6, #8b5cf6);
}

/* 逆向き */
.gradient-reverse {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
}
```

### 🤖 AIに聞いてみよう

```
グラデーションの角度（0deg, 45deg, 90degなど）を
図で説明してください。
```

## 複数色のグラデーション

```css
/* 3色 */
.gradient-three {
  background: linear-gradient(
    to right,
    #3b82f6,
    #8b5cf6,
    #ec4899
  );
}

/* 5色のカラフルグラデーション */
.gradient-rainbow {
  background: linear-gradient(
    to right,
    #ef4444,
    #f59e0b,
    #10b981,
    #3b82f6,
    #8b5cf6
  );
}
```

## カラーストップ（色の位置指定）

```css
/* 色の位置を指定 */
.gradient-stops {
  background: linear-gradient(
    to right,
    #3b82f6 0%,    /* 開始地点 */
    #8b5cf6 50%,   /* 中間地点 */
    #ec4899 100%   /* 終了地点 */
  );
}

/* シャープな境界 */
.gradient-sharp {
  background: linear-gradient(
    to right,
    #3b82f6 0%,
    #3b82f6 50%,   /* 50%まで青 */
    #8b5cf6 50%,   /* 50%から紫 */
    #8b5cf6 100%
  );
}
```

## 放射グラデーション（radial-gradient）

### 基本的な使い方

```css
.gradient-radial {
  background: radial-gradient(circle, #3b82f6, #8b5cf6);
}
```

### 形状の指定

```css
/* 円形 */
.gradient-circle {
  background: radial-gradient(circle, #3b82f6, #8b5cf6);
}

/* 楕円形（デフォルト） */
.gradient-ellipse {
  background: radial-gradient(ellipse, #3b82f6, #8b5cf6);
}
```

### 位置の指定

```css
/* 中央（デフォルト） */
.gradient-center {
  background: radial-gradient(circle at center, #3b82f6, #8b5cf6);
}

/* 左上 */
.gradient-top-left {
  background: radial-gradient(circle at top left, #3b82f6, #8b5cf6);
}

/* 右下 */
.gradient-bottom-right {
  background: radial-gradient(circle at bottom right, #3b82f6, #8b5cf6);
}

/* パーセンテージで指定 */
.gradient-custom {
  background: radial-gradient(circle at 30% 40%, #3b82f6, #8b5cf6);
}
```

## 実践例：ヒーローセクション

```html
<section class="hero">
  <div class="hero-content">
    <h1>Welcome</h1>
    <p>美しいグラデーション背景</p>
  </div>
</section>
```

```css
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    #667eea 0%,
    #764ba2 100%
  );
  color: white;
  text-align: center;
}

.hero-content h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}
```

## 実践例：グラデーションボタン

```html
<button class="gradient-button">クリック</button>
```

```css
.gradient-button {
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.gradient-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.4);
}
```

### 🤖 AIでの改善質問

```
ホバー時にグラデーションが動くボタンを
作りたいです。実装方法を教えてください。
```

## アニメーションするグラデーション

```css
@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.gradient-animated {
  background: linear-gradient(
    270deg,
    #667eea,
    #764ba2,
    #f093fb
  );
  background-size: 600% 600%;
  animation: gradient-animation 15s ease infinite;
}
```

## グラデーションテキスト

```html
<h1 class="gradient-text">グラデーションテキスト</h1>
```

```css
.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 4rem;
  font-weight: 900;
}
```

## グラデーションカード

```html
<div class="gradient-card">
  <h3>カードタイトル</h3>
  <p>グラデーション背景のカード</p>
</div>
```

```css
.gradient-card {
  padding: 2rem;
  border-radius: 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}
```

## ガラスモーフィズム風

```css
.glass-card {
  padding: 2rem;
  border-radius: 16px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.05)
  );
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
}
```

## 人気のグラデーション配色

```css
/* Sunset */
.gradient-sunset {
  background: linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%);
}

/* Ocean */
.gradient-ocean {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Forest */
.gradient-forest {
  background: linear-gradient(135deg, #0ba360 0%, #3cba92 100%);
}

/* Fire */
.gradient-fire {
  background: linear-gradient(135deg, #f83600 0%, #f9d423 100%);
}

/* Midnight */
.gradient-midnight {
  background: linear-gradient(135deg, #232526 0%, #414345 100%);
}
```

### 🤖 AIに質問

```
トレンドのグラデーション配色を
5つ教えてください。カラーコードも含めて。
```

## まとめ

### 学んだこと

- `linear-gradient`で線形グラデーション
- `radial-gradient`で放射グラデーション
- 角度や位置で方向指定
- カラーストップで色の位置調整
- `background-clip: text`でテキストにグラデーション
- アニメーションも可能

### AIとの学習のポイント

1. **配色のアドバイスをもらう**
   - 例：「青系のグラデーションでモダンな配色は？」
2. **グラデーションジェネレーターを作ってもらう**
3. **トレンドの配色を聞く**

### 🚀 次のステップ

- グラデーションとbox-shadowの組み合わせ
- 複雑なパターンのグラデーション
- SVGグラデーションに挑戦
