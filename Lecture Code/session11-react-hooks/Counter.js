import {React, useState, useEffect } from 'react'
 
const Counter = () => {
    const [count, setCount] = useState(0);

    /*
     * this effect is only executed when count changes
     */
    useEffect(() => {
        const timer = setInterval(() => {
          setCount(prev=>prev+1);
        }, 1000);
        return () => clearInterval(timer);
      }, [count]);
      console.log("I rendered!")
    /*
     * this effect is only executed at mounting phase 
     */
     useEffect(() => {
      const timer = setInterval(() => {
        setCount(prev=>prev+1);
      }, 1000);
      return () => clearInterval(timer);
    }, []); 
    /*
     * this effect is executed at each render
     */
     useEffect(() => {
        const timer = setInterval(() => {
          setCount(prev=>prev+1);
        }, 1000);
        return () => clearInterval(timer);
      });
 

    return (
        <div>Count: {count}</div>    
    )
}
export default Counter;