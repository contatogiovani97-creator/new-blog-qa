import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArticleService } from '../../../core/services/article.service';
import { NEWS_SOURCES, VIDEO_RESOURCES } from '../../../core/data/media.data';
import { ArticleCardComponent } from '../../../shared/components/article-card/article-card.component';

@Component({
  selector: 'app-home-page',
  imports: [ArticleCardComponent, RouterLink],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  private readonly articleService = inject(ArticleService);

  readonly featuredArticles = this.articleService.getFeatured();
  readonly latestArticles = this.articleService.getLatest(3);
  readonly categories = this.articleService.getCategories();
  readonly featuredVideos = VIDEO_RESOURCES.slice(0, 3);
  readonly featuredNews = NEWS_SOURCES.slice(0, 3);
}
