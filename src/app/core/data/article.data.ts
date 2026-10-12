import { Article } from '../models/article.model';

export const ARTICLES: Article[] = [
  {
    slug: 'primeiros-passos-na-automacao-de-testes',
    title: 'Primeiros passos na automação de testes',
    summary: 'Como escolher um bom ponto de partida e criar uma base sustentável para automatizar.',
    categorySlug: 'automacao-de-testes',
    publishedAt: '2026-09-18',
    readTimeMinutes: 6,
    featured: true,
    content: [
      'Automatizar testes começa entendendo o produto, os riscos e as necessidades do time — não escolhendo uma ferramenta.',
      'Mapeie os fluxos mais importantes, priorize cenários repetitivos e de alto impacto e mantenha os primeiros testes pequenos e confiáveis.',
      'Uma suíte útil dá feedback rápido e facilita mudanças. Revise os cenários com o time e trate os testes como parte do produto.',
    ],
  },
  {
    slug: 'qualidade-e-responsabilidade-de-todo-o-time',
    title: 'Qualidade é responsabilidade de todo o time',
    summary: 'O papel de QA vai além de encontrar defeitos: qualidade se constrói em conjunto.',
    categorySlug: 'qualidade-de-software',
    publishedAt: '2026-09-10',
    readTimeMinutes: 4,
    featured: false,
    content: [
      'Qualidade não é uma etapa isolada no fim do desenvolvimento. Ela aparece nas conversas, decisões e verificações feitas durante todo o ciclo.',
      'QA ajuda o time a tornar riscos visíveis, esclarecer critérios e escolher formas adequadas de obter feedback.',
      'Quando cada pessoa contribui, problemas são percebidos mais cedo e o produto evolui com mais segurança.',
    ],
  },
  {
    slug: 'como-organizar-uma-rotina-de-testes',
    title: 'Como organizar uma rotina de testes',
    summary: 'Uma abordagem prática para planejar verificações sem perder de vista as prioridades.',
    categorySlug: 'dia-a-dia-de-qa',
    publishedAt: '2026-08-28',
    readTimeMinutes: 5,
    featured: false,
    content: [
      'Uma rotina de QA eficiente começa com contexto: entenda o que mudou, quem será impactado e quais riscos merecem atenção.',
      'Combine testes exploratórios com verificações repetíveis e compartilhe descobertas de forma objetiva para ajudar o time a decidir os próximos passos.',
      'Planejar não significa testar tudo. Significa direcionar o esforço para o que oferece mais confiança ao produto.',
    ],
  },
  {
    slug: 'introducao-a-testes-de-performance',
    title: 'Introdução a testes de performance',
    summary: 'O que observar antes de medir o comportamento de uma aplicação sob carga.',
    categorySlug: 'performance',
    publishedAt: '2026-08-14',
    readTimeMinutes: 7,
    featured: false,
    content: [
      'Testes de performance ajudam a entender como o sistema responde quando recebe diferentes volumes e padrões de uso.',
      'Antes de executar um teste, defina uma pergunta, estabeleça métricas e prepare um ambiente que represente o cenário que deseja avaliar.',
      'Analise tendências e gargalos com contexto: uma métrica isolada raramente explica a experiência completa de quem usa o produto.',
    ],
  },
];
