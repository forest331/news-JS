import AppLoader from './appLoader';
import { DataCallback, Endpoint, NewsResponse, SourcesResponse } from '../../types';

class AppController extends AppLoader {
    getSources(callback: DataCallback<SourcesResponse>): void {
        super.getResp(
            {
                endpoint: Endpoint.Sources,
            },
            callback
        );
    }

    getNews(e: Event, callback: DataCallback<NewsResponse>): void {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (sourceId !== null && newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: Endpoint.Everything,
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
