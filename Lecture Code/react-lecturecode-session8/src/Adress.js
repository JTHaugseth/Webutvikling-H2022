import React from 'react';
import './index.css';

const Address = (props) => {
    return (
        <>
        <p>Type your address:</p>
        <input type="text" value={props.address} onChange={props.updateAddress}></input>
        </>
    )
}
export default Address;