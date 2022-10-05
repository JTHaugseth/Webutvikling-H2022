import {useState} from "react";

const MessageInput = ({addMessage}) =>{
    const [message, setMessage] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        addMessage(message);
    }
    return (<form onSubmit={handleSubmit}>
        <input 
        type ="text"
        value={message}
        placeholder="Enter a message"
        onChange={(e) => setMessage(e.target.value)}
        />
        <button>Submit</button>
        </form>
    ); 
}
const MessageList = ({messages})=> {
    console.log(messages)
    return(
        <div>
            <h1>All Messages</h1>
            <ul>
               {messages.map(message => { 
                return(
                <li>{message}</li>
                )}
               )}
            </ul>
        </div>
    )
}

const MessageBox =()=>{
    const [messages, setMessages] = useState([]);
    const onAddMessage = (message)=>{
        const newMessages = [...messages, message];
        setMessages(newMessages);
    }

    return(
        <div>
            <MessageInput addMessage={onAddMessage} />
            <MessageList messages={messages}/>
        </div>
    );

}
export default MessageBox;
