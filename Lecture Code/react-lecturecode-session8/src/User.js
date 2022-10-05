import React, {useState} from 'react';
import './index.css';
import Address from './Adress';
import Name from './Name';
import Count from './Count';

const User = () => {
/*     const name = "Yuan Lin"; */
    /* include javascripi inside html tag, you must not use $ */
/*     const text= <div>hello {name}</div>; */
    /*
     * 1. return (  
     * 2. return a root HTML element wrapped up by <div> or <React.Fragment> or <>
     * 3. react component shall start with uppercase letter
     */
    const [address, setAddress] = useState("");
    const todoList=[
        {id:1, name:"todo 1"},
        {id:2, name:"todo 2"}
    ];
    const updateAddress =(e)=>{
        setAddress(e.target.value);
    }
    return (
        <div>
            <Name/>
            <Address address={address} updateAddress={updateAddress}/>
            <p>My address is {address}</p>
            <ul>
                { todoList.map((item)=>
                    <li key={item.id}>{item.name}</li>
                 )}
            </ul>
        </div>

    );
}
export default User;