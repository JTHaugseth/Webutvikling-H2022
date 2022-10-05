import {useState} from "react";

function MessageInput({addMessage}) {
    const [message, setMessage] =useState("");
    return(
        <div>
            <input
            type="text"
            value={message}
            placeholder="enter a message"
            onChange={(e)=>setMessage(e.target.value)}></input>
            <p>{message}</p>
            <button onClick={()=>{addMessage(message)}}>Add Message</button>
        </div>
    )
}
function MessageList({messages}) {
    return(
        <div>
            <h1>All Messages</h1>
            <ul>
                {messages.map(message=>{
                    return(
                        <li>{message}</li>
                    )}
                )}
            </ul>
        </div>
    )

}
function MessageBox() {
    const [messages, setMessages] = useState([]);
    const onAddMessage =(message)=>{
        const newMessages =[...messages, message];
        setMessages(newMessages);
    }

    return(
        <>
        <MessageInput addMessage={onAddMessage}/>
        <MessageList messages ={messages}/>
        </>
    )
}
export default MessageBox;