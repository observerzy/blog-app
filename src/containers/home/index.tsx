import React from 'react';
import style from './index.module.scss';
import { Input, Tooltip } from 'antd';
import Article from '@/components/article';
import useArticleListHook from './useArticleListHook';
import { useHistory } from 'react-router-dom';
import cx from 'classnames';
const Home: React.SFC = () => {
    const articleListHook = useArticleListHook();
    const [searchValue, setSearchValue] = React.useState<string>('');
    const [isCurrent, setIsCurrent] = React.useState<number>(0);
    const history = useHistory();
    const navList = [
        { name: '首页', uri: '/home' },
        { name: '书单', uri: '/writing' },
        { name: '关于', uri: '/test' },
        { name: '测试', uri: '/home' }
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
                                <div
                                    onClick={() => {
                                        setIsCurrent(index);
                                        history.push(val.uri);
                                    }}
                                    className={cx(
                                        isCurrent === index
                                            ? style.current
                                            : null,
                                        style.tabs
                                    )}
                                >
                                    {val.name}
                                </div>
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
