import Link from "next/link";
import { format } from "date-fns";
import { categories } from "@/lib/types";
import type { ContentMetadata } from "@/lib/types";
import styles from "./PageSidebar.module.css";

interface PageSidebarProps {
  allTips: ContentMetadata[];
  allFlow: ContentMetadata[];
}

export default function PageSidebar({ allTips, allFlow }: PageSidebarProps) {
  return (
    <aside className={styles.pageSide}>
      {/* Category Section */}
      <section className={styles.category}>
        <div className={styles.asideSectionTitle}>
          <p>カテゴリー</p>
          <h2>category</h2>
        </div>
        <ul>
          {categories.map((cat) => (
            <li key={cat.id}>
              <Link href={`/tips?category=${cat.id}`}>
                <span className={styles.label}>
                  {cat.icon} {cat.label}
                </span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Flow Section */}
      <section className={styles.flow}>
        <div className={styles.asideSectionTitle}>
          <p>サイト制作の流れ</p>
          <h2>Flow</h2>
        </div>
        <ul>
          {allFlow.map((item, index) => (
            <li key={item.slug}>
              <Link href={`/flow/${item.slug}`}>
                <span className={styles.no}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={styles.label}>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Blog Section */}
      <section className={styles.blog}>
        <div className={styles.asideSectionTitle}>
          <p>最近の記事</p>
          <h2>Recent</h2>
        </div>
        <ul>
          {allTips.map((tip) => (
            <li key={tip.slug}>
              <Link href={`/tips/${tip.slug}`}>
                <span className={styles.labelWrapper}>
                  <span className={styles.titleText}>{tip.title}</span>
                  <time dateTime={tip.publishedAt}>
                    {format(new Date(tip.publishedAt), "yyyy-MM-dd")}
                  </time>
                </span>
                <div className={styles.thumbnail}>
                  {/* Thumbnail can be added here */}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
