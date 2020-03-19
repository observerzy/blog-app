import React from 'react';
import { ComponentExt } from '@/common/reactExt';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Button } from 'antd';
import style from './index.module.scss';

class Home extends ComponentExt<RouteComponentProps> {
  componentDidMount() {
    // this.$message.success("Jenkins using success!");
  }
  toPage = () => {
    this.props.history.push('page');
  };
  toRegister = () => {
    this.props.history.push('register');
  };
  render() {
    return (
      <div>
        <div>Home</div>
        <div>
          <Button type={'primary'} onClick={this.toPage}>
            toPage
          </Button>
          <Button className={style.btn} onClick={this.toRegister}>
            toRegister
          </Button>
        </div>
        <div>Hello Jenkins!</div>
      </div>
    );
  }
}
export default withRouter(Home);
