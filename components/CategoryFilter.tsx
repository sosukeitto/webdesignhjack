"use client";

import { Tabs, TabList, Tab } from "react-aria-components";
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
    <Tabs
      selectedKey={selectedCategory}
      onSelectionChange={(key) => onCategoryChange(key as Category | "all")}
      className={styles.tabs}
    >
      <TabList className={styles.tabList}>
        <Tab id="all" className={styles.tab}>
          <span>すべて</span>
        </Tab>

        {categories.map((category) => (
          <Tab key={category.id} id={category.id} className={styles.tab}>
            <span className={styles.icon}>{category.icon}</span>
            <span>{category.label}</span>
          </Tab>
        ))}
      </TabList>
    </Tabs>
  );
}
