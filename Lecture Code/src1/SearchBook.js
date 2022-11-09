import axios from "axios";
import { useEffect, useState } from "react";


export default function SearchBook({onSearchBookById, onSearchBookByName}){
    const [searchId, setSearchId] = useState("");
    const [searchName, setSearchName] = useState("");

    function searchBookById () {
        onSearchBookById(searchId);
    }

    function searchBookByName () {
        onSearchBookByName(searchName);
    }

    return(
        <div>
            <div>
                <h3>Search Book by Id</h3>
                <div>
                    <input type="text" id="search-book-Id" placeholder="Enter the Book Id" onChange={(e)=>setSearchId(e.target.value)}></input>
                </div>                
                <button id="search-book-id-btn" onClick={searchBookById}>Search By Id</button>
            </div>

            <div>
                <h3>Search Books By Name</h3>
                <div>
                    <input type="text" id="search-book-Name" placeholder="Enter the Book Name" onChange={(e)=>setSearchName(e.target.value)}></input>
                </div>                
                <button id="search-book-name-btn" onClick={searchBookByName}>Search By Name</button>
            </div>
        </div>);
}
