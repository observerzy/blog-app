import APIFactory from '../APIFactory';

export type Req = {
  username: string;
  pssword: string;
};
export type User = {
  id: string;
  username: string;
  password: string;
};
export type Resp = {
  data: User;
  message: string;
};

export default APIFactory<Req, Resp>('login');
