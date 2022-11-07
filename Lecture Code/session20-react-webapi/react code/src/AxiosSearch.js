import axios from "axios";
import { useEffect, useState } from "react";


function AxiosSearch({setBooks}){
    const [searchId, setSearchId] = useState("");
    const [searchName, setSearchName] = useState("");

    function searchBookById () {
        axios.get(`https://localhost:7220/api/books/${searchId}`)
        .then((response)=>{
            var bookArray=[];
            console.log(response.data)
            bookArray.push(response.data)
            setBooks(bookArray)
        })
        .catch(error => {console.log(error);
        });
    }

    function searchBookByName () {
        axios.get(`https://localhost:7220/api/books/${searchName}`)
        .then((response)=>{
            setBooks(response.data)
        })
        .catch(error => {console.log(error);
        });
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
export default AxiosSearch;