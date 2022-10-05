import React, {useState} from 'react';


const ClickButton = ({setListItem}) => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        let newCounter = counter +1;
        setCounter(newCounter);
        let txt=`You have clicked ${newCounter} times`;
        setListItem(prevState => [...prevState, txt]);
    }
    return (
        <div>
            <p>You have clicked {counter} times</p>
            <button onClick={handleClick}>Click me!</button>
        </div>
    );
}

const Quantity = ({setListItem}) => {
    const [quantity, setQuantity] = useState(0);
    const addItem =(inputValue) => {
        const newTxt = `You have chosen quantity ${inputValue}`;
        setListItem(prevState=> [...prevState, newTxt]);
    }

    const handleClickQuantity = (event) => {
        let newQuantity;
        if(event.target.id==="plus") {
            newQuantity = quantity+1;
        } else {
            newQuantity = quantity -1;
        }
        setQuantity(newQuantity);
        addItem(newQuantity);
    }

    const handleChangeQuantity = (event) => {
        let inputValue=event.target.value;
        setQuantity(inputValue);
        addItem(inputValue);
    }

    return(
        <div>
            <p>You have chosen quantity {quantity}</p>
            <button onClick={handleClickQuantity} id="plus">plus</button>
            <input type="text" value={quantity} onChange={handleChangeQuantity}></input>
            <button onClick={handleClickQuantity} id="minus">minus</button>    
        </div>
    );
}

const SubmitForm = ({setListItem}) => {
    const [input, setInput] = useState("");

    const handleChange = (event) => {
        setInput(event.target.value);
    }
    const handleSubmit = (event) => {
        const newTxt = `You have submitted ${input}`;
        setListItem(prevState=>[...prevState, newTxt]);
        event.preventDefault();
    }

    return(
        <div>
            <p>You have chosen {input}</p>
            <form onSubmit={handleSubmit}>
                <label> Fruit:
                    <select value={input} onChange={handleChange}>
                        <option value="Orange">Orange</option>
                        <option value="Apple">Apple</option>
                        <option value="Grape">Grape</option>
                    </select>
                </label>
                <input type="submit" name="Submit"></input>
            </form>
        </div>
    );
}

const LogList =({listItem}) => {
    return(
        <ul>
            {listItem.map(item=>{
                return(
                    <li>{item}</li>
                )}
            )}
        </ul>
    );
}

const UpdateMessage =()=>{
    const [messageObj, setMessageObj] = useState({
        id: 1,
        message: "Message1"
    });
    const updateMessageObj=(e)=>{
        setMessageObj(prevState=>{
            //return {...prevState, message: e.target.value}
            return Object.assign({},prevState, {message: e.target.value});
        })
    }
    return(
        <div>
            <input type="text" placeholder='enter your message' 
            onChange={updateMessageObj}></input>
            <p>Id: {messageObj.id} Message: {messageObj.message}</p>
        </div>
    )
}

function ReactSandbox() {
    const [listItem, setListItem] = useState([]);

    return(
        <div>
            <ClickButton setListItem={setListItem}/>
            <Quantity setListItem={setListItem}/>
            <SubmitForm setListItem={setListItem}/>
            <LogList listItem={listItem}/>
            <UpdateMessage/>
        </div>
    );
}
export default ReactSandbox;