import APIFactory from '../APIFactory';

export type Req = {};

export type Resp = {
  user_age: string;
  user_birthday: string;
  user_email: string;
  user_id: string;
  user_ip: string;
  user_level: string;
  user_name: string;
  user_nickname: string;
  user_password: string;
  user_profile_photo: string;
  user_registration_time: string;
  user_rights: string;
  user_telephone_number: string;
};

export default APIFactory<Req, Resp>('queryUserInfo');
