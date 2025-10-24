// Progress status types
export type ProgressStatus = "reading" | "completed";

// Progress data structure
export interface Progress {
  [slug: string]: {
    status: ProgressStatus;
    lastRead: string; // ISO date
    scrollPosition?: number;
  };
}

// User data structure
export interface UserData {
  progress: Progress;
  lastVisited: string; // slug of last visited article
}

const STORAGE_KEY = "webdesignhjack_userdata";

// Get all progress data
export function getProgress(): Progress {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      return {};
    }

    const userData: UserData = JSON.parse(data);
    return userData.progress || {};
  } catch (error) {
    console.error("Error reading progress:", error);
    return {};
  }
}

// Save progress for a specific article
export function saveProgress(
  slug: string,
  status: ProgressStatus,
  scrollPosition?: number
): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    const data = localStorage.getItem(STORAGE_KEY);
    let userData: UserData;

    if (!data) {
      userData = {
        progress: {},
        lastVisited: slug,
      };
    } else {
      userData = JSON.parse(data);
    }

    // Update progress
    userData.progress[slug] = {
      status,
      lastRead: new Date().toISOString(),
      scrollPosition,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
  } catch (error) {
    console.error("Error saving progress:", error);
  }
}

// Get progress for a specific article
export function getArticleProgress(slug: string): {
  status: ProgressStatus;
  lastRead: string;
  scrollPosition?: number;
} | null {
  const progress = getProgress();
  return progress[slug] || null;
}

// Get last visited article slug
export function getLastVisited(): string | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      return null;
    }

    const userData: UserData = JSON.parse(data);
    return userData.lastVisited || null;
  } catch (error) {
    console.error("Error reading last visited:", error);
    return null;
  }
}

// Save last visited article
export function saveLastVisited(slug: string): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    const data = localStorage.getItem(STORAGE_KEY);
    let userData: UserData;

    if (!data) {
      userData = {
        progress: {},
        lastVisited: slug,
      };
    } else {
      userData = JSON.parse(data);
      userData.lastVisited = slug;
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
  } catch (error) {
    console.error("Error saving last visited:", error);
  }
}

// Calculate progress rate for a category
export function getCategoryProgress(
  category: string,
  totalArticles: number
): number {
  const progress = getProgress();
  const completed = Object.keys(progress).filter(
    (slug) => progress[slug].status === "completed" && slug.includes(category)
  ).length;

  return totalArticles > 0 ? Math.round((completed / totalArticles) * 100) : 0;
}

// Get all completed articles
export function getCompletedArticles(): string[] {
  const progress = getProgress();
  return Object.keys(progress).filter(
    (slug) => progress[slug].status === "completed"
  );
}

// Get reading articles
export function getReadingArticles(): string[] {
  const progress = getProgress();
  return Object.keys(progress).filter(
    (slug) => progress[slug].status === "reading"
  );
}

// Clear all progress (for testing)
export function clearProgress(): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error("Error clearing progress:", error);
  }
}
