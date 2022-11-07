import axios from "axios";
import { useEffect, useState } from "react";


function AxiosUpdate({onEditBook, updatedBook, setUpdatedBook}){

    const [updatedId, setUpdatedId] = useState("");
    const [updatedAuthor, setUpdatedAuthor] = useState("");
    const [updatedCategory, setUpdatedCategory] = useState("");
    const [updatedPrice, setUpdatedPrice] = useState("");
    const [updatedBookName, setUpdatedBookName] = useState("");
    const [updatedFile, setUpdatedFile] = useState("");

    useEffect(() => {
        setUpdatedBook({
            id: updatedId?updatedId:updatedBook.id,
            author: updatedAuthor?updatedAuthor:updatedBook.author,
            category: updatedCategory?updatedCategory:updatedBook.category,
            price: updatedPrice?updatedPrice:updatedBook.price,
            bookName: updatedBookName?updatedBookName:updatedBook.bookName,
            file: updatedFile?updatedFile:updatedBook.file})
    }, [updatedId, updatedAuthor, updatedCategory, updatedPrice, updatedBookName, updatedFile]);


    function fetchBook() {
        axios
        .get(`https://localhost:7220/api/books/${updatedId}`)
        .then((response)=>setUpdatedBook(response.data))
        .catch(error=>console.log(error));
    }

    function editBook() {
        onEditBook(updatedId)
    }
    

    return (
        <div>
            <h3>Update A Book</h3>
            <div>
                <input type="text" id="update-book-Id" placeholder="Enter the Book Id" onChange={(e)=>setUpdatedId(e.target.value)}></input>
                <input type="text" id="update-book-name" value={updatedBook.bookName} placeholder="Edit the Book Name" onChange={(e)=>setUpdatedBookName(e.target.value)}></input>
                <input type="text" id="update-book-price" value={updatedBook.price} placeholder="Edit the Book Price" onChange={(e)=>setUpdatedPrice(e.target.value)}></input>
                <input type="text" id="update-book-category" value={updatedBook.category} placeholder="Edit the Book Category" onChange={(e)=>setUpdatedCategory(e.target.value)}></input>
                <input type="text" id="update-book-author" value={updatedBook.author} placeholder="Edit the Book Author" onChange={(e)=>setUpdatedAuthor(e.target.value)}></input>
                <input type="text" id="update-book-file" value={updatedBook.file} placeholder="Edit the Book Image" onChange={(e)=>setUpdatedFile(e.target.value)}></input>
            </div>                
            <button id="fetch-book-btn" onClick={fetchBook}>Fetch</button>
            <button id="update-book-btn" onClick={editBook}>Update</button>
        </div>
    )
}
export default AxiosUpdate;