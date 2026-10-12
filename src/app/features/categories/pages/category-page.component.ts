import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArticleService } from '../../../core/services/article.service';
import { ArticleCardComponent } from '../../../shared/components/article-card/article-card.component';

@Component({
  selector: 'app-category-page',
  imports: [ArticleCardComponent, RouterLink],
  templateUrl: './category-page.component.html',
})
export class CategoryPageComponent {
  readonly slug = input.required<string>();
  private readonly articleService = inject(ArticleService);

  readonly category = computed(() => this.articleService.getCategoryBySlug(this.slug()));
  readonly articles = computed(() => this.articleService.getByCategory(this.slug()));
}
