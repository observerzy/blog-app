import React from 'react';
import queryUserInfo, {
  Resp as TQueryUserInfo
} from '../../common/service/queryUserInfo';
import { Button } from 'antd';
import { AxiosRespWithWebAPI } from '../../common/http';
const QueryTest: React.SFC = () => {
  const [userAge, setUserAge] = React.useState<any>(17);
  async function getUserInfo() {
    try {
      const res: AxiosRespWithWebAPI<TQueryUserInfo> = await queryUserInfo.fetch(
        {}
      );
      setUserAge(res.data.body.user_age);
    } catch (error) {
      console.log('error:', error.message);
    }
  }
  React.useEffect(() => {
    // getUserInfo();
  }, []);
  return (
    <div>
      <div>
        <Button type="primary" onClick={getUserInfo}>
          TestQuery
        </Button>
      </div>
      <div>{userAge}</div>
    </div>
  );
};
export default QueryTest;
