import Link from "next/link";
import { categories } from "@/lib/types";
import styles from "./ArticlePageFooter.module.css";

export default function ArticlePageFooter() {
  return (
    <div className={styles.pageFooter}>
      <div className={styles.pageFooterCategory}>
        <ul>
          {categories.map((cat) => (
            <li key={cat.id}>
              <Link href={`/tips?category=${cat.id}`}>
                {cat.icon} {cat.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
