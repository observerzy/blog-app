import React from 'react';
import { useTestStore } from '../../store/count';

const ShowCount: React.SFC = () => {
  const { state } = useTestStore();
  return <div>count:{state.count}</div>;
};
export default ShowCount;
