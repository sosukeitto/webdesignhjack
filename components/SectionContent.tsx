"use client";

import { useState } from "react";
import Link from "next/link";
import type { ContentMetadata, Category } from "@/lib/types";
import { isTipMetadata } from "@/lib/types";
import TipCard from "@/components/TipCard";
import CategoryFilter from "@/components/CategoryFilter";
import styles from "./SectionContent.module.css";

interface SectionContentProps {
  section: string;
  content: ContentMetadata[];
}

export default function SectionContent({ section, content }: SectionContentProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">("all");

  // Filter content by category (for Tips only)
  const filteredContent = content.filter((item) => {
    if (selectedCategory === "all") return true;
    if (isTipMetadata(item)) {
      return item.category === selectedCategory;
    }
    return true;
  });

  return (
    <>
      {section === "tips" && (
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
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
                  <span className={styles.difficulty}>{item.difficulty}</span>
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
