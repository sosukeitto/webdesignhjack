"use client";

import Link from "next/link";
import { Breadcrumbs, Breadcrumb } from "react-aria-components";
import styles from "./PageNav.module.css";

interface PageNavProps {
  section: string;
}

export default function PageNav({ section }: PageNavProps) {
  return (
    <nav className={styles.pageNav}>
      <Link href={`/${section}`} className={styles.backBtn}>
        <span className="material-symbols-outlined">arrow_back</span>
      </Link>
      <Breadcrumbs className={styles.breadcrumbs}>
        <Breadcrumb>
          <Link href="/">ホーム</Link>
        </Breadcrumb>
        <Breadcrumb>
          <Link href={`/${section}`}>
            {section === "tips" ? "すべての記事" : "制作の流れ"}
          </Link>
        </Breadcrumb>
      </Breadcrumbs>
    </nav>
  );
}
