import React from 'react';
import { ComponentExt } from '../../common/reactExt';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Test from '../../components/Test';
import QueryTest from '../../components/QueryTest';
import CountOperation from '../../components/CountOperation';
import ShowCount from '../../components/ShowCount';

class Page extends ComponentExt<RouteComponentProps> {
  render() {
    return (
      <div>
        <Test />
        <QueryTest />
        <div>
          <div>useContext、createContext、useReducer</div>
          <CountOperation />
          <ShowCount />
        </div>
      </div>
    );
  }
}
export default withRouter(Page);
