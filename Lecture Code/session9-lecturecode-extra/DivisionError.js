import {useState} from "react";

function DivisionError() {
    const [numerator, setNumerator] = useState("0");
    const [denominator, setDenominator] = useState("0");
    const [output, setOutput] = useState("0");
    const [hasError, setHasError] = useState(false);
    const updateValue =(e)=>{
        if(e.target.id === "numerator") {
            setNumerator(e.target.value);
        } else {
            setDenominator(e.target.value);
        }
    }
    const divide =()=>{
        try{
            if(denominator === "0") {
                throw new Error("denominator === 0!!!")
            }
            setOutput(numerator / denominator);
        } catch {
            setHasError(true);
        }

    }
    const ErrorComponent =()=>{
        return(
            <div>You can not divide by 0</div>
        )
    }
    if(!hasError) { return (
        <section>
        <div>
            <label>Numerator</label>
            <input id="numerator" type="text" value={numerator} onChange={updateValue}></input>
        </div>
        <div>
            <label>Denominator</label>
            <input id="denominator" type="text" value={denominator} onChange={updateValue}></input>
        </div>
        <div>
            <label>Output</label>
            <p>{output}</p>
        </div>
        <button onClick={divide}>Divide</button>
    </section>
    )}
    else return( <ErrorComponent/>)

}
export default DivisionError;