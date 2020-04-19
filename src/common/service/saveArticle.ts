import APIFactory from '../APIFactory';

export type Req = {
    title: string;
    content: string;
    belong: string;
    userId: string;
    userName: string;
};

export type Resp = {};

export default APIFactory<Req, Resp>('saveArticle');
