import Link from "next/link";
import { getContentBySlug, getAllContent } from "@/lib/content";
import type { Section } from "@/lib/types";
import { isTipMetadata, categories } from "@/lib/types";
import ArticleContent from "@/components/ArticleContent";
import PageNav from "@/components/article/PageNav";
import PageHeader from "@/components/article/PageHeader";
import PageSidebar from "@/components/article/PageSidebar";
import ArticlePageFooter from "@/components/article/ArticlePageFooter";
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
    ? categories.find((c) => c.id === metadata.category) ?? null
    : null;

  // Get all content for sidebar
  const allTips = getAllContent("tips").slice(0, 5);
  const allFlow = getAllContent("flow").slice(0, 7);

  return (
    <div className={styles.wrapper}>
      <main className={styles.mainContents}>
        <PageNav section={section} />

        <PageHeader section={section} metadata={metadata} category={category} />

        <div className={styles.pageContents}>
          <div className={styles.pageMain}>
            <article className={styles.postContent}>
              <ArticleContent htmlContent={htmlContent} />
            </article>

            <section className={styles.shareBtns}>
              <h2>Share</h2>
              <ul>
                <li>
                  <Link href="#x">X(Twitter)</Link>
                </li>
                <li>
                  <Link href="#x">Facebook</Link>
                </li>
                <li>
                  <Link href="#x">Line</Link>
                </li>
              </ul>
            </section>
          </div>

          <PageSidebar allTips={allTips} allFlow={allFlow} />
        </div>

        <ArticlePageFooter />
      </main>
    </div>
  );
}
