import React, { Suspense } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { Skeleton } from 'antd';
import routerMap from './routerMap';
import style from './index.module.scss';

const App = () => {
    const route = routerMap.map(item => {
        return (
            <Route
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
                <Switch>
                    <Redirect exact from="/" to="/interviewdemo"></Redirect>
                    {route}
                </Switch>
            </Router>
        </Suspense>
    );
};

export default App;
