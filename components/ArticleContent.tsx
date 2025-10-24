"use client";

import { useEffect } from "react";
import styles from "./ArticleContent.module.css";

interface ArticleContentProps {
  htmlContent: string;
}

export default function ArticleContent({ htmlContent }: ArticleContentProps) {
  useEffect(() => {
    // Add copy buttons to code blocks after component mounts
    const codeBlocks = document.querySelectorAll(".code-block-wrapper");

    codeBlocks.forEach((wrapper) => {
      const pre = wrapper.querySelector("pre");
      const header = wrapper.querySelector(".code-block-header");

      if (pre && header && !header.querySelector("button")) {
        // Create a container for the copy button
        const buttonContainer = document.createElement("div");
        buttonContainer.className = styles.copyButtonContainer;

        // For now, we'll use a simple approach
        // In production, you might want to use a portal or different approach
        header.appendChild(buttonContainer);
      }
    });
  }, [htmlContent]);

  return (
    <div
      className={styles.article}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
