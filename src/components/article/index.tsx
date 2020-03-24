import React from 'react';
import style from './index.module.scss';
import marked from 'marked';

const Article: React.SFC = () => {
  const markedRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    markedRef.current.innerHTML = marked(
      '# Marked in browser\n\nRendered by **marked**.'
    );
  }, [markedRef]);
  return (
    <div className={style.article}>
      <div className={style.title}>使用配置进行你的开发</div>
      <div className={style.message}>
        <ul className={style.messageList}>
          <li>
            <span>作者：</span>
            <span>刘子艺</span>
          </li>
          <li>
            <span>时间：</span>
            <span>2020年3月24日</span>
          </li>
          <li>
            <span>分类：</span>
            <span>Go</span>
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
