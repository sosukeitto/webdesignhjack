import Link from "next/link";
import { getAllContent, getTipsByCategory } from "@/lib/content";
import TipCard from "@/components/TipCard";
import { getDifficultyLabel } from "@/lib/types";
import styles from "./page.module.css";

export default function Home() {
  // Load Tips by category (3 items each)
  const elementTips = getTipsByCategory("element").slice(0, 3);
  const layoutTips = getTipsByCategory("layout").slice(0, 3);
  const sectionTips = getTipsByCategory("section").slice(0, 3);
  const decorationTips = getTipsByCategory("decoration").slice(0, 3);
  const interactionTips = getTipsByCategory("interaction").slice(0, 3);

  // Load all Flow items
  const allFlow = getAllContent("flow");

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleMain}>Web Design H/Jack</span>
            <span className={styles.heroTitleSub}>ウェブデザイン・ハイジャック</span>
          </h1>
          <p className={styles.heroDescription}>
            実践的なWebデザイン・コーディング学習メディア
          </p>
        </div>
      </section>

      <main className={styles.main}>
        {/* Tips Section */}
        <section className={styles.majorSection}>
          <div className={styles.majorSectionHeader}>
            <div className={styles.majorSectionHeaderContent}>
              <h2 className={styles.majorSectionTitle}>Tips</h2>
              <p className={styles.majorSectionDescription}>
                実践的なWebデザイン・コーディングTips
              </p>
            </div>
            <Link href="/tips" className={styles.sectionLink}>
              すべて見る →
            </Link>
          </div>

          {/* Element Category */}
          {elementTips.length > 0 && (
            <div className={styles.subSection}>
              <div className={styles.subSectionHeader}>
                <h3 className={styles.subSectionTitle}>
                  <span className={styles.categoryIcon}>🧩</span>
                  要素
                </h3>
                <p className={styles.subSectionDescription}>
                  ボタン、カード、画像など基本のパーツを作る
                </p>
                <Link href="/tips?category=element" className={styles.subSectionLink}>
                  もっと見る →
                </Link>
              </div>
              <div className={styles.grid}>
                {elementTips.map((tip) => (
                  <TipCard key={tip.slug} tip={tip} />
                ))}
              </div>
            </div>
          )}

          {/* Layout Category */}
          {layoutTips.length > 0 && (
            <div className={styles.subSection}>
              <div className={styles.subSectionHeader}>
                <h3 className={styles.subSectionTitle}>
                  <span className={styles.categoryIcon}>📐</span>
                  レイアウト
                </h3>
                <p className={styles.subSectionDescription}>
                  パーツを並べる配置のテクニック
                </p>
                <Link href="/tips?category=layout" className={styles.subSectionLink}>
                  もっと見る →
                </Link>
              </div>
              <div className={styles.grid}>
                {layoutTips.map((tip) => (
                  <TipCard key={tip.slug} tip={tip} />
                ))}
              </div>
            </div>
          )}

          {/* Section Category */}
          {sectionTips.length > 0 && (
            <div className={styles.subSection}>
              <div className={styles.subSectionHeader}>
                <h3 className={styles.subSectionTitle}>
                  <span className={styles.categoryIcon}>🏗️</span>
                  セクション
                </h3>
                <p className={styles.subSectionDescription}>
                  ヘッダー、フッターなど大きなブロックを作る
                </p>
                <Link href="/tips?category=section" className={styles.subSectionLink}>
                  もっと見る →
                </Link>
              </div>
              <div className={styles.grid}>
                {sectionTips.map((tip) => (
                  <TipCard key={tip.slug} tip={tip} />
                ))}
              </div>
            </div>
          )}

          {/* Decoration Category */}
          {decorationTips.length > 0 && (
            <div className={styles.subSection}>
              <div className={styles.subSectionHeader}>
                <h3 className={styles.subSectionTitle}>
                  <span className={styles.categoryIcon}>✨</span>
                  装飾
                </h3>
                <p className={styles.subSectionDescription}>
                  グラデーション、アニメーションなど見た目をかっこよく
                </p>
                <Link href="/tips?category=decoration" className={styles.subSectionLink}>
                  もっと見る →
                </Link>
              </div>
              <div className={styles.grid}>
                {decorationTips.map((tip) => (
                  <TipCard key={tip.slug} tip={tip} />
                ))}
              </div>
            </div>
          )}

          {/* Interaction Category */}
          {interactionTips.length > 0 && (
            <div className={styles.subSection}>
              <div className={styles.subSectionHeader}>
                <h3 className={styles.subSectionTitle}>
                  <span className={styles.categoryIcon}>⚡</span>
                  インタラクション
                </h3>
                <p className={styles.subSectionDescription}>
                  スクロール、メニューなど動きをつける
                </p>
                <Link href="/tips?category=interaction" className={styles.subSectionLink}>
                  もっと見る →
                </Link>
              </div>
              <div className={styles.grid}>
                {interactionTips.map((tip) => (
                  <TipCard key={tip.slug} tip={tip} />
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Flow Section */}
        <section className={styles.majorSection}>
          <div className={styles.majorSectionHeader}>
            <div className={styles.majorSectionHeaderContent}>
              <h2 className={styles.majorSectionTitle}>Flow</h2>
              <p className={styles.majorSectionDescription}>
                実際にサイトを作る時の流れを学ぶ
              </p>
            </div>
          </div>

          <div className={styles.grid}>
            {allFlow.map((flow) => (
              <Link
                key={flow.slug}
                href={`/flow/${flow.slug}`}
                className={styles.flowCard}
              >
                <h3 className={styles.flowTitle}>{flow.title}</h3>
                <div className={styles.flowMeta}>
                  <span className={styles.difficulty}>{getDifficultyLabel(flow.difficulty)}</span>
                  <span className={styles.time}>{flow.estimatedTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
