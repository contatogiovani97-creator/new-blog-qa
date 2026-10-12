import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ArticleListPageComponent } from './article-list-page.component';

registerLocaleData(localePt, 'pt-BR');

describe('ArticleListPageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleListPageComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('filters articles by category and restores all stories', () => {
    const fixture = TestBed.createComponent(ArticleListPageComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const filterButtons = compiled.querySelectorAll<HTMLButtonElement>('.article-filter');
    expect(compiled.querySelectorAll('app-article-card').length).toBe(4);

    filterButtons[4].click();
    fixture.detectChanges();

    expect(compiled.querySelectorAll('app-article-card').length).toBe(1);
    expect(compiled.querySelector('.article-results-title')?.textContent?.trim()).toBe(
      'Performance',
    );

    filterButtons[0].click();
    fixture.detectChanges();

    expect(compiled.querySelectorAll('app-article-card').length).toBe(4);
    expect(compiled.querySelector('.article-results-title')?.textContent?.trim()).toBe(
      'Todas as histórias',
    );
  });
});
