import React, { useReducer, useState } from 'react';

function ReducerCounter3() {
  const [inputValue, setInputValue] = useState(0);
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
  function updateValue(event) {
    setInputValue(event.target.value);
  }

  function handleClick(event) {
    if (event.target.id === "plus") {
      dispatch({
        type: 'plus',
        input: inputValue
      });
    } else if (event.target.id === "minus") {
      dispatch({
        type: 'minus',
        input: inputValue
      });
    }
    setInputValue(0);
  }

  return (
    <>     
      <input type="text" value={inputValue} onChange={updateValue}/>
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

export default ReducerCounter3;