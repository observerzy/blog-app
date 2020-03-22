import React from 'react';
import style from './index.module.scss';
import marked from 'marked';
import { Input, Tooltip } from 'antd';
const Home: React.SFC = () => {
  const markedRef = React.useRef<HTMLDivElement>(null);
  const [searchValue, setSearchValue] = React.useState<string>('');
  const [isCurrent, setIsCurrent] = React.useState<number>(0);
  const navList = [
    { name: '首页', uri: '#' },
    { name: '关于', uri: '#' }
  ];
  React.useEffect(() => {
    markedRef.current.innerHTML = marked(
      '# Marked in browser\n\nRendered by **marked**.'
    );
  }, [markedRef]);
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
              <>
                <a
                  onClick={() => {
                    setIsCurrent(index);
                  }}
                  href={val.uri}
                  className={isCurrent === index ? style.current : null}
                >
                  {val.name}
                </a>
              </>
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
        <div ref={markedRef} className={style.article}></div>
      </div>
    </div>
  );
};

export default Home;
