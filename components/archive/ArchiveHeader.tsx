import styles from "./ArchiveHeader.module.css";

interface ArchiveHeaderProps {
  section: string;
  title: string;
  description: string;
}

export default function ArchiveHeader({
  section,
  title,
  description,
}: ArchiveHeaderProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroLabel}>
          <span className={styles.heroLabelText}>{section}</span>
        </div>
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroDescription}>{description}</p>
      </div>
    </section>
  );
}
