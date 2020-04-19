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
    total: number;
}

type Action =
    | { type: 'SETARTICLELIST'; payload: { articleList: Article[] } }
    | { type: 'SETTOTAL'; payload: { total: number } };

interface Options {
    queryArticle: (page?: number) => void;
}
const ArticleCtx = createContext<Context<State, Dispatch<Action>, Options>>(
    null
);

export const initState: State = {
    articleList: [],
    total: 0
};
const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'SETARTICLELIST':
            return {
                ...state,
                articleList: action.payload.articleList
            };
        case 'SETTOTAL':
            return {
                ...state,
                total: action.payload.total
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
    const queryArticle = (page?: number) => {
        getArticleList({
            pagination: {
                total: 0,
                offset: page ? (page - 1) * 10 : 0,
                limit: 10
            }
        }).then(res => {
            dispatch({
                type: 'SETARTICLELIST',
                payload: { articleList: res.articleList }
            });
            dispatch({
                type: 'SETTOTAL',
                payload: { total: res.pagination.total }
            });
        });
    };
    const options: Options = { queryArticle };
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
