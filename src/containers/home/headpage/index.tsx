import React from 'react';
import useArticleListHook from '../useArticleListHook';
import Article from '@/components/article';

const Headpage: React.SFC = () => {
    const articleListHook = useArticleListHook();
    React.useEffect(() => {
        const fetch = () => {
            return articleListHook.getArticleList();
        };
        fetch(); // 处理eslint对useEffect依赖报错的问题
    }, []);
    return (
        <div>
            {articleListHook.articleList.map((val, index) => (
                <Article key={index} article={val}></Article>
            ))}
        </div>
    );
};

export default Headpage;
