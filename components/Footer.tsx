"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContents}>
        <div className={styles.footerMenu}>
          <nav>
            <ul>
              <li>
                <Link href="/tips">Tips</Link>
              </li>
              <li>
                <Link href="/flow">Flow</Link>
              </li>
              <li>
                <Link href="#x">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#x">Contact</Link>
              </li>
            </ul>
          </nav>

          <button className={styles.backToTopBtn} onClick={scrollToTop}>
            <span className={styles.btnLabel}>Page top</span>
            <span className="material-symbols-outlined">arrow_upward</span>
          </button>
        </div>

        <div className={styles.footerCopy}>
          <small>
            <span className={styles.copy}>copyright 2025 </span>
            <span className={styles.siteTitle}>ウェブデザインハック</span>
            <span className={styles.copy}>All rights reserved.</span>
          </small>
        </div>
      </div>
    </footer>
  );
}
