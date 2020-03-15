import React from 'react';
import style from './index.module.scss';
const Home: React.SFC = () => {
  return (
    <div className={style.main}>
      <div>
        <div>CodeWorld 代码世界</div>
        <div>记录我的成长历程</div>
      </div>
      <div>这里是内容区</div>
    </div>
  );
};

export default Home;
