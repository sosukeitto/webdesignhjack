import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";
import { codeToHtml } from "shiki";
import type {
  Section,
  Category,
  Difficulty,
  ContentMetadata,
  TipMetadata,
  Content,
} from "./types";

const contentDirectory = path.join(process.cwd(), "content");

// Validate metadata
export function validateMetadata(metadata: Record<string, unknown>): ContentMetadata {
  // Common required fields
  const required = [
    "title",
    "slug",
    "section",
    "difficulty",
    "estimatedTime",
    "publishedAt",
  ];

  for (const field of required) {
    if (!metadata[field]) {
      throw new Error(`Missing required field: ${field}`);
    }
  }

  // Section validation
  const validSections: Section[] = ["tips", "flow"];
  if (!validSections.includes(metadata.section as Section)) {
    throw new Error(`Invalid section: ${metadata.section}`);
  }

  // Section-specific validation
  if (metadata.section === "tips") {
    // Tips article: category, tags required
    if (!metadata.category) {
      throw new Error("Tips記事にはcategoryが必要です");
    }

    const validCategories: Category[] = [
      "element",
      "layout",
      "section",
      "decoration",
      "interaction",
      "project",
    ];
    if (!validCategories.includes(metadata.category as Category)) {
      throw new Error(`Invalid category: ${metadata.category}`);
    }

    if (!Array.isArray(metadata.tags) || metadata.tags.length === 0) {
      throw new Error("Tips記事にはtagsが必要です（最低1つ）");
    }
  }

  // Difficulty validation
  const validDifficulties: Difficulty[] = [
    "beginner",
    "intermediate",
    "advanced",
  ];
  if (!validDifficulties.includes(metadata.difficulty as Difficulty)) {
    throw new Error(`Invalid difficulty: ${metadata.difficulty}`);
  }

  // Slug validation (kebab-case)
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(metadata.slug as string)) {
    throw new Error(`Invalid slug format: ${metadata.slug}`);
  }

  // PublishedAt validation (YYYY-MM-DD)
  if (!/^\d{4}-\d{2}-\d{2}$/.test(metadata.publishedAt as string)) {
    throw new Error(`Invalid date format: ${metadata.publishedAt}`);
  }

  return metadata as unknown as ContentMetadata;
}

// Get all content or filter by section
export function getAllContent(section?: Section): ContentMetadata[] {
  let dirs: string[];
  if (section) {
    dirs = [section];
  } else {
    dirs = ["tips", "flow"];
  }

  const contents: ContentMetadata[] = [];

  for (const dir of dirs) {
    const dirPath = path.join(contentDirectory, dir);

    // Check if directory exists
    if (!fs.existsSync(dirPath)) {
      continue;
    }

    const files = fs.readdirSync(dirPath);

    for (const file of files) {
      if (file.endsWith(".md")) {
        const filePath = path.join(dirPath, file);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { data } = matter(fileContent);

        try {
          const metadata = validateMetadata(data);
          contents.push(metadata);
        } catch (error) {
          console.error(`Error validating ${file}:`, error);
        }
      }
    }
  }

  // Sort by publishedAt (newest first)
  return contents.sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });
}

// Get content by section and slug
export async function getContentBySlug(
  section: Section,
  slug: string
): Promise<Content> {
  const filePath = path.join(contentDirectory, section, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Content not found: ${section}/${slug}`);
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const metadata = validateMetadata(data);

  // Convert markdown to HTML with syntax highlighting
  const htmlContent = await markdownToHtml(content);

  return {
    metadata,
    content,
    htmlContent,
  };
}

// Convert markdown to HTML with syntax highlighting
async function markdownToHtml(markdown: string): Promise<string> {
  // Process markdown with remark
  const result = await remark()
    .use(remarkGfm)
    .use(html, { sanitize: false })
    .process(markdown);

  let htmlContent = result.toString();

  // Extract code blocks and apply syntax highlighting with Shiki
  const codeBlockRegex = /<pre><code class="language-(\w+)">([\s\S]*?)<\/code><\/pre>/g;

  const matches = Array.from(htmlContent.matchAll(codeBlockRegex));

  for (const match of matches) {
    const [fullMatch, language, code] = match;

    // Decode HTML entities
    const decodedCode = code
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&#x3C;/g, '<')
      .replace(/&#x3E;/g, '>')
      .replace(/&#x27;/g, "'")
      .replace(/&#x2F;/g, '/');

    try {
      const highlighted = await codeToHtml(decodedCode, {
        lang: language || 'text',
        theme: 'github-dark',
      });

      // Wrap in a container with language label
      const wrappedCode = `
        <div class="code-block-wrapper">
          <div class="code-block-header">
            <span class="code-block-language">${language}</span>
          </div>
          ${highlighted}
        </div>
      `;

      htmlContent = htmlContent.replace(fullMatch, wrappedCode);
    } catch (error) {
      console.error(`Error highlighting code block (${language}):`, error);
    }
  }

  return htmlContent;
}

// Get Tips by category
export function getTipsByCategory(category: Category): TipMetadata[] {
  const allTips = getAllContent("tips") as TipMetadata[];
  return allTips.filter((tip) => tip.category === category);
}

// Get Tips by tag
export function getTipsByTag(tag: string): TipMetadata[] {
  const allTips = getAllContent("tips") as TipMetadata[];
  return allTips.filter((tip) => tip.tags.includes(tag));
}

// Get all unique tags
export function getAllTags(): string[] {
  const allTips = getAllContent("tips") as TipMetadata[];
  const tags = new Set<string>();

  allTips.forEach((tip) => {
    tip.tags.forEach((tag) => tags.add(tag));
  });

  return Array.from(tags).sort();
}
