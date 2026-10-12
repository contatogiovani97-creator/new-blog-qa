# Giovani Tech QA

Blog sobre automação de testes, qualidade de software, rotina de QA e performance.
O projeto usa Angular standalone com renderização no servidor (SSR) e rotas carregadas
sob demanda. A identidade visual combina uma interface editorial com referências a
videogames retrô.

## Executar localmente

```bash
npm install
npm start
```

Abra `http://localhost:4200/` no navegador.

## Estrutura

```text
src/
├── app/
│   ├── core/
│   │   ├── data/                 # Artigos, categorias, vídeos e fontes tech
│   │   ├── models/               # Tipos compartilhados do domínio
│   │   └── services/             # Acesso e consulta aos dados do blog
│   ├── features/
│   │   ├── about/                # Página sobre o blog
│   │   ├── articles/             # Listagem e leitura de artigos
│   │   ├── categories/           # Artigos por assunto
│   │   ├── home/                 # Página inicial
│   │   ├── radar/                # Fontes de notícias e novidades tech
│   │   ├── not-found/            # Página para endereços inexistentes
│   │   └── videos/               # Seleção de temas para vídeos
│   ├── shared/
│   │   └── components/           # Componentes reutilizáveis entre páginas
│   ├── app.config.ts             # Configuração global, rotas e hidratação
│   └── app.routes.ts             # Mapa de rotas da aplicação
├── index.html                    # Idioma e metadados globais
└── styles.scss                   # Tokens, layout e estilos globais
```

## Conteúdo

Os modelos ficam em `src/app/core/models`, os dados iniciais em
`src/app/core/data` e as consultas em `src/app/core/services/article.service.ts`.
Para adicionar um artigo, preencha os campos do modelo `Article` em `article.data.ts`
e associe-o ao `slug` de uma categoria existente em `category.data.ts`.

As seleções de vídeos e fontes de tecnologia ficam em `src/app/core/data/media.data.ts`.
Os cartões de vídeo abrem buscas temáticas no YouTube; o radar direciona para as
publicações originais das fontes e não é, nesta etapa, um agregador de notícias em tempo real.

## Verificação

```bash
npm run build
npm test
```
