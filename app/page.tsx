import Link from "next/link";
import { getAllContent } from "@/lib/content";
import { categories } from "@/lib/types";
import type { TipMetadata } from "@/lib/types";
import CategoryCard from "@/components/CategoryCard";
import TipCard from "@/components/TipCard";
import styles from "./page.module.css";

export default function Home() {
  const allContent = getAllContent();
  const recentTips = allContent
    .filter((content) => content.section === "tips")
    .slice(0, 6) as TipMetadata[];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.title}>Web Design H/Jack</h1>
          <p className={styles.subtitle}>
            実践的なWebデザイン・コーディング学習メディア
          </p>
        </section>

        {/* Categories */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>カテゴリから探す</h2>
          <div className={styles.categories}>
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>

        {/* Recent Tips */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>最近のTips</h2>
            <Link href="/tips" className={styles.viewAll}>
              すべて見る →
            </Link>
          </div>
          <div className={styles.tips}>
            {recentTips.map((tip) => (
              <TipCard key={tip.slug} tip={tip} />
            ))}
          </div>
        </section>

        {/* Flow */}
        <section className={styles.section}>
          <div className={styles.flowCard}>
            <h2 className={styles.flowTitle}>制作の流れを学ぶ</h2>
            <p className={styles.flowDescription}>
              Tipsを使って、実際にサイトを作る手順を学びましょう
            </p>
            <Link href="/flow" className={styles.flowButton}>
              制作の流れを見る
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
