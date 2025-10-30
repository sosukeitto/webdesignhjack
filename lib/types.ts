// Section types
export type Section = "tips" | "flow";

// Category types (for Tips only)
export type Category =
  | "element"
  | "layout"
  | "section"
  | "decoration"
  | "interaction"
  | "project";

// Difficulty types
export type Difficulty = "beginner" | "intermediate" | "advanced";

// Priority types
export type Priority = "high" | "medium" | "low";

// Base metadata interface (common fields)
export interface BaseMetadata {
  title: string;
  slug: string;
  section: Section;
  difficulty: Difficulty;
  priority?: Priority; // Optional: defaults to "medium" if not specified
  estimatedTime: string;
  publishedAt: string;
}

// Tips metadata interface
export interface TipMetadata extends BaseMetadata {
  section: "tips";
  category: Category;
  tags: string[];
}

// Flow metadata interface
export interface FlowMetadata extends BaseMetadata {
  section: "flow";
}

// Union type for all content
export type ContentMetadata = TipMetadata | FlowMetadata;

// Type guard functions
export function isTipMetadata(metadata: ContentMetadata): metadata is TipMetadata {
  return metadata.section === "tips";
}

export function isFlowMetadata(metadata: ContentMetadata): metadata is FlowMetadata {
  return metadata.section === "flow";
}

// Category information
export interface CategoryInfo {
  id: Category;
  label: string;
  icon: string;
  description: string;
}

export const categories: CategoryInfo[] = [
  {
    id: "element",
    label: "要素",
    icon: "🧩",
    description: "ボタン、カード、画像など\n基本のパーツを作る",
  },
  {
    id: "layout",
    label: "レイアウト",
    icon: "📐",
    description: "パーツを並べる\n配置のテクニック",
  },
  {
    id: "section",
    label: "セクション",
    icon: "🏗️",
    description: "ヘッダー、フッターなど\n大きなブロックを作る",
  },
  {
    id: "decoration",
    label: "装飾",
    icon: "✨",
    description: "グラデーション、アニメーションなど\n見た目をかっこよく",
  },
  {
    id: "interaction",
    label: "インタラクション",
    icon: "⚡",
    description: "スクロール、メニューなど\n動きをつける",
  },
  {
    id: "project",
    label: "プロジェクト",
    icon: "🚀",
    description: "ランディングページ、ポートフォリオなど\n実際にサイトを作る",
  },
];

// Content with HTML body
export interface Content {
  metadata: ContentMetadata;
  content: string;
  htmlContent: string;
}

// Difficulty label translation
export function getDifficultyLabel(difficulty: Difficulty): string {
  const labels: Record<Difficulty, string> = {
    beginner: "初級",
    intermediate: "中級",
    advanced: "上級",
  };
  return labels[difficulty];
}
