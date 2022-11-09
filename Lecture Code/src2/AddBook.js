import {useEffect, useState} from "react"
export default function AddBook({onAddBook}) {
    const [id, setId] = useState("");
    const [bookName, setBookName] = useState("");
    const [price, setPrice] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const [file, setFile] = useState("");
    const [selectedImage, setSelectedImage] = useState("");

    const [newBook, setNewBook] = useState({});

    useEffect(()=>{
        setNewBook({id, bookName, price, author, category, file})
    }, [id, bookName, price, author, category, file])

    const handleSelect =(event)=>{
        setSelectedImage(event.target.files[0]);
        setFile(event.target.files[0].name)
    }
    const handleSubmit = async (event)=>{
        event.preventDefault();
        await onAddBook(newBook, selectedImage);
    }
    return(
        <form onSubmit={handleSubmit}>
            <h3>Add a Book</h3>
            <div>                
                <input type="text" id="add-book-id" onChange={(e)=>setId(e.target.value)}></input>
                <input type="text" id="add-book-name" onChange={(e)=>setBookName(e.target.value)}></input>
                <input type="text" id="add-book-price" onChange={(e)=>setPrice(e.target.value)}></input>
                <input type="text" id="add-book-category" onChange={(e)=>setCategory(e.target.value)}></input>
                <input type="text" id="add-book-author" onChange={(e)=>setAuthor(e.target.value)}></input>
                <input type="file" id="add-book-image" onChange={handleSelect}></input>
            </div>
            <input type="submit" id="add-book-btn" value="Submit" />
        </form>
    )
}