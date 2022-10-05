import React, {useState, useEffect} from 'react';

function ReactUseEffectDependencies() {
    const [darkMode, setDarkMode] = useState(false);
    const [inputValue, setInputValue] = useState("");
    useEffect(() => {
        console.log("useEffect only on mode changes");
      }, [darkMode]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    };
    const handleCheckboxChange=()=>{
        setDarkMode(prev=>!prev);
    }
    console.log("I rendered!")
    return(
        <div style={darkMode?{backgroundColor:'black'}: {}}>
            <label>
                Input something:
                <input type="text" value={inputValue}             
                onChange={handleInputChange} />
            </label>
            <hr></hr>
            <label>
                Check your mode:
                <input type="checkbox" checked={darkMode} 
                onChange={handleCheckboxChange} />
            </label>
        </div>
    );
}
export default ReactUseEffectDependencies;