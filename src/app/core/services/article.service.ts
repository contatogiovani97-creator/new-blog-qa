import { Injectable } from '@angular/core';
import { ARTICLES } from '../data/article.data';
import { CATEGORIES } from '../data/category.data';
import { Article } from '../models/article.model';
import { Category } from '../models/category.model';

@Injectable({ providedIn: 'root' })
export class ArticleService {
  getAll(): Article[] {
    return ARTICLES;
  }

  getFeatured(): Article[] {
    return ARTICLES.filter((article) => article.featured);
  }

  getLatest(limit?: number): Article[] {
    const articles = [...ARTICLES].sort((first, second) =>
      second.publishedAt.localeCompare(first.publishedAt),
    );
    return limit === undefined ? articles : articles.slice(0, limit);
  }

  getBySlug(slug: string): Article | undefined {
    return ARTICLES.find((article) => article.slug === slug);
  }

  getCategories(): Category[] {
    return CATEGORIES;
  }

  getCategoryBySlug(slug: string): Category | undefined {
    return CATEGORIES.find((category) => category.slug === slug);
  }

  getByCategory(categorySlug: string): Article[] {
    return this.getLatest().filter((article) => article.categorySlug === categorySlug);
  }

  getCategoryName(categorySlug: string): string {
    return this.getCategoryBySlug(categorySlug)?.name ?? categorySlug;
  }
}
