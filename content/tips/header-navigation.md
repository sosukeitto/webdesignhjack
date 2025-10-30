---
title: "ヘッダーナビゲーション"
slug: "header-navigation"
section: "tips"
category: "section"
difficulty: "intermediate"
priority: "high"
tags: ["header", "navigation", "hamburger-menu", "responsive", "position-sticky", "javascript"]
estimatedTime: "20分"
publishedAt: "2025-01-15"
---

# ヘッダーナビゲーション

デスクトップとモバイルの両方で使いやすいナビゲーションメニューを作りましょう。

## AIと一緒に学ぶポイント

### 🤖 AIへの効果的な質問例

```
レスポンシブ対応のヘッダーナビゲーションを作りたいです。
要件：
- デスクトップでは横並び
- モバイルではハンバーガーメニュー
- スムーズなアニメーション
```

## 基本のHTML構造

```html
<header class="header">
  <div class="header-container">
    <a href="/" class="header-logo">
      <span class="material-symbols-outlined">code</span>
      <span>MyApp</span>
    </a>

    <nav class="header-nav">
      <ul class="nav-list">
        <li><a href="/" class="nav-link">ホーム</a></li>
        <li><a href="/about" class="nav-link">About</a></li>
        <li><a href="/services" class="nav-link">Services</a></li>
        <li><a href="/contact" class="nav-link">Contact</a></li>
      </ul>
    </nav>

    <button class="header-toggle" aria-label="メニューを開く">
      <span class="material-symbols-outlined">menu</span>
    </button>
  </div>
</header>
```

**ポイント**:
- `<header>`でセマンティックな構造
- `<nav>`でナビゲーション領域を明示
- ハンバーガーボタンに`aria-label`でアクセシビリティ対応

## デスクトップのスタイル

まずはデスクトップ（大画面）のスタイルから。

```css
:root {
  --header-height: 64px;
  --header-bg: #ffffff;
  --header-border: #e2e8f0;
  --header-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  --nav-link-color: #64748b;
  --nav-link-hover: #3b82f6;
}

.header {
  position: sticky;
  top: 0;
  width: 100%;
  height: var(--header-height);
  background: var(--header-bg);
  border-bottom: 1px solid var(--header-border);
  box-shadow: var(--header-shadow);
  z-index: 100;
}

.header-container {
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  text-decoration: none;
}
```

**position: sticky**:
- スクロールしても上部に固定
- `top: 0`で上端に配置
- `z-index`で他の要素の上に表示

### 🤖 AIに聞いてみよう

```
position: stickyとposition: fixedの違いを教えてください。
どういう時にどちらを使うべきですか？
```

## ナビゲーションリンク

```css
.nav-list {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  position: relative;
  color: var(--nav-link-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover {
  color: var(--nav-link-hover);
}

/* アクティブ状態のアンダーライン */
.nav-link::after {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--nav-link-hover);
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}
```

## ハンバーガーボタン

モバイル用のメニュー開閉ボタン。

```css
.header-toggle {
  display: none; /* デスクトップでは非表示 */
  width: 40px;
  height: 40px;
  padding: 0;
  background: none;
  border: none;
  color: #1e293b;
  cursor: pointer;
  border-radius: 8px;
  transition: background 0.2s;
}

.header-toggle:hover {
  background: #f1f5f9;
}
```

## モバイル対応

画面幅が768px以下の時のスタイル。

```css
@media (max-width: 768px) {
  /* ハンバーガーボタンを表示 */
  .header-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* ナビゲーションを隠す（初期状態） */
  .header-nav {
    position: fixed;
    top: var(--header-height);
    left: 0;
    width: 100%;
    height: calc(100vh - var(--header-height));
    background: var(--header-bg);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    overflow-y: auto;
  }

  /* メニューが開いた時 */
  .header-nav.active {
    transform: translateX(0);
  }

  /* リンクを縦並びに */
  .nav-list {
    flex-direction: column;
    gap: 0;
    padding: 1rem;
  }

  .nav-link {
    display: block;
    padding: 1rem;
    border-bottom: 1px solid var(--header-border);
  }

  .nav-link::after {
    display: none; /* モバイルではアンダーラインを非表示 */
  }
}
```

**ポイント**:
- `transform: translateX(-100%)`で画面外に配置
- `.active`クラスで画面内に表示
- `transition`でスムーズなアニメーション

### 🤖 AIでの改善質問

```
メニューを右からスライドインさせたいです。
また、背景をオーバーレイで暗くする方法も教えてください。
```

## JavaScript実装

メニューの開閉をJavaScriptで制御します。

```javascript
// ハンバーガーメニューの開閉
const toggle = document.querySelector('.header-toggle');
const nav = document.querySelector('.header-nav');
const toggleIcon = toggle.querySelector('.material-symbols-outlined');

toggle.addEventListener('click', () => {
  const isActive = nav.classList.toggle('active');

  // アイコンを切り替え
  toggleIcon.textContent = isActive ? 'close' : 'menu';

  // aria-label を更新
  toggle.setAttribute('aria-label', isActive ? 'メニューを閉じる' : 'メニューを開く');

  // body のスクロールを制御
  document.body.style.overflow = isActive ? 'hidden' : '';
});

// リンククリック時にメニューを閉じる
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    toggleIcon.textContent = 'menu';
    toggle.setAttribute('aria-label', 'メニューを開く');
    document.body.style.overflow = '';
  });
});
```

### 🤖 AIに質問

```
このコードをReactコンポーネントで実装するには
どうすればいいですか？useStateを使った例を教えてください。
```

## オーバーレイ付きメニュー

メニューを開いた時に背景を暗くします。

HTMLに追加：

```html
<div class="header-overlay"></div>
```

CSS：

```css
.header-overlay {
  display: none;
  position: fixed;
  top: var(--header-height);
  left: 0;
  width: 100%;
  height: calc(100vh - var(--header-height));
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
}

.header-overlay.active {
  display: block;
}
```

JavaScript：

```javascript
const overlay = document.querySelector('.header-overlay');

toggle.addEventListener('click', () => {
  const isActive = nav.classList.toggle('active');
  overlay.classList.toggle('active', isActive);
  // ... 他の処理
});

// オーバーレイクリックでメニューを閉じる
overlay.addEventListener('click', () => {
  nav.classList.remove('active');
  overlay.classList.remove('active');
  toggleIcon.textContent = 'menu';
  document.body.style.overflow = '';
});
```

## ドロップダウンメニュー

サブメニューを追加します。

```html
<li class="nav-item has-dropdown">
  <a href="#" class="nav-link">
    Services
    <span class="material-symbols-outlined">expand_more</span>
  </a>
  <ul class="dropdown-menu">
    <li><a href="/web-design" class="dropdown-link">Web Design</a></li>
    <li><a href="/development" class="dropdown-link">Development</a></li>
    <li><a href="/consulting" class="dropdown-link">Consulting</a></li>
  </ul>
</li>
```

```css
.has-dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  margin-top: 0.5rem;
  padding: 0.5rem;
  background: white;
  border: 1px solid var(--header-border);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  list-style: none;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.2s;
}

.has-dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-link {
  display: block;
  padding: 0.75rem 1rem;
  color: var(--nav-link-color);
  text-decoration: none;
  border-radius: 4px;
  transition: background 0.2s;
}

.dropdown-link:hover {
  background: #f1f5f9;
  color: var(--nav-link-hover);
}
```

## まとめ

### 学んだこと

- `position: sticky`で固定ヘッダー
- メディアクエリでレスポンシブ対応
- `transform`でスライドアニメーション
- JavaScriptでメニューの開閉制御
- オーバーレイで背景を暗くする
- ドロップダウンメニューの実装

### AIとの学習のポイント

1. **positionプロパティの使い分けを学ぶ**（sticky, fixed, absolute）
2. **アニメーションのバリエーションを聞く**（スライド方向、速度など）
3. **フレームワークでの実装を相談**（React, Vue, Next.jsなど）
4. **アクセシビリティを深く学ぶ**
   - 例：「キーボード操作でメニューを開閉するには？」

### 🚀 次のステップ

- メガメニューに挑戦（大きなドロップダウン）
- スクロールで色が変わるヘッダー
- 検索バー付きヘッダー
- プログレスバー付きヘッダー
