import Link from "next/link";
import type { CategoryInfo } from "@/lib/types";
import styles from "./CategoryCard.module.css";

interface CategoryCardProps {
  category: CategoryInfo;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/tips?category=${category.id}`} className={styles.card}>
      <div className={styles.icon}>{category.icon}</div>
      <h3 className={styles.label}>{category.label}</h3>
      <p className={styles.description}>{category.description}</p>
    </Link>
  );
}
