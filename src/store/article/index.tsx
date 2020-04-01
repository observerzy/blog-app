import React, {
    createContext,
    useContext,
    useReducer,
    ComponentType,
    Dispatch
} from 'react';
import queryArticleList, {
    Resp as TQueryArticleListResp
    //Article
} from '@/common/service/queryArticleList';
import { AxiosRespWithWebAPI } from '../../common/http';
export interface State {
    articleList: number;
}

type Action = { type: 'SETARTICLELIST'; payload: { articleList: number } };

export const initState = {
    articleList: 1 //为什么
};

const ArticleCtx = createContext<Context<State, Dispatch<Action>>>(null);

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'SETARTICLELIST':
            return {
                articleList: state.articleList + action.payload.articleList
            };
        default:
            return state;
    }
};

const getArticleList = async () => {
    try {
        const res: AxiosRespWithWebAPI<TQueryArticleListResp> = await queryArticleList.fetch(
            {}
        );
        console.log(res);
    } catch (error) {
        console.log('error:', error.message);
    }
};

export const Provider: ComponentType = props => {
    const [state, dispatch] = useReducer(reducer, initState);
    React.useEffect(() => {
        getArticleList();
    }, []);
    return (
        // 所包裹的一系列组件/子组件都可以用state,dispatch
        <ArticleCtx.Provider value={{ state, dispatch }}>
            {props.children}
        </ArticleCtx.Provider>
    );
};

// 导出的是useTestStore方法
export const useTestStore = () => useContext(ArticleCtx);
