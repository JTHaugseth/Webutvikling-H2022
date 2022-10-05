import React, {useState, useContext}  from 'react';  
  const Search = () => {
    const { items, setItems } = useContext(ListItemContext);
    const [input, setInput] = useState("");  
    const onChangeHandler = e => {
      setInput(e.target.value);
    };
    const handleButtonClick = () => {
      const cloneItems = [...items, input];
      setItems(cloneItems);
      setInput("");
    };
    return (
      <div>
        <input type="text" value={input} onChange={onChangeHandler} />
        <button onClick={handleButtonClick}>Add</button>
      </div>
    );
  };  

  const ListItems = () => {
    const { items } = useContext(ListItemContext);
    return (     
    <ul>
      {items.map((item) => {
        return (<div>{item}</div>)}
      )}
    </ul>
    )
  };    

  const ListItemContext = React.createContext();
  export default function SearchandListItemUseContext() {
    const [items, setItems] = useState([]); 

    return (
      <ListItemContext.Provider value={{ items, setItems }}>
        <Search/>
        <ListItems/>
      </ListItemContext.Provider>
    );
  }