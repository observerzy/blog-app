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
const Writing = lazy(() =>
    import(/*webpackChunkName:"writing"*/ '@/containers/writing')
);
const InterviewDemo = lazy(() =>
    import(/*webpackChunkName:"writing"*/ '@/containers/interviewDemo')
);

const routerMap = [
    {
        path: '/home',
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
    },
    {
        path: '/writing',
        component: Writing
    },
    {
        path: '/interviewdemo',
        component: InterviewDemo
    }
];

export default routerMap;
