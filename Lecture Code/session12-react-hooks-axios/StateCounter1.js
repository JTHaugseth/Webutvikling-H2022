import React, { useState } from 'react';

function StateCounter1() {
  const [sum, setSum] = useState(0);
  function handleClick(event) {
    if (event.target.id === "plus") {
      setSum(prev=>prev+1)
    } else if (event.target.id === "minus") {
      setSum(prev=>prev-1)
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

export default StateCounter1;