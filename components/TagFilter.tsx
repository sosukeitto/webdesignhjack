"use client";

import Link from "next/link";
import styles from "./TagFilter.module.css";

interface TagFilterProps {
  tags: string[];
  selectedTag: string | "all";
  onTagChange: (tag: string | "all") => void;
}

export default function TagFilter({
  tags,
  selectedTag,
  onTagChange,
}: TagFilterProps) {
  if (tags.length === 0) return null;

  return (
    <div className={styles.filter}>
      <div className={styles.filterHeader}>
        <span className={styles.filterLabel}>タグで絞り込み</span>
      </div>
      <div className={styles.tags}>
        <button
          onClick={() => onTagChange("all")}
          className={`${styles.tag} ${
            selectedTag === "all" ? styles.active : ""
          }`}
        >
          すべて
        </button>

        {tags.map((tag) => (
          <Link
            key={tag}
            href={`/tags/${tag}`}
            className={`${styles.tag} ${
              selectedTag === tag ? styles.active : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              onTagChange(tag);
            }}
          >
            #{tag}
          </Link>
        ))}
      </div>
    </div>
  );
}
