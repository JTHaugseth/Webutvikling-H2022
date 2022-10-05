import {useState} from "react";
import {GetAllProducts} from './GetAllProducts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faPizzaSlice} from "@fortawesome/free-solid-svg-icons";

export const formatCurrency = (value) => {
    return Number(value).toLocaleString("en-US", {
      style: "currency",
      currency: "nok"
    })
  };
  
function NavBar() {
    return (
    <div>
        <nav >
            <div>
                <FontAwesomeIcon icon={faPizzaSlice} />
                <ul>
                    <li><a>Homepage</a></li>
                    <li><a>Shopping Cart</a></li>
                </ul>
            </div>
            <div className="logo">
                <img src="/images/logo1.png" className="fluid-image" alt="logo1"></img>
            </div>
        </nav>
    </div>
    );
}


function ProductItem ({product,onPlusQuantity, onMinusQuantity, onChangeProductQuantity}) {
    return (
        <div className="product-item">
            <img src={`/images/${product.imageSrc}`} className="fluid-image" alt={product.description} ></img>
            <div className="product-description">{product.description}</div>
            <div className="product-price">{formatCurrency(product.price)}</div>
            <div className="quantity">
              <button className="plus-btn" type="button" name="button" onClick={(event) => onMinusQuantity(event)}>
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <input
                type="text"
                className="quantity"
                step="1"
                value={product.quantity}
                onChange={(event) => onChangeProductQuantity(event)}
              />
              <button className="minus-btn" type="button" name="button" onClick={(event) => onPlusQuantity(event)}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
        </div>
        );
}

function PizzaMenu ({products, onPlusQuantity, onMinusQuantity, onChangeProductQuantity}) {

    return (
        <div className="product-card">
          {products.map((product, index) => {
            return (
              <ProductItem
                product={product}
                onMinusQuantity={(event) => onMinusQuantity(product.id, event)}
                onPlusQuantity={(event) => onPlusQuantity(product.id, event)}
                onChangeProductQuantity={(event) => onChangeProductQuantity(product.id, event)}     
              /> 
            );      
          })}
        </div>
    );
}

function ProductLayout() {
    const AllProducts = GetAllProducts();
    const [products, setProducts] = useState(AllProducts);
    const onPlusQuantity = (index, event) => {
        const cloneProducts = [...products];
        if(cloneProducts[index].quantity<10) {
          cloneProducts[index].quantity++;
        }    
        setProducts(cloneProducts);

      }
      const onMinusQuantity = (index, event) => {
        const cloneProducts = [...products];
        if(cloneProducts[index].quantity>0) {
          cloneProducts[index].quantity--;
        }
        setProducts(cloneProducts);
      }
    
      const onChangeProductQuantity = (index, event) => {
        const value = event.target.value;
        const valueInt = parseInt(value);
        const cloneProducts = [...products];
        // Minimum quantity is 1, maximum quantity is 10, can left blank to input easily
        if (value === "") {
          cloneProducts[index].quantity = value;
        } else if (valueInt > 0 && valueInt < 10) {
          cloneProducts[index].quantity = valueInt;
        }
        setProducts(cloneProducts);
      };

       
    return (
        <div >
            <NavBar/>
            <PizzaMenu 
                  products={products}
                  onPlusQuantity={onPlusQuantity}
                  onMinusQuantity={onMinusQuantity}
                  onChangeProductQuantity={onChangeProductQuantity}
            />
        </div>
      );
}
export default ProductLayout;