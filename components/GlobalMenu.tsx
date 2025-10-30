"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./GlobalMenu.module.css";

interface GlobalMenuProps {
  isOpen: boolean;
  onClose: () => void;
  allTags: string[];
}

export default function GlobalMenu({ isOpen, onClose, allTags }: GlobalMenuProps) {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const handleKeywordSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (keyword.trim()) {
      // TODO: キーワード検索の実装
      console.log("Keyword search:", keyword);
      onClose();
    }
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
    router.push(`/tags/${tag}`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.menu} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className={styles.content}>
          {/* 左側: ナビゲーションメニュー */}
          <div className={styles.navigation}>
            <h2 className={styles.sectionTitle}>Navigation</h2>
            <nav className={styles.navList}>
              <Link href="/" className={styles.navLink} onClick={onClose}>
                <span className="material-symbols-outlined">home</span>
                <span>ホーム</span>
              </Link>
              <Link href="/tips" className={styles.navLink} onClick={onClose}>
                <span className="material-symbols-outlined">lightbulb</span>
                <span>Tips一覧</span>
              </Link>
              <Link href="/flow" className={styles.navLink} onClick={onClose}>
                <span className="material-symbols-outlined">map</span>
                <span>Flow一覧</span>
              </Link>
            </nav>

            <h3 className={styles.subsectionTitle}>Categories</h3>
            <nav className={styles.categoryList}>
              <Link href="/tips?category=element" className={styles.categoryLink} onClick={onClose}>
                <span className={styles.categoryIcon}>🧩</span>
                <span>要素</span>
              </Link>
              <Link href="/tips?category=layout" className={styles.categoryLink} onClick={onClose}>
                <span className={styles.categoryIcon}>📐</span>
                <span>レイアウト</span>
              </Link>
              <Link href="/tips?category=section" className={styles.categoryLink} onClick={onClose}>
                <span className={styles.categoryIcon}>🏗️</span>
                <span>セクション</span>
              </Link>
              <Link href="/tips?category=decoration" className={styles.categoryLink} onClick={onClose}>
                <span className={styles.categoryIcon}>✨</span>
                <span>装飾</span>
              </Link>
              <Link href="/tips?category=interaction" className={styles.categoryLink} onClick={onClose}>
                <span className={styles.categoryIcon}>⚡</span>
                <span>インタラクション</span>
              </Link>
              <Link href="/tips?category=project" className={styles.categoryLink} onClick={onClose}>
                <span className={styles.categoryIcon}>🚀</span>
                <span>プロジェクト</span>
              </Link>
            </nav>
          </div>

          {/* 右側: 検索 */}
          <div className={styles.search}>
            <h2 className={styles.sectionTitle}>Search</h2>

            {/* キーワード検索 */}
            <div className={styles.searchSection}>
              <h3 className={styles.searchLabel}>キーワード検索</h3>
              <form onSubmit={handleKeywordSearch} className={styles.searchForm}>
                <div className={styles.searchInputWrapper}>
                  <span className="material-symbols-outlined">search</span>
                  <input
                    type="text"
                    placeholder="検索キーワードを入力..."
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    className={styles.searchInput}
                  />
                </div>
                <button type="submit" className={styles.searchBtn}>
                  検索
                </button>
              </form>
            </div>

            {/* タグ検索 */}
            <div className={styles.searchSection}>
              <h3 className={styles.searchLabel}>タグから探す</h3>
              <div className={styles.tagGrid}>
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handleTagClick(tag)}
                    className={`${styles.tagBtn} ${selectedTag === tag ? styles.tagBtnActive : ""}`}
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
