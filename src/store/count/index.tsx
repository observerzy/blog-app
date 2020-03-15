import React, {
  createContext,
  useContext,
  useReducer,
  ComponentType,
  Dispatch
} from 'react';
import reducer from './reducer';

export const initState = {
  count: 0
};

const CountCtx = createContext<Context<ICount.State, Dispatch<ICount.Action>>>(
  null
);

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
