declare module '*.css';
declare module '*.scss';
declare module '*.sass';
declare module '*.less';

declare const process: {
    env: {
        API_URL?: string;
        API_KEY?: string;
        NODE_ENV?: string;
    };
};
