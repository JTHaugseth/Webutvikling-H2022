import React, { useReducer, useRef } from 'react';

function ReducerCounter2() {
  const inputRef = useRef();
  const [sum, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'plus':
        return state + parseInt(action.input);
      case 'minus':
        return state - parseInt(action.input);
      default:
        return state;
    }
  }, 0);

  function handleClick(event) {
    if (event.target.id === "plus") {
      dispatch({
        type: 'plus',
        input: inputRef.current.value
      });
    } else if (event.target.id === "minus") {
      dispatch({
        type: 'minus',
        input: inputRef.current.value
      });
    }
    inputRef.current.value = 0;
  }

  return (
    <>     
      <input type="text" ref={inputRef}/>
      <button id="plus" onClick={(event) => handleClick(event)}>
        Plus
      </button>
      <button id="minus" onClick={(event) => handleClick(event)}>
        Minus
      </button>
      Sum:{sum}
    </>
  );
}

export default ReducerCounter2;