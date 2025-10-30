---
title: "リンクのホバーエフェクト"
slug: "link-hover-effects"
section: "tips"
category: "element"
difficulty: "beginner"
priority: "high"
tags: ["link", "hover", "pseudo-elements", "animation", "underline"]
estimatedTime: "10分"
publishedAt: "2025-01-15"
---

# リンクのホバーエフェクト

クリックできることが一目でわかる、美しいリンクデザインを作りましょう。

## AIと一緒に学ぶポイント

### 🤖 AIへの効果的な質問例

```
ホバー時にアンダーラインがアニメーションするリンクを作りたいです。
要件：
- 左から右にアンダーラインが伸びる
- 滑らかなアニメーション
- 色はCSS変数で管理
```

## 基本のリンクスタイル

まずは、デフォルトのリンクスタイルをリセットして、シンプルなスタイルを作ります。

```css
:root {
  --link-color: #3b82f6;
  --link-hover: #2563eb;
  --link-transition: all 0.3s ease;
}

a {
  color: var(--link-color);
  text-decoration: none;
  transition: var(--link-transition);
}

a:hover {
  color: var(--link-hover);
}
```

**ポイント**:
- `text-decoration: none`でデフォルトの下線を消す
- `transition`でスムーズな色変化

## アンダーラインアニメーション

左から右に伸びるアンダーラインを作ります。

```css
.link-animated {
  position: relative;
  color: var(--link-color);
  text-decoration: none;
}

/* アンダーライン用の疑似要素 */
.link-animated::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 2px;
  background: var(--link-color);
  transition: width 0.3s ease;
}

.link-animated:hover::after {
  width: 100%;
}
```

**仕組み**:
1. `::after`疑似要素でアンダーラインを作る
2. 初期状態は`width: 0`（見えない）
3. ホバー時に`width: 100%`（全幅）に変化

### 🤖 AIでの改善質問

```
このアンダーラインを中央から左右に伸びるようにしたいです。
どう修正すればいいですか？
```

AIの回答を参考に：

```css
.link-animated::after {
  left: 50%;
  transform: translateX(-50%);
  width: 0;
}

.link-animated:hover::after {
  width: 100%;
}
```

## バリエーション：背景が広がるリンク

```css
.link-bg {
  position: relative;
  padding: 4px 8px;
  color: var(--link-color);
  text-decoration: none;
  z-index: 1;
}

.link-bg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: var(--link-color);
  transition: width 0.3s ease;
  z-index: -1;
}

.link-bg:hover {
  color: white;
}

.link-bg:hover::before {
  width: 100%;
}
```

**ポイント**:
- `::before`で背景を作る
- `z-index`でテキストの後ろに配置
- ホバー時にテキストの色を白に変更

## アクセシビリティ

リンクはキーボードでもアクセスできるようにしましょう。

```css
a:focus-visible {
  outline: 3px solid var(--link-color);
  outline-offset: 4px;
  border-radius: 2px;
}
```

### 🤖 AIへの質問

```
このリンクスタイルをスクリーンリーダー対応にするには
どうすればいいですか？
```

## まとめ

### 学んだこと

- `text-decoration: none`でデフォルトスタイルをリセット
- `::after`や`::before`疑似要素でエフェクトを追加
- `position: absolute`と`transition`でアニメーション
- `:focus-visible`でキーボードアクセシビリティ

### AIとの学習のポイント

1. **アニメーションの動きを具体的に説明**（「左から右に伸びる」など）
2. **疑似要素の使い方がわからない時はAIに聞く**
   - 例：「::afterと::beforeの違いは？」
   - 例：「z-indexって何？」
3. **アクセシビリティについてAIに質問**

### 🚀 次のステップ

- 色々なアンダーラインパターンを試してみよう
- ナビゲーションメニューに適用してみよう
- 装飾セクションでもっと凝ったエフェクトに挑戦
