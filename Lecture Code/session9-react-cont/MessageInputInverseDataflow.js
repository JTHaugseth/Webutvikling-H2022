import React, {useState}  from 'react';

const MessageInput = (props) => { 
    return (       
        <input
            type="text"
            value={props.message}
            placeholder="Enter a message"
            onChange={props.updateMessage}
        />
    );
}

export default function MessageInputInverseDataflow(){
    const[message, setMessage] = useState("");
    const updateMessage = (event) => {
        setMessage(event.target.value);
    }
    return (
        <React.Fragment>
            <MessageInput
            message={message}
            updateMessage = {updateMessage}
            />
            <h3>You have entered: {message}</h3>            
        </React.Fragment>
    );
}


