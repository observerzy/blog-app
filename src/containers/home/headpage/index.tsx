import React from 'react';
import Article from '@/components/article';
import { Pagination } from 'antd';
import { useArticleStore } from '@/store/article';
import style from './index.module.scss';

const Headpage: React.SFC = () => {
    const { state, options } = useArticleStore();
    return (
        <div>
            {state.articleList.map((val, index) => (
                <Article key={index} article={val}></Article>
            ))}
            <Pagination
                className={style.pagenation}
                defaultCurrent={1}
                total={state.total}
                onChange={page => {
                    options.queryArticle(page);
                }}
            />
        </div>
    );
};

export default Headpage;
