import Link from "next/link";
import { getContentBySlug, getAllContent } from "@/lib/content";
import type { Section } from "@/lib/types";
import { isTipMetadata } from "@/lib/types";
import { categories } from "@/lib/types";
import ArticleContent from "@/components/ArticleContent";
import ProgressTracker from "@/components/ProgressTracker";
import { format } from "date-fns";
import styles from "./page.module.css";

interface ArticlePageProps {
  params: Promise<{
    section: string;
    slug: string;
  }>;
}

// Generate static params for all articles
export async function generateStaticParams() {
  const allContent = getAllContent();

  return allContent.map((content) => ({
    section: content.section,
    slug: content.slug,
  }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { section, slug } = await params;

  const content = await getContentBySlug(section as Section, slug);
  const { metadata, htmlContent } = content;

  const category = isTipMetadata(metadata)
    ? categories.find((c) => c.id === metadata.category)
    : null;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Header */}
        <div className={styles.header}>
          <Link href={`/${section}`} className={styles.backLink}>
            ← {section === "tips" ? "Tips一覧" : "制作の流れ"}へ戻る
          </Link>

          {/* Metadata */}
          <div className={styles.meta}>
            {category && (
              <span className={styles.categoryBadge}>
                <span className={styles.categoryIcon}>{category.icon}</span>
                <span>{category.label}</span>
              </span>
            )}
            <span className={styles.difficulty}>{metadata.difficulty}</span>
            <span className={styles.time}>{metadata.estimatedTime}</span>
            <span className={styles.date}>
              {format(new Date(metadata.publishedAt), "yyyy/MM/dd")}
            </span>
          </div>

          <h1 className={styles.title}>{metadata.title}</h1>

          {isTipMetadata(metadata) && (
            <div className={styles.tags}>
              {metadata.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Article Content */}
        <article className={styles.article}>
          <ArticleContent htmlContent={htmlContent} />
        </article>

        {/* Progress Tracker */}
        <div className={styles.actions}>
          <ProgressTracker slug={slug} />
        </div>
      </main>
    </div>
  );
}
