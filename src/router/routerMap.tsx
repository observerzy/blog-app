import { lazy } from 'react';

const Test = lazy(() =>
  import(/*webpackChunkName:"test"*/ '../containers/test')
);
const Page = lazy(() =>
  import(/*webpackChunkName:"page"*/ '../containers/page')
);
const Register = lazy(() =>
  import(/*webpackChunkName:"register"*/ '../containers/register')
);
const Home = lazy(() =>
  import(/*webpackChunkName:"home"*/ '../containers/home')
);

const routerMap = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/test',
    component: Test
  },
  {
    path: '/page',
    component: Page
  },
  {
    path: '/register',
    component: Register
  }
];

export default routerMap;
