// Источник новости (например, TechCrunch)
export interface Source {
  id: string | null;
  name: string;
}

// Одна новостная статья — то, что приходит в массиве articles
export interface Article {
  source: Source;
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

// Ответ от эндпоинта /everything или /top-headlines
export interface NewsResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

// Один источник в списке (для эндпоинта /sources)
export interface SourceItem {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

// Ответ от эндпоинта /sources
export interface SourcesResponse {
  status: string;
  totalResults: number;
  sources: SourceItem[];
}

// Опции, которые передаются в Loader (ключ API и т.п.)
export interface LoaderOptions {
  apiKey: string;
}

// Параметры запроса — эндпоинт и дополнительные параметры
export interface RequestParams {
  endpoint: string;
  options?: Record<string, string>;
}

// Универсальный тип для колбэка — дженерик
export type DataCallback<T> = (data: T) => void;

// Union-тип: ответ API может быть либо новостями, либо источниками
export type ApiResponse = NewsResponse | SourcesResponse;