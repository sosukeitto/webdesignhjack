---
title: "アイコンの使い方"
slug: "icon-usage"
section: "tips"
category: "element"
difficulty: "beginner"
priority: "high"
tags: ["icon", "material-symbols", "flexbox", "animation", "aria"]
estimatedTime: "12分"
publishedAt: "2025-01-15"
---

# アイコンの使い方

Material Symbolsを使って、UIに視覚的な情報を追加しましょう。

## AIと一緒に学ぶポイント

### 🤖 AIへの効果的な質問例

```
Material Symbolsアイコンを使いたいです。
以下を教えてください：
- 導入方法
- サイズや色の変更方法
- ボタンやリンクと組み合わせる方法
```

## Material Symbolsの導入

HTMLの`<head>`内に追加します。

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
```

## 基本的な使い方

```html
<span class="material-symbols-outlined">home</span>
<span class="material-symbols-outlined">search</span>
<span class="material-symbols-outlined">settings</span>
<span class="material-symbols-outlined">favorite</span>
```

**アイコンの探し方**:
1. [Google Fonts Icons](https://fonts.google.com/icons) にアクセス
2. 検索バーでアイコンを探す
3. アイコン名をコピーして使用

### 🤖 AIに聞いてみよう

```
「ユーザー」「メニュー」「通知」を表す
適切なMaterial Symbolsアイコンの名前を教えてください。
```

## サイズの変更

```css
:root {
  --icon-size-sm: 18px;
  --icon-size-md: 24px;
  --icon-size-lg: 32px;
  --icon-size-xl: 48px;
}

.material-symbols-outlined {
  font-size: var(--icon-size-md); /* デフォルト */
}

.icon-sm {
  font-size: var(--icon-size-sm);
}

.icon-lg {
  font-size: var(--icon-size-lg);
}

.icon-xl {
  font-size: var(--icon-size-xl);
}
```

HTMLでの使用：

```html
<span class="material-symbols-outlined icon-sm">home</span>
<span class="material-symbols-outlined">home</span>
<span class="material-symbols-outlined icon-lg">home</span>
<span class="material-symbols-outlined icon-xl">home</span>
```

## 色の変更

アイコンはテキストと同じように`color`で色を変えられます。

```css
.icon-primary {
  color: #3b82f6;
}

.icon-success {
  color: #10b981;
}

.icon-warning {
  color: #f59e0b;
}

.icon-danger {
  color: #ef4444;
}
```

## ボタンとの組み合わせ

### テキスト付きボタン

```html
<button class="btn btn-with-icon">
  <span class="material-symbols-outlined">add</span>
  <span>追加</span>
</button>
```

```css
.btn-with-icon {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-with-icon:hover {
  background: #2563eb;
}
```

**ポイント**:
- `display: inline-flex`でアイコンとテキストを横並び
- `align-items: center`で垂直方向の中央揃え
- `gap`でアイコンとテキストの間隔

### アイコンのみボタン

```html
<button class="btn-icon" aria-label="検索">
  <span class="material-symbols-outlined">search</span>
</button>
```

```css
.btn-icon {
  width: 40px;
  height: 40px;
  padding: 0;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-icon:hover {
  background: #2563eb;
  transform: scale(1.1);
}
```

**アクセシビリティ**:
- `aria-label`でボタンの目的を説明
- スクリーンリーダーが読み上げられる

### 🤖 AIに質問

```
aria-labelとは何ですか？
他のaria属性についても教えてください。
```

## リストでのアイコン使用

```html
<ul class="icon-list">
  <li>
    <span class="material-symbols-outlined">check_circle</span>
    <span>完了した項目</span>
  </li>
  <li>
    <span class="material-symbols-outlined">schedule</span>
    <span>予定の項目</span>
  </li>
  <li>
    <span class="material-symbols-outlined">cancel</span>
    <span>キャンセルされた項目</span>
  </li>
</ul>
```

```css
.icon-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.icon-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0;
}

.icon-list .material-symbols-outlined {
  font-size: 20px;
  color: #3b82f6;
}
```

## アニメーション付きアイコン

### 回転アニメーション

```html
<button class="btn-loading">
  <span class="material-symbols-outlined icon-spin">refresh</span>
  読み込み中...
</button>
```

```css
.icon-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

### ホバーアニメーション

```css
.icon-bounce:hover {
  animation: bounce 0.5s ease;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}
```

### 🤖 AIでの改善質問

```
このアイコンにパルス（脈打つような）アニメーションを
追加したいです。実装方法を教えてください。
```

## アイコンの塗りつぶし

Material Symbolsは塗りつぶしバリエーションがあります。

```html
<!-- 通常（アウトライン） -->
<span class="material-symbols-outlined">favorite</span>

<!-- 塗りつぶし -->
<span class="material-symbols-outlined icon-filled">favorite</span>
```

```css
.icon-filled {
  font-variation-settings: 'FILL' 1;
}
```

## アイコンボックス

アイコンを四角や丸で囲みます。

```html
<div class="icon-box">
  <span class="material-symbols-outlined">lightbulb</span>
</div>
```

```css
.icon-box {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eff6ff;
  border-radius: 12px;
  color: #3b82f6;
}

.icon-box .material-symbols-outlined {
  font-size: 32px;
}

/* 丸い背景 */
.icon-box-circle {
  border-radius: 50%;
}
```

## まとめ

### 学んだこと

- Material Symbolsの導入方法
- `font-size`と`color`でサイズと色を変更
- Flexboxでアイコンとテキストを並べる
- `aria-label`でアクセシビリティ対応
- CSS Animationでアイコンをアニメーション

### AIとの学習のポイント

1. **適切なアイコンを探す手伝いをしてもらう**
2. **アクセシビリティについて学ぶ**（aria-label、スクリーンリーダー対応）
3. **アニメーションのバリエーションを聞く**
4. **実装例を求める**
   - 例：「通知ボタンにアイコンと数字バッジを付けたい」

### 🚀 次のステップ

- アイコンに複雑なアニメーションを追加
- SVGアイコンの使い方を学ぶ
- カスタムアイコンフォントを作ってみよう
