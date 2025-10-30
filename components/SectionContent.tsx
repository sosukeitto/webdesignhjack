"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { ContentMetadata, Category, TipMetadata } from "@/lib/types";
import { isTipMetadata, getDifficultyLabel } from "@/lib/types";
import TipCard from "@/components/TipCard";
import CategoryFilter from "@/components/CategoryFilter";
import TagFilter from "@/components/TagFilter";
import styles from "./SectionContent.module.css";

interface SectionContentProps {
  section: string;
  content: ContentMetadata[];
}

export default function SectionContent({ section, content }: SectionContentProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">("all");
  const [selectedTag, setSelectedTag] = useState<string | "all">("all");

  // Extract all unique tags from Tips
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    content.forEach((item) => {
      if (isTipMetadata(item)) {
        item.tags.forEach((tag) => tags.add(tag));
      }
    });
    return Array.from(tags).sort();
  }, [content]);

  // Filter content by category and tag (for Tips only)
  const filteredContent = content.filter((item) => {
    if (isTipMetadata(item)) {
      // Category filter
      if (selectedCategory !== "all" && item.category !== selectedCategory) {
        return false;
      }
      // Tag filter
      if (selectedTag !== "all" && !item.tags.includes(selectedTag)) {
        return false;
      }
      return true;
    }
    return true;
  });

  return (
    <>
      {section === "tips" && (
        <>
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          <TagFilter
            tags={allTags}
            selectedTag={selectedTag}
            onTagChange={setSelectedTag}
          />
        </>
      )}

      <div className={styles.grid}>
        {filteredContent.length === 0 && (
          <p className={styles.empty}>記事が見つかりませんでした</p>
        )}
        {filteredContent.map((item) => {
          if (isTipMetadata(item)) {
            return <TipCard key={item.slug} tip={item} />;
          } else {
            // Flow card (simple card)
            return (
              <Link
                key={item.slug}
                href={`/flow/${item.slug}`}
                className={styles.flowCard}
              >
                <h3 className={styles.flowTitle}>{item.title}</h3>
                <div className={styles.flowMeta}>
                  <span className={styles.difficulty}>{getDifficultyLabel(item.difficulty)}</span>
                  <span className={styles.time}>{item.estimatedTime}</span>
                </div>
              </Link>
            );
          }
        })}
      </div>
    </>
  );
}
