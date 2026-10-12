import { DatePipe } from '@angular/common';
import { Component, input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArticleService } from '../../../core/services/article.service';
import { Article } from '../../../core/models/article.model';

@Component({
  selector: 'app-article-card',
  imports: [DatePipe, RouterLink],
  templateUrl: './article-card.component.html',
})
export class ArticleCardComponent {
  readonly article = input.required<Article>();
  private readonly articleService = inject(ArticleService);

  get categoryName(): string {
    return this.articleService.getCategoryName(this.article().categorySlug);
  }
}
