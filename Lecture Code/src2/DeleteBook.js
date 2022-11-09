import {useEffect, useState} from "react"
export default function DeleteBook({onDeleteBook}) {
    const [id, setId] = useState("");  

    const deleteBook=()=>{
        onDeleteBook(id);
    }

    return(
        <>
            <h3>Delete a Book</h3>
            <div>                
                <input type="text" id="delete-book-id" onChange={(e)=>setId(e.target.value)}></input>
             </div>
            <button id="delete-book-btn" onClick={deleteBook}>Delete</button>
        </>
    )
}