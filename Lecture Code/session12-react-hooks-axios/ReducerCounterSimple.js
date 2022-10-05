import React, { useReducer, useRef } from 'react';

function ReducerCounterSimple() {
  const [output, dispatch] = useReducer((state, action) => {
    return state + action;
  }, 0);
  return (
    <div>
      {output}

      <button onClick={() => dispatch(1)}>
        Plus
      </button>
    </div>
  );
}

export default ReducerCounterSimple;