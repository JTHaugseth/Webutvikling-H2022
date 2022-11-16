import {useEffect, useState} from "react"
export default function UpdateBook({onFetchBook, onUpdateBook, updatedBook, setUpdatedBook}) {
    const [id, setId] = useState("");
    const [bookName, setBookName] = useState("");
    const [price, setPrice] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const [file, setFile] = useState("");
    const [selectedImage, setSelectedImage] = useState("");


    useEffect(()=>{
        setUpdatedBook({
            id: updatedBook.id, //we are not able to update id
            author: author?author:updatedBook.author,
            category: category?category:updatedBook.category,
            price: price?price:updatedBook.price,
            bookName: bookName?bookName:updatedBook.bookName,
            file: file?file:updatedBook.file})
    }, [id, bookName, price, author, category, file])

    const handleSelect =(event)=>{
        setSelectedImage(event.target.files[0]);
        setFile(event.target.files[0].name)
    }
    const fetchBook = async (event)=>{
        await onFetchBook(id);
    }
    const updateBook = async (event)=>{
        await onUpdateBook(updatedBook, selectedImage);
    }
    return(
        <>
            <h3>Update a Book</h3>
            <div>                
                <input type="text" id="update-book-id" value={updatedBook.id} onChange={(e)=>setId(e.target.value)}></input>
                <input type="text" id="update-book-name" value={updatedBook.bookName} onChange={(e)=>setBookName(e.target.value)}></input>
                <input type="text" id="update-book-price" value={updatedBook.price} onChange={(e)=>setPrice(e.target.value)}></input>
                <input type="text" id="update-book-category" value={updatedBook.category} onChange={(e)=>setCategory(e.target.value)}></input>
                <input type="text" id="update-book-author" value={updatedBook.author} onChange={(e)=>setAuthor(e.target.value)}></input>
                <input type="file" id="update-book-image" onChange={handleSelect}></input>
            </div>
            <button id="fetch-book-btn" onClick={fetchBook}>Fetch</button>
            <button id="update-book-btn" onClick={updateBook}>Update</button>
        </>
    )
}