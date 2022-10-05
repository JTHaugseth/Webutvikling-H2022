import React, { useState } from 'react';

export default function DivisionError() {
  var [numerator, setNumerator] = useState("");
  var [denominator, setDenominator] = useState("");
  var [executionOutput, setExecutionOutput] = useState("");
  var [hasError, setHasError] = useState(false);
  function getDivision() {
    try {
      if (denominator === "0") {
        throw new Error("Division By 0");
      }
      setExecutionOutput(numerator / denominator);
    } catch {
      setHasError(true);
    }
  }
  function updateValue(event) {
    if (event.target.id === "numerator") {
      setNumerator(event.target.value);
    } else {
      setDenominator(event.target.value);
    }
  }

  if(!hasError) {
    return (
      <div>        
          <section className="App">
            <div>
              <label>First Value:{" "}</label>
              <input id="numerator" type="text" value={numerator} onChange={updateValue} />
            </div>
            <div>
              <label>Second Value:{" "}</label>
              <input id="denominator" type="text" value={denominator} onChange={updateValue} />
            </div>
            <div>Output: {executionOutput}</div>
            <input type="button" onClick={getDivision} value="Divide Values" />
          </section>
      </div>
    );
  } else {
    return <ErrorComponent></ErrorComponent>
  }
}
function ErrorComponent() {
  return <h1>Division by 0 Error</h1>
}
