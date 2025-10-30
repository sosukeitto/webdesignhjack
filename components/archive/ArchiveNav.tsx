"use client";

import Link from "next/link";
import { Breadcrumbs, Breadcrumb } from "react-aria-components";
import styles from "./ArchiveNav.module.css";

interface ArchiveNavProps {
  section: string;
  title: string;
}

export default function ArchiveNav({ section, title }: ArchiveNavProps) {
  // Determine back link based on section
  const backLink = section === "tags" ? "/tips" : "/";

  return (
    <nav className={styles.nav}>
      <Link href={backLink} className={styles.backBtn}>
        <span className="material-symbols-outlined">arrow_back</span>
      </Link>
      <Breadcrumbs className={styles.breadcrumbs}>
        <Breadcrumb>
          <Link href="/">ホーム</Link>
        </Breadcrumb>
        {section === "tags" && (
          <Breadcrumb>
            <Link href="/tips">Tips一覧</Link>
          </Breadcrumb>
        )}
        <Breadcrumb>
          <span>{title}</span>
        </Breadcrumb>
      </Breadcrumbs>
    </nav>
  );
}
