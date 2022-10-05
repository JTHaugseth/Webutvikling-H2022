import React, { useReducer } from 'react';

function ReducerCounter1() {
  const [sum, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'plus':
        return state + 1;
      case 'minus':
        return state - 1;
      default:
        return state;
    }
  }, 0);

  function handleClick(event) {
    if (event.target.id === "plus") {
      dispatch({
        type: 'plus'
      });
    } else if (event.target.id === "minus") {
      dispatch({
        type: 'minus'
      });
    }
  }

  return (
    <>     
      <button id="plus" onClick={(event) => handleClick(event)}>
        Plus
      </button>
      <hr></hr>
      <button id="minus" onClick={(event) => handleClick(event)}>
        Minus
      </button>
      <hr></hr>
      Sum:{sum}
    </>
  );
}

export default ReducerCounter1;