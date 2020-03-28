import APIFactory from '../APIFactory';

export type Req = {};

export type Article = {
  articleId: string;
  title: string;
  content: string;
  time: string;
  belong: string;
  userId: string;
  userName: string;
};
export type Resp = Article[];

export default APIFactory<Req, Resp>('queryArticleList');
