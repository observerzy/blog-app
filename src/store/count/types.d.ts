export as namespace ICount;

export interface State {
  count: number;
}

type Action =
  | { type: 'INCREMENT'; payload: { num: number } }
  | { type: 'DECREMENT'; payload: { num: number } }
  | { type: 'RESET' };
