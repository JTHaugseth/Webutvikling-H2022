import React, {useState} from 'react';

function ButtonClickUseState() {
    const [counter, setCounter]= useState(0);

    const handleClick = () => {
        let newCounter = counter +1;
        setCounter(newCounter);
        console.log(`You have clicked ${newCounter} times`);
    }
    console.log("I rendered!");
    return(
        <div>
            <p>You have clicked {counter} times</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default ButtonClickUseState;