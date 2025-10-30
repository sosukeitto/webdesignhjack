import Link from "next/link";
import { format } from "date-fns";
import type { ContentMetadata, CategoryInfo } from "@/lib/types";
import { isTipMetadata } from "@/lib/types";
import styles from "./PageHeader.module.css";

interface PageHeaderProps {
  section: string;
  metadata: ContentMetadata;
  category: CategoryInfo | null;
}

export default function PageHeader({
  section,
  metadata,
  category,
}: PageHeaderProps) {
  return (
    <div className={styles.pageHeader}>
      <div className={styles.postLogo}>
        <span>{section === "tips" ? "tips" : "flow"}</span>
      </div>

      {isTipMetadata(metadata) && (
        <div className={styles.pageHeaderTag}>
          <span className={styles.dataLabel} data-char=":">
            tag
          </span>
          <ul>
            {metadata.tags.map((tag) => (
              <li key={tag}>
                <Link href={`/tips?tag=${tag}`}>{tag}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className={styles.pageHeaderMeta}>
        <div className={styles.dateWrapper}>
          <span className={styles.dataLabel} data-char=":">
            date
          </span>
          <time dateTime={metadata.publishedAt}>
            {format(new Date(metadata.publishedAt), "yyyy-MM-dd")}
          </time>
        </div>
        {category && (
          <div className={styles.categoryWrapper}>
            <span className={styles.dataLabel} data-char=":">
              category
            </span>
            <Link href={`/tips?category=${category.id}`}>
              {category.label}
            </Link>
          </div>
        )}
      </div>

      <div className={styles.postHeaderThumbnail}>
        {/* Thumbnail can be added here */}
      </div>

      <div className={styles.postHeaderTitle}>
        <h1>{metadata.title}</h1>
      </div>
    </div>
  );
}
