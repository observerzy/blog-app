import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Skeleton } from 'antd';
import routerMap from './routerMap';
import style from './index.module.scss';

const App = () => {
  const route = routerMap.map(item => {
    return (
      <Route
        exact={true}
        key={item.path}
        path={item.path}
        component={item.component}
      />
    );
  });
  return (
    <Suspense
      fallback={
        <div className={style.loading}>
          <Skeleton active />
        </div>
      }
    >
      <Router>
        <Switch>{route}</Switch>
      </Router>
    </Suspense>
  );
};

export default App;
