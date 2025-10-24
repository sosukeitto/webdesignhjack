import Link from "next/link";
import { getAllContent } from "@/lib/content";
import type { Section } from "@/lib/types";
import SectionContent from "@/components/SectionContent";
import styles from "./page.module.css";

interface SectionPageProps {
  params: Promise<{
    section: string;
  }>;
}

// Generate static params for sections
export async function generateStaticParams() {
  return [
    { section: "tips" },
    { section: "flow" },
  ];
}

export default async function SectionPage({ params }: SectionPageProps) {
  const { section } = await params;

  // Load content on server side
  const content = getAllContent(section === "tips" || section === "flow" ? section as Section : undefined);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.header}>
          <Link href="/" className={styles.backLink}>
            ← ホームへ戻る
          </Link>
          <h1 className={styles.title}>
            {section === "tips" ? "Tips一覧" : "制作の流れ"}
          </h1>
          <p className={styles.description}>
            {section === "tips"
              ? "実践的なWebデザイン・コーディングTips"
              : "実際にサイトを作る時の流れを学ぶ"}
          </p>
        </div>

        <SectionContent section={section} content={content} />
      </main>
    </div>
  );
}
