import { DataCallback, HttpMetod, LoaderOptions, RequestParams } from '../../types';

class Loader {
    private baseLink: string;
    private options: Readonly<LoaderOptions>;

    constructor(baseLink: string, options: Readonly<LoaderOptions>) {
        this.baseLink = baseLink;
        this.options = options;
    }

    protected getResp<T>(
        { endpoint, options = {} }: RequestParams,
        callback: DataCallback<T> = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load<T>(HttpMetod.Get, endpoint, callback, options);
    }

    private errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(options: Partial<Record<string, string | number>>, endpoint: string): string {
        const urlOptions: Record<string, string> = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key as keyof typeof urlOptions]}&`;
        });

        return url.slice(0, -1);
    }

    private load<T>(
        method: HttpMetod,
        endpoint: string,
        callback: DataCallback<T>,
        options: Partial<Record<string, string | number>> = {}
    ): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json() as Promise<T>)
            .then((data) => callback(data))
            .catch((err: unknown) => console.error(err));
    }
}

export default Loader;
