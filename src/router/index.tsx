import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routerMap from './routerMap';

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
    <Suspense fallback={<div>loading...</div>}>
      <Router>
        <Switch>{route}</Switch>
      </Router>
    </Suspense>
  );
};

export default App;
