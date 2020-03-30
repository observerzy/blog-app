import React from 'react';
import style from './index.module.scss';
import { Input, Tooltip } from 'antd';
import Article from '@/components/article';
import useArticleListHook from './useArticleListHook';
const Home: React.SFC = () => {
    const articleListHook = useArticleListHook();
    const [searchValue, setSearchValue] = React.useState<string>('');
    const [isCurrent, setIsCurrent] = React.useState<number>(0);
    const navList = [
        { name: '首页', uri: '#' },
        { name: '书单', uri: '#' },
        { name: '关于', uri: '#' }
    ];
    React.useEffect(() => {
        const fetch = () => {
            return articleListHook.getArticleList();
        };
        fetch(); // 处理eslint对useEffect依赖报错的问题
    }, []);
    return (
        <div className={style.main}>
            <div className={style.header}>
                <div className={style.headerContainer}>
                    <div className={style.title}>
                        <span
                            onClick={() => {
                                window.location.reload();
                            }}
                        >
                            CodeWorld 0和1的世界
                        </span>
                    </div>
                    <div className={style.mark}>——记录我的成长历程</div>
                    <div className={style.navMenu}>
                        {navList.map((val, index) => (
                            <div key={index}>
                                <a
                                    onClick={() => {
                                        setIsCurrent(index);
                                    }}
                                    href={val.uri}
                                    className={
                                        isCurrent === index
                                            ? style.current
                                            : null
                                    }
                                >
                                    {val.name}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={style.search}>
                    <Tooltip placement="topLeft" title="o(￣▽￣)ｄ">
                        <Input.Search
                            style={{ borderRadius: '3px' }}
                            placeholder="输入关键字搜索"
                            value={searchValue}
                            onChange={e => {
                                setSearchValue(e.target.value);
                            }}
                            onSearch={() => {
                                setSearchValue('');
                            }}
                        />
                    </Tooltip>
                </div>
            </div>
            <div className={style.body}>
                <div className={style.articleArea}>
                    {articleListHook.articleList.map((val, index) => (
                        <Article key={index} article={val}></Article>
                    ))}
                </div>
                <div className={style.retrievalArea}></div>
            </div>
        </div>
    );
};

export default Home;
