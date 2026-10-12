import { DatePipe } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArticleService } from '../../../core/services/article.service';

@Component({
  selector: 'app-article-detail-page',
  imports: [DatePipe, RouterLink],
  templateUrl: './article-detail-page.component.html',
})
export class ArticleDetailPageComponent {
  readonly slug = input.required<string>();
  private readonly articleService = inject(ArticleService);

  readonly article = computed(() => this.articleService.getBySlug(this.slug()));
  readonly categoryName = computed(() => {
    const article = this.article();
    return article ? this.articleService.getCategoryName(article.categorySlug) : '';
  });
}
