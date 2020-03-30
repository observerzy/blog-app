import React from 'react';
import style from './index.module.scss';
import marked from 'marked';
import { Article as ArticlInfo } from '@/common/service/queryArticleList';
export type TProps = {
    article: ArticlInfo;
};
const Article: React.SFC<TProps> = props => {
    const { title, content, time, belong, userName } = props.article;
    const markedRef = React.useRef<HTMLDivElement>(null);
    React.useEffect(() => {
        markedRef.current.innerHTML = marked(content);
    }, [markedRef, content]);
    return (
        <div className={style.article}>
            <div className={style.title}>{title}</div>
            <div className={style.message}>
                <ul className={style.messageList}>
                    <li>
                        <span>作者：</span>
                        <span>{userName}</span>
                    </li>
                    <li>
                        <span>时间：</span>
                        <span>{time}</span>
                    </li>
                    <li>
                        <span>分类：</span>
                        <span>{belong}</span>
                    </li>
                </ul>
            </div>
            <div className={style.contain}>
                <div ref={markedRef} className={style.content}></div>
            </div>
            <div className={style.more}>-阅读剩余部分-</div>
        </div>
    );
};
export default Article;
