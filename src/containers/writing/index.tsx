import React from 'react';
import style from './index.module.scss';
import showdown from 'showdown';
import { Input } from 'antd';
const Writing: React.SFC = () => {
  const [article, setArticle] = React.useState<string>('');
  const showRef = React.useRef<HTMLDivElement>(null);
  const showArticle = (article: string) => {
    let converter = new showdown.Converter();
    showRef.current.innerHTML = converter.makeHtml(article);
  };
  React.useEffect(() => {
    showArticle(article);
  }, [article]);
  return (
    <div>
      <div className={style.write}>
        <Input.TextArea
          value={article}
          onChange={e => {
            setArticle(e.target.value);
          }}
        ></Input.TextArea>
      </div>
      <div ref={showRef} className={style.show}></div>
    </div>
  );
};

export default Writing;
