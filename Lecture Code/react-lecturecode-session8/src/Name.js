import React, {useState} from 'react';
import './index.css';

const Name = () => {
    const [name, setName] = useState("");
    const handleChange =(e)=>{
        setName(e.target.value);
    }
    return (
        <>
        <p>Type your name:</p>
        <input type="text" value={name} onChange={handleChange}></input>
        <p>My name is: {name}</p>
        </>
    )
}
export default Name;