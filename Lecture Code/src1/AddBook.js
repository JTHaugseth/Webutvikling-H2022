import {useEffect, useState} from "react"

export default function AddBook({onAddBook, newBook, setNewBook}) {
    const [id, setId] = useState("");
    const [bookName, setBookName] = useState("");
    const [price, setPrice] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const [file, setFile] = useState("");
    const [selectedImage, setSelectedImage] = useState("");


    useEffect(()=>{
        setNewBook({id, bookName, price, author, category, file})
    }, [id, bookName, price, author, category, file])


    async function handleSubmit (event) { 
        event.preventDefault()
        await onAddBook(newBook, selectedImage)
    }
    const handleFileSelect = (event) => {
        setSelectedImage(event.target.files[0]);
        setFile(event.target.files[0].name);
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <h3>Add A Book</h3>
                <div>
                    <input type="text" id="add-book-Id" placeholder="Enter the Book Id" onChange={(e)=>setId(e.target.value)}></input>
                    <input type="text" id="add-book-name" placeholder="Enter the Book Name" onChange={(e)=>setBookName(e.target.value)}></input>
                    <input type="text" id="add-book-price" placeholder="Enter the Book Price" onChange={(e)=>setPrice(e.target.value)}></input>
                    <input type="text" id="add-book-category" placeholder="Enter the Book Category" onChange={(e)=>setCategory(e.target.value)}></input>
                    <input type="text" id="add-book-author" placeholder="Enter the Book Author" onChange={(e)=>setAuthor(e.target.value)}></input>
                    <input type="file" id="add-book-image" onChange={handleFileSelect}/>
                </div> 
                <input type="submit" id="add-book-btn" value="Submit" />               
            </form>
        </>
    )
}