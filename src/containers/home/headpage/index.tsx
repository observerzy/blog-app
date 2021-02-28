import React from 'react';
import Article from '@/components/article';
import { Pagination } from 'antd';
import { useArticleStore } from '@/store/article';
import style from './index.module.scss';

const Headpage: React.SFC = () => {
    const { state, options } = useArticleStore();
    React.useEffect(() => {
        options.queryArticle();
    }, []);
    return (
        <div>
            {state.articleList.map((val, index) => (
                <Article key={index} article={val}></Article>
            ))}
            <Pagination
                className={style.pagenation}
                defaultCurrent={1}
                total={state.total}
                hideOnSinglePage
                onChange={page => {
                    options.queryArticle(page);
                }}
            />
        </div>
    );
};

export default Headpage;
