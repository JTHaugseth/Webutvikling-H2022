import React, {useState, useContext}  from 'react';
const ChildA = () => { 
    const { text, setText } = useContext(TextContext);
    const handleChange = (event) => {
        setText(event.target.value);
    }
    return (     
        <input
        type="text"
        value={text}
        onChange={handleChange}
        />
    );
}
const ChildB = () => { 
    const {text} = useContext(TextContext)
    return (       
        <h3>Text is: {text}</h3>
    );
}
const TextContext = React.createContext();
export default function ParentandChildsUseContext () {
    const[text, setText] = useState("");
    return (
        <TextContext.Provider value={{ text, setText }}>
            <ChildA />
            <ChildB />
        </TextContext.Provider>
    );
}



