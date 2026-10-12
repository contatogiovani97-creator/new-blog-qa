import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Início | Giovani Tech QA',
    loadComponent: () =>
      import('./features/home/pages/home-page.component').then(
        (module) => module.HomePageComponent,
      ),
  },
  {
    path: 'artigos',
    title: 'Artigos | Giovani Tech QA',
    loadComponent: () =>
      import('./features/articles/pages/article-list-page.component').then(
        (module) => module.ArticleListPageComponent,
      ),
  },
  {
    path: 'artigos/:slug',
    loadComponent: () =>
      import('./features/articles/pages/article-detail-page.component').then(
        (module) => module.ArticleDetailPageComponent,
      ),
  },
  {
    path: 'videos',
    title: 'Vídeos | Giovani Tech QA',
    loadComponent: () =>
      import('./features/videos/pages/video-list-page.component').then(
        (module) => module.VideoListPageComponent,
      ),
  },
  {
    path: 'radar',
    title: 'Radar tech | Giovani Tech QA',
    loadComponent: () =>
      import('./features/radar/pages/radar-page.component').then(
        (module) => module.RadarPageComponent,
      ),
  },
  {
    path: 'categorias/:slug',
    loadComponent: () =>
      import('./features/categories/pages/category-page.component').then(
        (module) => module.CategoryPageComponent,
      ),
  },
  {
    path: 'sobre',
    title: 'Nosso player | Giovani Tech QA',
    loadComponent: () =>
      import('./features/about/pages/about-page.component').then(
        (module) => module.AboutPageComponent,
      ),
  },
  {
    path: '**',
    title: 'Página não encontrada | Giovani Tech QA',
    loadComponent: () =>
      import('./features/not-found/pages/not-found-page.component').then(
        (module) => module.NotFoundPageComponent,
      ),
  },
];
