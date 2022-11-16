import {useEffect, useState} from "react"
export default function SearchBook({onSearchByName, onSearchByPrice}) {
    const [searchName, setSearchName] = useState("");  
    const [searchPrice, setSearchPrice] = useState("");  

    const searchBookByName=()=>{
        onSearchByName(searchName);
    }
    const searchBookByPrice=()=>{
        onSearchByPrice(searchPrice);
    }

    return(
        <>
            <h3>Search a Book by Name</h3>
            <div>                
                <input type="text" id="search-book-name" onChange={(e)=>setSearchName(e.target.value)}></input>
             </div>
            <button id="search-book-name-btn" onClick={searchBookByName}>Search by Name</button>
            <h3>Search a Book by Price</h3>
            <div>                
                <input type="text" id="search-book-price" onChange={(e)=>setSearchPrice(e.target.value)}></input>
             </div>
            <button id="search-book-price-btn" onClick={searchBookByPrice}>Search by Price</button>
        </>
    )
}