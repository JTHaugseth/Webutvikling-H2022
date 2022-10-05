import React, {useEffect, useRef, useState} from 'react';

function Timer() {
    const [count, setCount] = useState(0);
    const countRef = useRef(0)
    useEffect(() => {
        console.log("useEffect")
        const timer = setInterval(() => {
            if(countRef.current===10)
                return clearInterval(timer);
            countRef.current = countRef.current + 1
            setCount(countRef.current)
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