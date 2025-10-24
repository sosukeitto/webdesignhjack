import Link from "next/link";
import type { TipMetadata } from "@/lib/types";
import { categories } from "@/lib/types";
import styles from "./TipCard.module.css";

interface TipCardProps {
  tip: TipMetadata;
}

export default function TipCard({ tip }: TipCardProps) {
  const category = categories.find((c) => c.id === tip.category);

  return (
    <Link href={`/tips/${tip.slug}`} className={styles.card}>
      <div className={styles.header}>
        {category && (
          <span className={styles.categoryBadge}>
            <span className={styles.categoryIcon}>{category.icon}</span>
            <span>{category.label}</span>
          </span>
        )}
        <span className={styles.difficulty}>{tip.difficulty}</span>
      </div>

      <h3 className={styles.title}>{tip.title}</h3>

      <div className={styles.tags}>
        {tip.tags.slice(0, 3).map((tag) => (
          <span key={tag} className={styles.tag}>
            #{tag}
          </span>
        ))}
      </div>

      <div className={styles.footer}>
        <span className={styles.time}>{tip.estimatedTime}</span>
      </div>
    </Link>
  );
}
