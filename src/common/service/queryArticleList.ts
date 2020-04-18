import APIFactory from '../APIFactory';

export type Req = {
    pagination: PaginationBean;
};
export type PaginationBean = {
    total: number;
    offset: number;
    limit: number;
};
export type Article = {
    articleId: string;
    title: string;
    content: string;
    time: string;
    belong: string;
    userId: string;
    userName: string;
};
export type Resp = {
    articleList: Article[];
    pagination: PaginationBean;
};

export default APIFactory<Req, Resp>('queryArticleList');
