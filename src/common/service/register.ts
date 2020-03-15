import APIFactory from '../APIFactory';

export type Req = {
  username: string;
  password: string;
};
export type Resp = {
  message: string;
};

export default APIFactory<Req, Resp>('register');
