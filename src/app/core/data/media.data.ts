import { NewsSource, VideoResource } from '../models/media-resource.model';

export const VIDEO_RESOURCES: VideoResource[] = [
  {
    slug: 'playwright',
    title: 'Playwright e testes end-to-end',
    topic: 'Automação',
    description: 'Demos, tutoriais e dicas da comunidade sobre testes web.',
    searchUrl: 'https://www.youtube.com/results?search_query=Playwright+test+automation+tutorial',
  },
  {
    slug: 'qa-na-pratica',
    title: 'QA, qualidade e testes de software',
    topic: 'Qualidade',
    description: 'Conversas e experiências de quem trabalha com qualidade.',
    searchUrl: 'https://www.youtube.com/results?search_query=QA+qualidade+de+software+testes',
  },
  {
    slug: 'performance',
    title: 'Performance e testes de carga',
    topic: 'Performance',
    description: 'Aprenda sobre métricas, carga e desempenho de aplicações.',
    searchUrl: 'https://www.youtube.com/results?search_query=teste+de+performance+k6+load+testing',
  },
  {
    slug: 'devtools',
    title: 'Ferramentas e novidades para devs',
    topic: 'Tech geral',
    description: 'Vídeos sobre ferramentas, desenvolvimento e tendências tech.',
    searchUrl:
      'https://www.youtube.com/results?search_query=tecnologia+desenvolvimento+software+novidades',
  },
  {
    slug: 'api-testing',
    title: 'Testes de API do básico ao avançado',
    topic: 'Testes',
    description: 'Explore estratégias e ferramentas para validar APIs.',
    searchUrl: 'https://www.youtube.com/results?search_query=API+testing+tutorial+Postman',
  },
  {
    slug: 'inteligencia-artificial',
    title: 'IA aplicada ao desenvolvimento',
    topic: 'Tech geral',
    description: 'Discussões sobre inteligência artificial e o trabalho em tecnologia.',
    searchUrl:
      'https://www.youtube.com/results?search_query=IA+inteligencia+artificial+desenvolvimento+software',
  },
];

export const NEWS_SOURCES: NewsSource[] = [
  {
    slug: 'github-blog',
    source: 'GitHub Blog',
    title: 'Engenharia e novidades do GitHub',
    description: 'Acompanhe anúncios, ferramentas para desenvolvedores e histórias de engenharia.',
    url: 'https://github.blog/',
    topics: ['Desenvolvimento', 'Open source', 'Ferramentas'],
  },
  {
    slug: 'google-ai',
    source: 'Google AI Blog',
    title: 'Pesquisa e produtos de inteligência artificial',
    description: 'Artigos e atualizações sobre pesquisa e aplicações de IA do Google.',
    url: 'https://blog.google/technology/ai/',
    topics: ['Inteligência artificial', 'Pesquisa'],
  },
  {
    slug: 'cloudflare-blog',
    source: 'Cloudflare Blog',
    title: 'Web, segurança e infraestrutura',
    description: 'Novidades e análises sobre a infraestrutura que move a internet.',
    url: 'https://blog.cloudflare.com/',
    topics: ['Web', 'Segurança', 'Performance'],
  },
  {
    slug: 'playwright-blog',
    source: 'Playwright',
    title: 'Atualizações da ferramenta de testes',
    description: 'Acompanhe lançamentos e melhorias do framework Playwright.',
    url: 'https://playwright.dev/docs/release-notes',
    topics: ['Testes', 'Automação'],
  },
  {
    slug: 'the-verge-tech',
    source: 'The Verge',
    title: 'Notícias e cultura tech',
    description: 'Cobertura de produtos, empresas e tendências de tecnologia.',
    url: 'https://www.theverge.com/tech',
    topics: ['Tecnologia', 'Produtos', 'Cultura'],
  },
  {
    slug: 'k6-blog',
    source: 'Grafana k6',
    title: 'Performance e testes de carga',
    description: 'Guias e atualizações sobre testes de performance e observabilidade.',
    url: 'https://grafana.com/blog/',
    topics: ['Performance', 'Observabilidade'],
  },
];
