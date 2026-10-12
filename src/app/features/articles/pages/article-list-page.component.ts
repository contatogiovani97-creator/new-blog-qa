import { Component, inject } from '@angular/core';
import { ArticleService } from '../../../core/services/article.service';
import { ArticleCardComponent } from '../../../shared/components/article-card/article-card.component';

@Component({
  selector: 'app-article-list-page',
  imports: [ArticleCardComponent],
  templateUrl: './article-list-page.component.html',
})
export class ArticleListPageComponent {
  readonly articles = inject(ArticleService).getLatest();
}
