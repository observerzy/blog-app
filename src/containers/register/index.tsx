import React from 'react';
import { Input, Button } from 'antd';
import useRegisterHook from './useRegisterHook';

const Register: React.SFC = () => {
  const registerHook = useRegisterHook();
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const regisiter = () => {
    registerHook.toRegister({
      username,
      password
    });
  };

  return (
    <div>
      <div>登录页</div>
      <div>
        <div>
          <span>账号</span>
          <Input
            onChange={val => {
              setUsername(val.target.value);
            }}
            placeholder={'请输入'}
          />
        </div>
        <div>
          <span>密码</span>
          <Input
            onChange={val => {
              setPassword(val.target.value);
            }}
            placeholder={'请输入'}
          />
        </div>
        <div>
          <Button type={'primary'} onClick={regisiter}>
            注册
          </Button>
          <Button>取消</Button>
        </div>
      </div>
    </div>
  );
};
export default Register;
