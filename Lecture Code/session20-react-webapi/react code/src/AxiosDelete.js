import axios from "axios";
import { useEffect, useState } from "react";


function AxiosDelete({onDeleteBook, setDeletedBook}){

    const [deleteId, setDeleteId] = useState("");

    useEffect(() => {
        setDeletedBook({id:deleteId});
    }, [deleteId]);
    
    function deleteBook () {
        onDeleteBook(deleteId);
    }

    return (
        <div>
            <h3>Delete A Book</h3>
            <div>
                <input type="text" id="delete-book-Id" placeholder="Enter the Book Id" onChange={(e)=>setDeleteId(e.target.value)}></input>
            </div>                
            <button id="delete-book-btn" onClick={deleteBook}>Delete</button>
        </div>
    )
}
export default AxiosDelete;