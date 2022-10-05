import React, {useRef} from 'react';

function ButtonClickUseRef() {
    const counterRef = useRef(0);

    const handleClick = () => {
        counterRef.current++;
        console.log(`You have clicked ${counterRef.current} times`);
    }
    console.log("I rendered!");
    return(
        <div>
            <p>You have clicked {counterRef.current} times</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default ButtonClickUseRef;