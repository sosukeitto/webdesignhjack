"use client";

import { useState, useEffect } from "react";
import { Check } from "lucide-react";
import { saveProgress, getArticleProgress } from "@/lib/progress";
import type { ProgressStatus } from "@/lib/progress";
import styles from "./ProgressTracker.module.css";

interface ProgressTrackerProps {
  slug: string;
}

export default function ProgressTracker({ slug }: ProgressTrackerProps) {
  const [status, setStatus] = useState<ProgressStatus | null>(null);

  useEffect(() => {
    // Load progress on mount
    const progress = getArticleProgress(slug);
    if (progress) {
      setStatus(progress.status);
    } else {
      // Automatically mark as reading when viewing
      saveProgress(slug, "reading");
      setStatus("reading");
    }
  }, [slug]);

  const handleComplete = () => {
    saveProgress(slug, "completed");
    setStatus("completed");
  };

  if (status === "completed") {
    return (
      <div className={`${styles.tracker} ${styles.completed}`}>
        <Check size={20} />
        <span>読了済み</span>
      </div>
    );
  }

  return (
    <button onClick={handleComplete} className={styles.tracker}>
      <Check size={20} />
      <span>読了にする</span>
    </button>
  );
}
