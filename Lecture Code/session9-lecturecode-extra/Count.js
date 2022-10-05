import { useState } from "react";

function Count() {
    const [count, setCount] = useState(0);
    const handleClick= () => {
        let newCount = count +1;
        setCount(newCount);
        console.log(`I clicked ${newCount} times `);
    }
    console.log("I rendered");
    return(
        <div>
            <p>{count}</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}
export default Count;