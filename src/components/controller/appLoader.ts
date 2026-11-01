import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        const apiUrl = process.env.NODE_ENV === 'production' ? process.env.API_URL_PROD : process.env.API_URL;
        const apiKey = process.env.API_KEY;

        if (!apiUrl || !apiKey) {
            throw new Error('API_URL and API_KEY must be defined in .env file');
        }
        super(apiUrl, { apiKey });
    }
}

export default AppLoader;
