---
title: "バッジ・ラベルのデザイン"
slug: "badge-label"
section: "tips"
category: "element"
difficulty: "beginner"
priority: "medium"
tags: ["badge", "label", "status", "notification", "color-system"]
estimatedTime: "10分"
publishedAt: "2025-01-15"
---

# バッジ・ラベルのデザイン

ステータスやカテゴリを一目で伝える、小さくても目立つバッジを作りましょう。

## AIと一緒に学ぶポイント

### 🤖 AIへの効果的な質問例

```
状態を表すバッジ（新着、進行中、完了など）を作りたいです。
要件：
- 色で状態を区別
- コンパクトで読みやすい
- アイコンも入れられる
```

## 基本のバッジ

シンプルなバッジスタイルから始めます。

```html
<span class="badge">新着</span>
<span class="badge">人気</span>
<span class="badge">おすすめ</span>
```

```css
:root {
  --badge-bg: #3b82f6;
  --badge-text: #ffffff;
  --badge-padding: 0.25rem 0.75rem;
  --badge-radius: 4px;
  --badge-font-size: 0.75rem;
}

.badge {
  display: inline-block;
  padding: var(--badge-padding);
  background: var(--badge-bg);
  color: var(--badge-text);
  font-size: var(--badge-font-size);
  font-weight: 600;
  border-radius: var(--badge-radius);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
```

**ポイント**:
- `display: inline-block`で横に並ぶ
- `text-transform: uppercase`で大文字に
- `letter-spacing`で文字間隔を調整

## カラーバリエーション

状態によって色を変えます。

```css
.badge-primary {
  background: #3b82f6;
  color: white;
}

.badge-success {
  background: #10b981;
  color: white;
}

.badge-warning {
  background: #f59e0b;
  color: white;
}

.badge-danger {
  background: #ef4444;
  color: white;
}

.badge-gray {
  background: #6b7280;
  color: white;
}
```

HTMLでの使用：

```html
<span class="badge badge-primary">新着</span>
<span class="badge badge-success">完了</span>
<span class="badge badge-warning">保留中</span>
<span class="badge badge-danger">エラー</span>
<span class="badge badge-gray">無効</span>
```

### 🤖 AIに聞いてみよう

```
カラーユニバーサルデザインを考慮した
バッジの色選びのポイントを教えてください。
```

## アウトラインバッジ

背景を透明にして、枠線だけのバッジ。

```css
.badge-outline {
  background: transparent;
  color: #3b82f6;
  border: 1.5px solid #3b82f6;
}

.badge-outline.badge-success {
  color: #10b981;
  border-color: #10b981;
}

.badge-outline.badge-danger {
  color: #ef4444;
  border-color: #ef4444;
}
```

## ドット付きバッジ

ステータスを表すドットを追加します。

```html
<span class="badge badge-dot">
  <span class="badge-dot-icon"></span>
  オンライン
</span>
```

```css
.badge-dot {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.badge-dot-icon {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: currentColor;
}

/* アニメーション付き */
.badge-dot-icon.pulse {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
```

**currentColorの便利さ**:
- 親要素の`color`プロパティを継承
- バッジの色を変えるだけでドットの色も変わる

### 🤖 AIでの改善質問

```
このドットをもっと目立たせたいです。
リング状に広がるアニメーションを追加できますか？
```

## 数字バッジ

通知数などを表示します。

```html
<button class="button-with-badge">
  通知
  <span class="badge-count">3</span>
</button>
```

```css
.button-with-badge {
  position: relative;
  padding: 0.5rem 1rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.badge-count {
  position: absolute;
  top: -8px;
  right: -8px;
  min-width: 20px;
  height: 20px;
  padding: 0 6px;
  background: #ef4444;
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

**ポイント**:
- `position: absolute`で配置
- `min-width`で数字が増えても形を保つ
- Flexboxで数字を中央配置

## アイコン付きバッジ

Material Symbolsを使います。

```html
<span class="badge badge-icon">
  <span class="material-symbols-outlined">check_circle</span>
  認証済み
</span>
```

```css
.badge-icon {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.badge-icon .material-symbols-outlined {
  font-size: 1rem;
}
```

## 削除可能なバッジ

タグのように削除できるバッジ。

```html
<span class="badge badge-removable">
  タグ名
  <button class="badge-remove" aria-label="削除">×</button>
</span>
```

```css
.badge-removable {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding-right: 0.25rem;
}

.badge-remove {
  width: 1.25rem;
  height: 1.25rem;
  padding: 0;
  background: rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 1rem;
  line-height: 1;
  cursor: pointer;
  transition: background 0.2s;
}

.badge-remove:hover {
  background: rgba(0, 0, 0, 0.4);
}
```

### 🤖 AIに質問

```
この削除ボタンをJavaScriptで動作させるには
どうすればいいですか？
```

## まとめ

### 学んだこと

- バッジの基本スタイル（inline-block, padding, border-radius）
- カラーバリエーションの作り方
- `currentColor`で親の色を継承
- `position: absolute`で数字バッジを配置
- CSSアニメーション（pulse）

### AIとの学習のポイント

1. **アクセシビリティについて質問**（色のコントラスト、カラーユニバーサルデザイン）
2. **アニメーションの追加方法を聞く**
3. **JavaScript連携を学ぶ**（削除機能など）

### 🚀 次のステップ

- バッジにホバーエフェクトを追加
- グラデーションバッジを作ってみよう
- 装飾セクションでグローエフェクトに挑戦
