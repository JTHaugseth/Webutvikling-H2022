import axios from "axios";
import { useEffect, useState } from "react";
import AxiosSearch from './AxiosSearch';
import AxiosAdd from './AxiosAdd';
import AxiosDelete from './AxiosDelete';
import AxiosUpdate from './AxiosUpdate';

function ReactAxios(){
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState("");
    const [deletedBook, setDeletedBook] = useState("");
    const [updatedBook, setUpdatedBook] = useState("");

    useEffect(()=>{
        axios
        .get("https://localhost:7220/api/books")
        .then((response)=>setBooks(response.data))
        .catch(error=>console.log(error))
    },[newBook, deletedBook, updatedBook]);     


    function onAddBook(newBook) {
        console.log(JSON.stringify(newBook));
        axios.post('https://localhost:7220/api/books', 
        newBook, 
        {
            headers: {
            'Content-Type': 'application/json'
            }
        })
        .then((response)=>{setNewBook(undefined)})
        .catch(error => {console.log(error);});
    }

    function onDeleteBook (deleteId) {
        axios.delete(`https://localhost:7220/api/books/${deleteId}`)
        .then((response)=>{setDeletedBook(undefined)})
        .catch(error => {console.log(error);
        });
    }

    
    function onEditBook(updatedId) {
        axios.put(`https://localhost:7220/api/books/${updatedId}`, 
        JSON.stringify(updatedBook), 
        {
            headers: {'Content-Type': 'application/json'}
        })
        .then((response)=>{
            setUpdatedBook({...updatedBook})
        })
        .catch(error => {console.log(error);});
    }

    return(
        <div>
            <AxiosSearch setBooks={setBooks}/>
            <AxiosAdd onAddBook={onAddBook} setNewBook={setNewBook} newBook={newBook}/>
            <AxiosDelete onDeleteBook={onDeleteBook} setDeletedBook={setDeletedBook} deletedBook={deletedBook}/>
            <AxiosUpdate onEditBook={onEditBook} setUpdatedBook={setUpdatedBook} updatedBook={updatedBook}/>

            {books.map(book=>{
                return (
                    <div className="item">
                        <p>Book ID: {book.id}</p>
                        <p>Book Name: {book.bookName}</p>
                        <p>Book Price:{book.price}</p>
                        <p>Book Category: {book.category}</p>
                        <p>Book Author: {book.author}</p>
                    </div>
                );
            })}
        </div>
    )
}
export default ReactAxios;