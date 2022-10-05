import React, {useState, useEffect} from 'react';

 function Timer() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
          setCount(count => count + 1);
        }, 1000);
        return () => clearInterval(timer);
      }, [count]);

      console.log("I rendered!")
    return(
        <div>
            <p>Count: {count}</p>
        </div>
    );
} 

export default Timer;