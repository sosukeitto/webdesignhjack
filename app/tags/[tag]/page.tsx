import { getAllTags, getTipsByTag } from "@/lib/content";
import TipCard from "@/components/TipCard";
import ArchiveNav from "@/components/archive/ArchiveNav";
import ArchiveHeader from "@/components/archive/ArchiveHeader";
import styles from "./page.module.css";

interface TagPageProps {
  params: Promise<{
    tag: string;
  }>;
}

// Generate static params for all tags
export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({
    tag: tag,
  }));
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params;

  // Decode URL-encoded tag
  const decodedTag = decodeURIComponent(tag);

  // Load tips with this tag
  const tips = getTipsByTag(decodedTag);

  return (
    <div className={styles.page}>
      <ArchiveNav section="tags" title={`タグ: ${decodedTag}`} />

      <ArchiveHeader
        section={`#${decodedTag}`}
        title={`タグ: ${decodedTag}`}
        description={`"${decodedTag}" タグが付いた記事一覧`}
      />

      <main className={styles.main}>
        <div className={styles.grid}>
          {tips.length === 0 && (
            <p className={styles.empty}>記事が見つかりませんでした</p>
          )}
          {tips.map((tip) => (
            <TipCard key={tip.slug} tip={tip} />
          ))}
        </div>
      </main>
    </div>
  );
}
