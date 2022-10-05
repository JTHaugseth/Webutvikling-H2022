import {useState} from "react";


const PizzaOrder =()=>{
    const initMenu = [
        {id: 1, name: 'Pepperoni Pizza', amount: 0},
        {id: 2, name: 'Hawaiian Pizza', amount: 0},
        {id: 3, name: 'Pizza margherita', amount: 0},
      ];

    const [menu, setMenu] = useState(initMenu);

    const updateOrder = (id)=>{        
        const newState = menu.map(obj => {
            // if id equals 2, update country property
            if (obj.id === id) {
              return {...obj, amount: obj.amount+1};            
            }      
            // otherwise return object as is
            return obj;
          });
          setMenu(newState);
    }
    return(
        <div>
            {menu.map(obj => {
                return (
                    <div key={obj.id} className="pizza-item">
                        <p># {obj.id}</p>
                        <p>{obj.name}</p>
                        <input type="text" value={obj.amount} ></input>
                        <button onClick={(e) => updateOrder(obj.id)}>Update Order</button>
                    </div>
                    );
            })}
        </div>
    );

}
export default PizzaOrder;

