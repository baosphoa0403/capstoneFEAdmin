import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/store';
import { decrement, increment } from './counterSlice';

export function Counter(): JSX.Element {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label='Increment value'
          onClick={(): {
            payload: undefined;
            type: string;
          } => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label='Decrement value'
          onClick={(): {
            payload: undefined;
            type: string;
          } => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
}
