import axios from "axios";
import { useEffect, useState } from "react";


export default function UpdateBook({onUpdateBook, onFetchBook, updatedBook, setUpdatedBook}){

    const [id, setId] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [bookName, setBookName] = useState("");
    const [file, setFile] = useState("");
    const [selectedImage, setSelectedImage] = useState("");

    useEffect(() => {
        setUpdatedBook({
            id: updatedBook.id, //we are not able to update id
            author: author?author:updatedBook.author,
            category: category?category:updatedBook.category,
            price: price?price:updatedBook.price,
            bookName: bookName?bookName:updatedBook.bookName,
            file: file?file:updatedBook.file})
    }, [id, author, category, price, bookName, file]);


    async function fetchBook() {
        await onFetchBook(id);
    }

    async function updateBook() {
        await onUpdateBook(updatedBook, selectedImage)
    }    
    const handleFileSelect = (event) => {
        setSelectedImage(event.target.files[0]);
        setFile(event.target.files[0].name);
    }

    return (
        <div>
            <h3>Update A Book</h3>
            <div>
                <input type="text" id="update-book-Id" placeholder="Enter the Book Id" onChange={(e)=>setId(e.target.value)}></input>
                <input type="text" id="update-book-name" value={updatedBook.bookName} placeholder="Edit the Book Name" onChange={(e)=>setBookName(e.target.value)}></input>
                <input type="text" id="update-book-price" value={updatedBook.price} placeholder="Edit the Book Price" onChange={(e)=>setPrice(e.target.value)}></input>
                <input type="text" id="update-book-category" value={updatedBook.category} placeholder="Edit the Book Category" onChange={(e)=>setCategory(e.target.value)}></input>
                <input type="text" id="update-book-author" value={updatedBook.author} placeholder="Edit the Book Author" onChange={(e)=>setAuthor(e.target.value)}></input>
                <input type="file" id="update-book-image" onChange={handleFileSelect}/>
            </div>                
            <button id="fetch-book-btn" onClick={fetchBook}>Fetch</button>
            <button id="update-book-btn" onClick={updateBook}>Update</button>
        </div>
    )
}
