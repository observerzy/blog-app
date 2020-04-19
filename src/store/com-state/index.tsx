import React, {
    createContext,
    useContext,
    useReducer,
    ComponentType,
    Dispatch
} from 'react';

export interface State {
    current: number; //管理首页tabs当前页
}

type Action = { type: 'SETCURRENT'; payload: { current: number } };

interface Options {}
const ComCtx = createContext<Context<State, Dispatch<Action>, Options>>(null);

export const initState: State = {
    current: 0
};
const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'SETCURRENT':
            return {
                ...state,
                current: action.payload.current
            };
        default:
            return state;
    }
};

export const Provider: ComponentType = props => {
    const [state, dispatch] = useReducer(reducer, initState);
    const options: Options = {};

    return (
        // 所包裹的一系列组件/子组件都可以用state,dispatch
        <ComCtx.Provider value={{ state, dispatch, options }}>
            {props.children}
        </ComCtx.Provider>
    );
};

// 导出的是useuseComStore方法
export const useComStore = () => useContext(ComCtx);
