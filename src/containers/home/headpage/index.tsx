import React from 'react';
//import useArticleListHook from "../useArticleListHook";
import Article from '@/components/article';
//import { useTestStore } from "@/store/count";
import { useArticleStore } from '@/store/article';

const Headpage: React.SFC = () => {
    //const articleListHook = useArticleListHook();
    //const { state, dispatch } = useTestStore();
    const {
        state,
        options: { getArticleList }
    } = useArticleStore();
    React.useEffect(() => {
        // const fetch = () => {
        //     return articleListHook.getArticleList();
        // };
        // fetch(); // 处理eslint对useEffect依赖报错的问题

        getArticleList({}).then(res => {
            console.log('res:', res);
        });
        // console.log(state.count);
        // dispatch({ type: "INCREMENT", payload: { num: 10 } });
    }, []);
    return (
        <div>
            {state.articleList.map((val, index) => (
                <Article key={index} article={val}></Article>
            ))}
        </div>
    );
};

export default Headpage;
