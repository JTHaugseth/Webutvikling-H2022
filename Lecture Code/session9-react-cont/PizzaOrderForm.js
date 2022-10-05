import {useState} from "react";


const PizzaItem =({obj, onUpdateOrder})=>{

    const [inputValue, setInputValue] = useState(""); 

    function handleSubmit(e, id) {
        e.preventDefault();
        onUpdateOrder(id, inputValue);
    }

    return(
        <form onSubmit={e=>handleSubmit(e, obj.id)}>
            <div key={obj.id} className="pizza-item">
                <p>#{obj.id}</p>
                <p>{obj.name}</p>
                <input type="text" value={inputValue} placeholder="0" onChange={e => setInputValue(e.target.value)} ></input>
                <button>Order</button>
            </div>
        </form>
    );
}

const PizzaOrderForm =()=>{
    const initMenu = [
        {id: 1, name: 'Pepperoni Pizza', amount: 0},
        {id: 2, name: 'Hawaiian Pizza', amount: 0},
        {id: 3, name: 'Pizza margherita', amount: 0},
      ];

    const [menu, setMenu] = useState(initMenu);

    const updateOrder =(id, inputValue)=>{
        const newState = menu.map(obj => {
            // if id equals 2, update country property
            if (obj.id === id) {
              return {...obj, amount:inputValue};            
            }      
            // otherwise return object as is
            return obj;
          });
          console.log(newState)
          setMenu(newState);
    }
    return(
        <div>
        {menu.map(obj => {
            return(
                <PizzaItem obj={obj} onUpdateOrder={updateOrder}/>
            );
        })}
        <p>You have Ordered below pizza</p>
        {menu.map(obj => {
        return (
            <div key={obj.id} className="pizza-item">
                <p>{obj.name}</p>
                <p>{obj.amount}</p>
            </div>
            );
        })}
        </div>
    );        
}
export default PizzaOrderForm;

