"use client";

import { categories } from "@/lib/types";
import type { Category } from "@/lib/types";
import styles from "./CategoryFilter.module.css";

interface CategoryFilterProps {
  selectedCategory: Category | "all";
  onCategoryChange: (category: Category | "all") => void;
}

export default function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className={styles.filter}>
      <button
        onClick={() => onCategoryChange("all")}
        className={`${styles.button} ${
          selectedCategory === "all" ? styles.active : ""
        }`}
      >
        すべて
      </button>

      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`${styles.button} ${
            selectedCategory === category.id ? styles.active : ""
          }`}
        >
          <span className={styles.icon}>{category.icon}</span>
          <span>{category.label}</span>
        </button>
      ))}
    </div>
  );
}
