declare module '*.css';
declare module '*.scss';
declare module '*.sass';
declare module '*.less';

declare const process: {
    env: {
        API_URL?: string;
        API_KEY?: string;
        API_URL_PROD?: string;
        NODE_ENV?: string;
    };
};
