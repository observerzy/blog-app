import React, {
    createContext,
    useContext,
    useReducer,
    ComponentType,
    Dispatch
} from 'react';
import queryArticleList, {
    Req as TQueryArticleListReq,
    Resp as TQueryArticleListResp,
    Article
} from '@/common/service/queryArticleList';
import { AxiosRespWithWebAPI } from '../../common/http';

export interface State {
    articleList: Article[];
}

type Action = { type: 'SETARTICLELIST'; payload: { articleList: Article[] } };
interface Options {
    getArticleList: (
        params: TQueryArticleListReq
    ) => Promise<TQueryArticleListReq | null>;
}
const ArticleCtx = createContext<Context<State, Dispatch<Action>, Options>>(
    null
);

export const initState: State = {
    articleList: []
};
const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'SETARTICLELIST':
            return {
                // articleList: [
                //     ...state.articleList,
                //     ...action.payload.articleList
                // ]
                articleList: action.payload.articleList
            };
        default:
            return state;
    }
};

const getArticleList = (params: TQueryArticleListReq) => {
    return new Promise<TQueryArticleListResp | null>(
        async (resolve, reject) => {
            try {
                const res: AxiosRespWithWebAPI<TQueryArticleListResp> = await queryArticleList.fetch(
                    params
                );
                resolve(res.data.body);
            } catch (error) {
                reject(error);
            }
        }
    );
};

export const Provider: ComponentType = props => {
    const [state, dispatch] = useReducer(reducer, initState);
    const options: Options = { getArticleList };
    const queryArticle = () => {
        getArticleList({}).then(res => {
            dispatch({ type: 'SETARTICLELIST', payload: { articleList: res } });
        });
    };
    React.useEffect(() => {
        queryArticle();
    }, []);
    return (
        // 所包裹的一系列组件/子组件都可以用state,dispatch
        <ArticleCtx.Provider value={{ state, dispatch, options }}>
            {props.children}
        </ArticleCtx.Provider>
    );
};

// 导出的是useArticleStore方法
export const useArticleStore = () => useContext(ArticleCtx);
