import { Article, NewsResponse, SourceItem, SourcesResponse } from '../../types';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    private news: News;
    private sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: NewsResponse): void {
        const values: Article[] = data?.articles ?? [];
        this.news.draw(values);
    }

    drawSources(data: SourcesResponse): void {
        const values: SourceItem[] = data?.sources ?? [];
        this.sources.draw(values);
    }
}

export default AppView;
