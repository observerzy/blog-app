import React from 'react';
import style from './index.module.scss';
import marked from 'marked';
import { Input } from 'antd';
const Home: React.SFC = () => {
  const markedRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    markedRef.current.innerHTML = marked(
      '# Marked in browser\n\nRendered by **marked**.'
    );
  }, [markedRef]);
  return (
    <div className={style.main}>
      <div className={style.header}>
        <div className={style.headerContainer}>
          <div
            onClick={() => {
              window.location.reload();
            }}
            className={style.title}
          >
            CodeWorld 0和1的世界
          </div>
          <div className={style.mark}>——记录我的成长历程</div>
        </div>
        <div className={style.search}>
          <Input.Search
            style={{ borderRadius: '3px' }}
            placeholder="输入关键字搜索"
            onSearch={value => console.log(value)}
          />
        </div>
      </div>
      <div className={style.body}>
        <div ref={markedRef} className={style.article}></div>
      </div>
    </div>
  );
};

export default Home;
