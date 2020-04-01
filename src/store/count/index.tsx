import React, {
    createContext,
    useContext,
    useReducer,
    ComponentType,
    Dispatch
} from 'react';

export const initState = {
    count: 0
};

const CountCtx = createContext<Context<ICount.State, Dispatch<ICount.Action>>>(
    null
);

const reducer = (state: ICount.State, action: ICount.Action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + action.payload.num };
        case 'DECREMENT':
            return { count: state.count - action.payload.num };
        case 'RESET':
            return { count: 0 };
        default:
            return state;
    }
};

export const Provider: ComponentType = props => {
    const [state, dispatch] = useReducer(reducer, initState);
    return (
        // 所包裹的一系列组件/子组件都可以用state,dispatch
        <CountCtx.Provider value={{ state, dispatch }}>
            {props.children}
        </CountCtx.Provider>
    );
};

// 导出的是useTestStore方法
export const useTestStore = () => useContext(CountCtx);
