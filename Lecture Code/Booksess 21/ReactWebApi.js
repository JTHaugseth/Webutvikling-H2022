import axios from "axios";
import {useEffect, useState} from "react";
import AddBook from "./AddBook";
import DeleteBook from "./DeleteBook";
import UpdateBook from "./UpdateBook";
import SearchBook from "./SearchBook";

export default function ReactWebApi() {
    const [books, setBooks] = useState([]);
    const [newBookFlag, setNewBookFlag] = useState(false);
    const [deleteBookFlag, setDeleteBookFlag] = useState(false);
    const [updateBookFlag, setUpdateBookFlag] = useState(false);
    const [updatedBook, setUpdatedBook] = useState([]);

    const bookControllerUrl = "https://localhost:7192/api/books";

    useEffect(()=>{
        axios.get(bookControllerUrl)
        .then(response=>setBooks(response.data))
        .catch(error=>console.log(error))
    },[newBookFlag, deleteBookFlag, updateBookFlag])

    const onDeleteBook= async(id)=>{
        await axios.delete(`${bookControllerUrl}/${id}`)
        .then((response=>{setDeleteBookFlag(prev=>!prev)}))
        .catch(error=>console.log(error))
    }

    const onAddBook= async (newBook, selectedImage)=>{
        await axios.post(bookControllerUrl,
            JSON.stringify(newBook),
            {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then((response)=>{
                setNewBookFlag(prev=>!prev)
            })
            .catch(error=>console.log(error));
        //post an image
        const formData = new FormData();
        formData.append("file", selectedImage);
        try{
            const response = await axios({
                 method: "post",
                 url: `${bookControllerUrl}/UploadImage`,
                 data: formData,
                 headers:{
                    "Content-type": "multipart/form-data"
                 }
            })
        } catch(error) {
            console.log(error)
        }

    }

    const onUpdateBook= async (updatedBook, selectedImage)=>{
        console.log(updatedBook)
        //update an image
        const formData = new FormData();
        formData.append("file", selectedImage);
        try{
            const response = await axios({
                 method: "post",
                 url: `${bookControllerUrl}/UploadImage`,
                 data: formData,
                 headers:{
                    "Content-type": "multipart/form-data"
                 }
            })
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
                setUpdateBookFlag(prev=>!prev)
            })
            .catch(error=>console.log(error));

    }

    const onFetchBook = async (id)=>{
        await axios
        .get(`${bookControllerUrl}/${id}`)
        .then(response=>setUpdatedBook(response.data))
        .catch(error=>console.log(error));
    }

    const onSearchByName =(searchName)=>{
        axios.get(`${bookControllerUrl}/name/${searchName}`)
        .then(response=>setBooks(response.data))
        .catch(error=>console.log(error))
    }
    
    const onSearchByPrice =(searchPrice)=>{
        axios.get(`${bookControllerUrl}/price/${searchPrice}`)
        .then(response=>setBooks(response.data))
        .catch(error=>console.log(error))
    }
    return(
        <>
             <AddBook onAddBook={onAddBook}></AddBook>
             <DeleteBook onDeleteBook={onDeleteBook}></DeleteBook>
             <UpdateBook onUpdateBook={onUpdateBook} onFetchBook={onFetchBook}
             updatedBook={updatedBook} setUpdatedBook={setUpdatedBook}></UpdateBook>
            <SearchBook onSearchByName={onSearchByName} onSearchByPrice={onSearchByPrice}/>
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