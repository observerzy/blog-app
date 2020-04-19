import React from 'react';
import style from './index.module.scss';
import { Input, Tooltip } from 'antd';
import { useHistory, useRouteMatch, Switch, Route } from 'react-router-dom';
import Headpage from './headpage';
import cx from 'classnames';
import { useComStore } from '@/store/com-state';
const Home: React.SFC = () => {
    const [searchValue, setSearchValue] = React.useState<string>('');
    //当前所在页，需考虑是否将其交给context管理
    const history = useHistory();
    const match = useRouteMatch();
    const { state, dispatch } = useComStore();

    const navList = [
        { name: '首页', uri: '/home' },
        { name: '书单', uri: '/home/booklist' },
        { name: '关于', uri: '/home/about' },
        { name: '测试', uri: '/test' },
        { name: '码文', uri: '/writing' }
    ];
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
                                        if (state.current === index) return;
                                        dispatch({
                                            type: 'SETCURRENT',
                                            payload: { current: index }
                                        });
                                        history.push(val.uri);
                                    }}
                                    className={cx(
                                        state.current === index
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
                    <Switch>
                        <Route exact path={`${match.url}`}>
                            <Headpage></Headpage>
                        </Route>
                        <Route path={`${match.url}/booklist`}>
                            <div style={{ height: 'calc(100vh + 10px)' }}>
                                booklist
                            </div>
                        </Route>
                        <Route path={`${match.url}/about`}>
                            <div>about</div>
                        </Route>
                    </Switch>
                </div>
                <div className={style.retrievalArea}></div>
            </div>
        </div>
    );
};

export default Home;
