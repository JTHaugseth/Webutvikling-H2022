import React, {useEffect, useRef, useState} from 'react';

function Timer() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            if(count===10)
                return clearInterval(timer);
            setCount(count+1)
        }, 1000);
        return () => clearInterval(timer);
      }, []);

      console.log("I rendered!")
    return(
        <div>
            <p>Count: {count}</p>
        </div>
    );
} 

export default Timer;