import React, {useEffect, useRef, useState} from 'react';

function Timer() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setCount(count => {
                if (count === 10) {
                    clearInterval(timer)
                    return count;
                }
                else return count + 1
            })
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