import * as React from "react";
import {Routes, Route, Link, NavLink, BrowserRouter} from "react-router-dom";

import {useParams, useNavigate} from "react-router-dom";


function Home() {  
    const navigate = useNavigate();
    return (
      <div>
        <h1>This is a home page</h1>
        <ul className="flex-link">
            {/*         <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contact</Link></li> */}
        <li><button onClick={()=>navigate("/products")}>Products</button></li>
        <li><button onClick={()=>navigate("/contact")}>Contact</button></li>
        </ul>
      </div>
    );
}


  
function Contact({contactArray}) {  
    const navigate = useNavigate();
    return (
      <div>
        <h1>Welcome to contact us at below address:</h1>
        {contactArray.map (contact => {
          return(
          <div>
            <p style={{fontWeight: "bold"}}>Name:{contact.name}</p>
            <p>Address: {contact.address}</p>
            <p>Phone: {contact.phone}</p>
            <hr/>
          </div>)  
          })
        }
        <button onClick={()=>navigate(-1)}>Back</button>
      </div>
    );
}

function Products({productList}) {  
    const navigate = useNavigate();
    return (
      <div>
        <h1>Our Products</h1>
        <ul>{productList.map(product => {
          return(
          <div>
            <Link to={`${product.id}`}>Product {product.id}</Link>
            <p>Name:{product.name}</p> 
            <p>Price:{product.price}</p>
            <hr/>
          </div>)  
          })}</ul>  
      <button onClick={()=>navigate(-1)}>Back</button>
      </div>
    );
}
function ProductItem({productList}) {  
    const {productId} = useParams();
    let product = productList.find((product)=>
    {
        return product.id===parseInt(productId)
    });
    return(
        <>
        <p>Product {product.id} </p>
        <p>{product.name} {product.price}</p>
        <Link to="/products">Back to Products</Link>
        </>
    )
}

function ReactRouter() {
    const contactArray = [
        {
          name: "Harry Porter",
          phone: "12345678",
          address: "Magic School, UK"
        },
        {
          name: "David Bowie",
          phone: "98765432",
          address: "Music Studio, UK"
        }
      ];

      const productList = [
        {
            id: 0,
            name: "Music Album",
            price: "200 Kr"
        },
        {
            id: 1,
            name: "Magic Ball",
            price: "1000 Kr"
        }
      ];
    
    return <BrowserRouter>
        <nav>
            <ul className="header">
                <li><NavLink to="/home" activeClassName="active">HomePage</NavLink></li>
                <li><NavLink to="/products" activeClassName="active">Products</NavLink></li>
                <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
            </ul>
        </nav>
        <Routes>
            <Route path="/home"  element={<Home/>} />
            <Route path="/products" element={<Products productList={productList}/>}/>
            <Route path="/products/:productId" element={<ProductItem 
                productList={productList}/>}/>
            <Route path="/contact" element={<Contact contactArray={contactArray}/>}/>


{/*             <Route path="/products" element={<Products productList={productList}/>}>
             <Route path=":productId" element={<ProductItem productList={productList}/>}/>
            </Route>
 */}

        </Routes>
    </BrowserRouter>;

}
export default ReactRouter;