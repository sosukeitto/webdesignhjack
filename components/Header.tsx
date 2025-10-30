"use client";

import { useState } from "react";
import Link from "next/link";
import GlobalMenu from "./GlobalMenu";
import styles from "./Header.module.css";

interface HeaderProps {
  allTags: string[];
}

export default function Header({ allTags }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContents}>
          <h1 className={styles.headerLogo}>
            <Link href="/">ウェブデザインハック</Link>
          </h1>

          <button className={styles.iconBtn} onClick={handleMenuToggle}>
            <span className={styles.btnLabel}>Menu</span>
            <span className="material-symbols-outlined">manage_search</span>
          </button>
        </div>
      </header>

      <GlobalMenu
        isOpen={isMenuOpen}
        onClose={handleMenuClose}
        allTags={allTags}
      />
    </>
  );
}
