import {useEffect, useState} from "react";

export default function DeleteBook({onDeleteBook, setDeletedBook}) {
    const [id, setId] = useState("");
    useEffect(()=>{
        setDeletedBook({id:id})
    },[id])

    const deleteBook=()=>{
        onDeleteBook(id)
    }
    return(
        <>
            <h3>Delete a Book</h3>
            <input type="text" id="delete-book-id" onChange={(e)=>setId(e.target.value)}></input>
            <button id="delete-book-btn" onClick={deleteBook}>Delete</button>
        </>
    )
}