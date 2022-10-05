import React, {useState}  from 'react';

const ChildA = (props) => { 
    return (       
        <input
        type="text"
        value={props.text}
        onChange={props.handleTextChange}
        />
    );
}
const ChildB = (props) => { 
    return (       
        <h3>Text is: {props.text}</h3>
    );
}

export default function ParentandChilds(){
    const[text, setText] = useState("");
    const handleTextChange = (event) => {
        setText(event.target.value);
    }
    return (
        <React.Fragment>
            <ChildA
                text = {text}
                handleTextChange = {handleTextChange}
            />
            <ChildB
                text = {text}
            />
        </React.Fragment>
    );
}


