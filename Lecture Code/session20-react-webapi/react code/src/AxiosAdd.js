import axios from "axios";
import { useEffect, useState } from "react";


function AxiosAdd({onAddBook, setNewBook, newBook}){

    const [id, setId] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [bookName, setBookName] = useState("");
    const [file, setFile] = useState("");

    useEffect(() => {
        setNewBook({id, author, category, price, bookName, file});
    }, [id, author, category, price, bookName, file]);
    
    function addBook () { 
        onAddBook(newBook);        
    }

    return (
        <div>
            <h3>Add A Book</h3>
            <div>
                <input type="text" id="add-book-Id" placeholder="Enter the Book Id" onChange={(e)=>setId(e.target.value)}></input>
                <input type="text" id="add-book-name" placeholder="Enter the Book Name" onChange={(e)=>setBookName(e.target.value)}></input>
                <input type="text" id="add-book-price" placeholder="Enter the Book Price" onChange={(e)=>setPrice(e.target.value)}></input>
                <input type="text" id="add-book-category" placeholder="Enter the Book Category" onChange={(e)=>setCategory(e.target.value)}></input>
                <input type="text" id="add-book-author" placeholder="Enter the Book Author" onChange={(e)=>setAuthor(e.target.value)}></input>
            </div>                
            <button id="add-book-btn" onClick={addBook}>Add</button>
        </div>
    )
}
export default AxiosAdd;