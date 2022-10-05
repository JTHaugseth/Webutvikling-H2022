import React, {useState} from 'react';

function Count () {
    const [count, setCount] = useState(0);

    const handleClick=()=>{
        setCount(prev=>prev+1);
    }

    return (
        <>
            <p>You have clicked {count} times</p>
                <button onClick={()=>setCount(prev=>prev+1)}>Click me</button>
                <button onClick={handleClick}>Click me</button>

        </>
    )
}
export default Count;