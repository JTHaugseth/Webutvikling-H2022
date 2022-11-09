import axios from "axios";
import {useEffect, useState} from "react";
import AddBook from './AddBook';
import DeleteBook from './DeleteBook';
import UpdateBook from './UpdateBook';
import SearchBook from './SearchBook';

export default function ReactWebApi() {
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState([]);
    const [deletedBook, setDeletedBook] = useState([]);
    const [updatedBook, setUpdatedBook] = useState([]);
    const [updatedFlag, setUpdatedFlag] = useState(false);
    const bookControllerUrl = "https://localhost:7192/api/books";

    useEffect(()=>{
        axios.get(bookControllerUrl)
        .then(response=>setBooks(response.data))
        .catch(error=>console.log(error))
    },[newBook, deletedBook, updatedFlag])

    const onAddBook= async (newBook, selectedImage)=>{
        await axios.post(bookControllerUrl, 
        JSON.stringify(newBook), 
        {
            headers: {
            'Content-Type': 'application/json'
            }
        })
        .then((response)=>{setNewBook(undefined)})
        .catch(error => {console.log(error);});

        const formData = new FormData();
        formData.append("file", selectedImage);
        try {
            const response = await axios({
                method: "post",
                url: `${bookControllerUrl}/SaveImage`,
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            });
        } catch(error) {
            console.log(error)
        }
    }
    const onDeleteBook= async (id)=>{
        await axios.delete(`${bookControllerUrl}/${id}`)
        .then((response)=>{setDeletedBook(undefined)})
        .catch(error=>console.log(error))
    }

    const onUpdateBook = async (updatedBook, selectedImage) => {
       
        const formData = new FormData();
        formData.append("file", selectedImage);
        try {
            const response = await axios({
                method: "post",
                url: `${bookControllerUrl}/UpdateImage/${updatedBook.id}`,
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            });
        } catch(error) {
            console.log(error)
        }

        await axios.put(`${bookControllerUrl}/${updatedBook.id}`, 
        JSON.stringify(updatedBook), 
        {
            headers: {'Content-Type': 'application/json'}
        })
        .then((response)=>{
            setUpdatedBook({...updatedBook})
            setUpdatedFlag(prev=>!prev)
        })
        .catch(error => {console.log(error);});

    }

    async function onFetchBook(id) {
        axios
        .get(`${bookControllerUrl}/${id}`)
        .then((response)=>setUpdatedBook(response.data))
        .catch(error=>console.log(error));
    }

    function onSearchBookById (searchId) {
        axios.get(`${bookControllerUrl}/${searchId}`)
        .then((response)=>{
            var bookArray=[];
            console.log(response.data)
            bookArray.push(response.data)
            setBooks(bookArray)
        })
        .catch(error => {console.log(error);
        });
    }

    function onSearchBookByName (searchName) {
        axios.get(`${bookControllerUrl}/${searchName}`)
        .then((response)=>{
            setBooks(response.data)
        })
        .catch(error => {console.log(error);
        });
    }

    return(
        <>
            <AddBook onAddBook={onAddBook} newBook={newBook} setNewBook={setNewBook}/>
            <DeleteBook onDeleteBook={onDeleteBook} setDeletedBook={setDeletedBook}/>
            <UpdateBook onUpdateBook={onUpdateBook} onFetchBook={onFetchBook} setUpdatedBook={setUpdatedBook} updatedBook={updatedBook}/>
            <SearchBook onSearchBookById={onSearchBookById} onSearchBookByName={onSearchBookByName}/>
            {books.map(book=>{
                return(
                    <article className="item">
                        <div>Id: {book.id}</div>
                        <div>Name: {book.bookName}</div>
                        <div>Price: {book.price}</div>
                        <div>Category: {book.category}</div>
                        <div>Author: {book.author}</div>
                        <img src={`https://localhost:7192/images/${encodeURIComponent(book.file)}`} className="fluid-image" alt={book.id} ></img>
                     </article>
                )
            })}
        </>
    )
}