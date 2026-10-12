export interface VideoResource {
  slug: string;
  title: string;
  topic: string;
  description: string;
  searchUrl: string;
}

export interface NewsSource {
  slug: string;
  source: string;
  title: string;
  description: string;
  url: string;
  topics: string[];
}
