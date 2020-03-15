import React from 'react';
import styles from './index.module.scss';
import { Button } from 'antd';
import { ComponentExt } from '../../common/reactExt';
import queryUserInfo, {
  Resp as TQueryUserInfo
} from '../../common/service/queryUserInfo';
import { AxiosRespWithWebAPI } from '../../common/http';

class Test extends ComponentExt {
  componentDidMount() {
    this.showMsg();
  }
  showMsg = () => {
    // this.$message.success("Welcome to use antd!");
  };
  getUserInfo = async () => {
    try {
      const res: AxiosRespWithWebAPI<TQueryUserInfo> = await queryUserInfo.fetch(
        {}
      );
      console.log('res:', res);
    } catch (error) {
      console.log('error:', error.message);
    }
  };
  render() {
    return (
      <div className={styles.test}>
        <Button type="primary" onClick={this.getUserInfo}>
          TestBtn
        </Button>
        <div className={styles.testContainer}>Component container!</div>
      </div>
    );
  }
}
export default Test;
