export interface Article {
  slug: string;
  title: string;
  summary: string;
  categorySlug: string;
  publishedAt: string;
  readTimeMinutes: number;
  featured: boolean;
  content: string[];
}
