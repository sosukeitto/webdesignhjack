---
title: "ボタンの作り方"
slug: "button-basic"
section: "tips"
category: "element"
tags: ["button", "css", "beginner"]
difficulty: "beginner"
estimatedTime: "10min"
publishedAt: "2025-01-15"
---

# 🎯 できること

クリックできるボタンが作れる

## 💻 コード

```html
<button class="btn">ボタン</button>
```

```css
.btn {
  padding: 12px 24px;
  background: #ff1a1a;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  background: #e61717;
}
```

## 💡 ポイント

- `padding` で余白を調整
- `border-radius` で角を丸く
- `:hover` でホバー時の色変化

## 🎨 応用例

### 大きなボタン

```css
.btn-large {
  padding: 16px 32px;
  font-size: 1.125rem;
  font-weight: 600;
}
```

### アウトラインボタン

```css
.btn-outline {
  padding: 12px 24px;
  background: transparent;
  color: #ff1a1a;
  border: 2px solid #ff1a1a;
  border-radius: 4px;
  cursor: pointer;
}

.btn-outline:hover {
  background: #ff1a1a;
  color: #fff;
}
```

## 📚 まとめ

基本的なボタンの作り方を学びました。
次は[カードの作り方](/tips/card-basic)に進みましょう！
