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

export const initState: State = {
    articleList: [] //为什么
};

const ArticleCtx = createContext<Context<State, Dispatch<Action>>>(null);

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'SETARTICLELIST':
            return {
                articleList: [
                    ...state.articleList,
                    ...action.payload.articleList
                ]
            };
        default:
            return state;
    }
};

const getArticleList = (params: TQueryArticleListReq) => {
    return new Promise<TQueryArticleListReq>(async (resolve, reject) => {
        try {
            const res: AxiosRespWithWebAPI<TQueryArticleListResp> = await queryArticleList.fetch(
                params
            );
            resolve(res.data.body);
        } catch (error) {
            reject(error);
        }
    });
};

export const Provider: ComponentType = props => {
    const [state, dispatch] = useReducer(reducer, initState);
    React.useEffect(() => {
        getArticleList({}).then(res => {
            console.log('res:', res);
        });
    }, []);
    return (
        // 所包裹的一系列组件/子组件都可以用state,dispatch
        <ArticleCtx.Provider value={{ state, dispatch }}>
            {props.children}
        </ArticleCtx.Provider>
    );
};

// 导出的是useArticleStore方法
export const useArticleStore = () => useContext(ArticleCtx);
