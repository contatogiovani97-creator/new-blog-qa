import { Component, inject } from '@angular/core';
import { ArticleService } from '../../../core/services/article.service';
import { Category } from '../../../core/models/category.model';
import { ArticleCardComponent } from '../../../shared/components/article-card/article-card.component';

@Component({
  selector: 'app-article-list-page',
  imports: [ArticleCardComponent],
  templateUrl: './article-list-page.component.html',
})
export class ArticleListPageComponent {
  private readonly articleService = inject(ArticleService);
  readonly articles = this.articleService.getLatest();
  readonly categories = this.articleService
    .getCategories()
    .filter((category) =>
      this.articles.some((article) => article.categorySlug === category.slug),
    );

  selectedCategorySlug: string | null = null;

  get filteredArticles() {
    return this.selectedCategorySlug
      ? this.articleService.getByCategory(this.selectedCategorySlug)
      : this.articles;
  }

  get selectedCategoryName(): string {
    if (!this.selectedCategorySlug) {
      return 'Todas as histórias';
    }

    return (
      this.categories.find((category) => category.slug === this.selectedCategorySlug)?.name ??
      'Todas as histórias'
    );
  }

  selectCategory(category: Category | null): void {
    this.selectedCategorySlug = category?.slug ?? null;
  }
}
