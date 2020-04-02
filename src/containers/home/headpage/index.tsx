import React from 'react';
import Article from '@/components/article';
import { useArticleStore } from '@/store/article';

const Headpage: React.SFC = () => {
    const { state } = useArticleStore();
    return (
        <div>
            {state.articleList.map((val, index) => (
                <Article key={index} article={val}></Article>
            ))}
        </div>
    );
};

export default Headpage;
