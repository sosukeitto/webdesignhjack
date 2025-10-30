---
title: "入力フォームの基本"
slug: "form-input-basic"
section: "tips"
category: "element"
difficulty: "beginner"
priority: "high"
tags: ["form", "input", "validation", "focus-state", "accessibility"]
estimatedTime: "15分"
publishedAt: "2025-01-15"
---

# 入力フォームの基本

使いやすく、見た目も美しい入力フォームを作りましょう。

## AIと一緒に学ぶポイント

### 🤖 AIへの効果的な質問例

```
お問い合わせフォームを作りたいです。
要件：
- 名前、メール、メッセージの入力欄
- フォーカス時にわかりやすく
- エラー表示にも対応
```

## 基本のHTML構造

まずは、セマンティックなHTMLを書きます。

```html
<form class="form">
  <div class="form-group">
    <label for="name" class="form-label">お名前</label>
    <input type="text" id="name" class="form-input" placeholder="山田太郎">
  </div>

  <div class="form-group">
    <label for="email" class="form-label">メールアドレス</label>
    <input type="email" id="email" class="form-input" placeholder="example@email.com">
  </div>

  <div class="form-group">
    <label for="message" class="form-label">メッセージ</label>
    <textarea id="message" class="form-textarea" rows="5" placeholder="お問い合わせ内容"></textarea>
  </div>

  <button type="submit" class="form-submit">送信</button>
</form>
```

**ポイント**:
- `<label>`の`for`属性と`<input>`の`id`を対応させる
- クリック範囲が広がり、アクセシビリティ向上

### 🤖 AIに聞いてみよう

```
labelのfor属性はなぜ重要ですか？
アクセシビリティの観点で教えてください。
```

## 基本のCSSスタイル

```css
:root {
  --form-border: #e2e8f0;
  --form-border-focus: #3b82f6;
  --form-bg: #ffffff;
  --form-text: #1e293b;
  --form-placeholder: #94a3b8;
  --form-radius: 8px;
  --form-transition: all 0.2s ease;
}

.form {
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--form-text);
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  background: var(--form-bg);
  border: 2px solid var(--form-border);
  border-radius: var(--form-radius);
  font-size: 1rem;
  font-family: inherit;
  color: var(--form-text);
  transition: var(--form-transition);
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: var(--form-placeholder);
}
```

## フォーカススタイル

入力中であることを明確に示します。

```css
.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--form-border-focus);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
```

**ポイント**:
- `outline: none`でデフォルトのアウトラインを消す
- `box-shadow`でカスタムフォーカス表示
- 色と影でフォーカスを明確に

### 🤖 AIでの改善質問

```
outline: noneを使うとアクセシビリティに問題があると聞きました。
正しい対処法を教えてください。
```

## 無効状態

入力できない状態のスタイル。

```css
.form-input:disabled,
.form-textarea:disabled {
  background: #f1f5f9;
  color: #94a3b8;
  cursor: not-allowed;
  opacity: 0.6;
}
```

HTMLでの使用：

```html
<input type="text" class="form-input" disabled value="変更できません">
```

## エラー表示

バリデーションエラーを表示します。

```html
<div class="form-group">
  <label for="email" class="form-label">メールアドレス</label>
  <input type="email" id="email" class="form-input form-input-error" value="invalid-email">
  <span class="form-error">正しいメールアドレスを入力してください</span>
</div>
```

```css
.form-input-error {
  border-color: #ef4444;
}

.form-input-error:focus {
  border-color: #ef4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.form-error {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #ef4444;
}
```

## 成功状態

入力が正しい時の表示。

```html
<div class="form-group">
  <label for="email" class="form-label">メールアドレス</label>
  <input type="email" id="email" class="form-input form-input-success" value="user@example.com">
  <span class="form-success">
    <span class="material-symbols-outlined">check_circle</span>
    正しい形式です
  </span>
</div>
```

```css
.form-input-success {
  border-color: #10b981;
}

.form-success {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #10b981;
}
```

## アイコン付き入力欄

```html
<div class="form-group">
  <label for="search" class="form-label">検索</label>
  <div class="form-input-wrapper">
    <span class="material-symbols-outlined form-icon">search</span>
    <input type="text" id="search" class="form-input form-input-with-icon" placeholder="検索...">
  </div>
</div>
```

```css
.form-input-wrapper {
  position: relative;
}

.form-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #94a3b8;
  font-size: 20px;
  pointer-events: none;
}

.form-input-with-icon {
  padding-left: 3rem;
}
```

**pointer-events: none**:
- アイコンがクリックイベントを妨げない
- 入力欄のクリックがスムーズ

### 🤖 AIに質問

```
右側にアイコン（例：クリアボタン）を配置したいです。
どう修正すればいいですか？
```

## セレクトボックス

```html
<div class="form-group">
  <label for="category" class="form-label">カテゴリ</label>
  <select id="category" class="form-select">
    <option value="">選択してください</option>
    <option value="bug">バグ報告</option>
    <option value="feature">機能要望</option>
    <option value="question">質問</option>
  </select>
</div>
```

```css
.form-select {
  width: 100%;
  padding: 0.75rem 1rem;
  background: var(--form-bg);
  border: 2px solid var(--form-border);
  border-radius: var(--form-radius);
  font-size: 1rem;
  font-family: inherit;
  color: var(--form-text);
  cursor: pointer;
  transition: var(--form-transition);
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%2394a3b8' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1.5rem;
  padding-right: 3rem;
}
```

**appearance: none**:
- ブラウザのデフォルトスタイルを消す
- カスタム矢印アイコンを表示

## 送信ボタン

```css
.form-submit {
  width: 100%;
  padding: 0.75rem 1.5rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: var(--form-radius);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.form-submit:hover {
  background: #2563eb;
}

.form-submit:active {
  transform: scale(0.98);
}
```

## まとめ

### 学んだこと

- `<label>`と`<input>`の関連付け
- フォーカス、無効、エラー、成功の各状態スタイル
- `::placeholder`でプレースホルダーのスタイル
- `position: absolute`でアイコン配置
- `appearance: none`でカスタムセレクトボックス

### AIとの学習のポイント

1. **アクセシビリティについて深く学ぶ**（label, outline, aria属性）
2. **バリデーションロジックをAIに相談**
3. **レイアウトパターンを質問**
   - 例：「横並びのフォームレイアウトにするには？」
4. **エラー処理の実装をAIに聞く**

### 🚀 次のステップ

- JavaScriptでリアルタイムバリデーション
- ファイルアップロード入力欄を作る
- 複雑なフォーム（ステップ形式）に挑戦
