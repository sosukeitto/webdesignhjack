import { getAllContent } from "@/lib/content";
import type { Section } from "@/lib/types";
import SectionContent from "@/components/SectionContent";
import ArchiveNav from "@/components/archive/ArchiveNav";
import ArchiveHeader from "@/components/archive/ArchiveHeader";
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

  const sectionConfig = {
    tips: {
      section: "tips",
      title: "Tips一覧",
      description: "実践的なWebデザイン・コーディングTips",
    },
    flow: {
      section: "flow",
      title: "制作の流れ",
      description: "実際にサイトを作る時の流れを学ぶ",
    },
  };

  const config = sectionConfig[section as "tips" | "flow"] || sectionConfig.tips;

  return (
    <div className={styles.page}>
      <ArchiveNav section={config.section} title={config.title} />

      <ArchiveHeader
        section={config.section}
        title={config.title}
        description={config.description}
      />

      <main className={styles.main}>
        <SectionContent section={section} content={content} />
      </main>
    </div>
  );
}
