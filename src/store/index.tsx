import React from 'react';
import { Provider as TestProvider } from './count';
import { Provider as ArticleProvier } from './article';
import { Provider as ComProvier } from './com-state';

export { useTestStore } from './count';
export { useArticleStore } from './article';
export { useComStore } from './com-state'; //公共state

// 使用数据reducer进行Provider整合，避免直接出现Provider嵌套

// 新的Provider都放进这个数组中
const providers = [TestProvider, ArticleProvier, ComProvier];

const Provider = (props: any) =>
    providers.reduceRight(
        (children, Parent) => <Parent>{children}</Parent>,
        props.children // 初始值（牛逼的用法）
    );

export default Provider;
