import React from 'react';
import { Button } from 'antd';
import { useTestStore } from '../../store/count';

const CountOperation: React.SFC = () => {
  const { dispatch } = useTestStore();
  const increment = () => {
    dispatch({
      type: 'INCREMENT',
      payload: { num: 5 }
    });
  };
  const decrement = () => {
    dispatch({
      type: 'DECREMENT',
      payload: { num: 1 }
    });
  };
  const reset = () => {
    dispatch({
      type: 'RESET'
    });
  };
  return (
    <div>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
      <Button onClick={reset}>Reset</Button>
    </div>
  );
};
export default CountOperation;
