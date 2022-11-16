import {BrowserRouter, Routes, Route, Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const gameControllerUrl = "https://localhost:7220/api/game";
const bookControllerUrl = "https://localhost:7220/api/books";
const imageUrl = "https://localhost:7220/images";

const Home =()=>{
    return(
        <>
            <h1>This is a  home page for Kristinia Book Store</h1>
            <ul>
                <li><Link to="/books">List Books</Link></li>
                <li><Link to="books/new">Add a New Book</Link></li>
                <li><Link to="games">List Games</Link></li>
            </ul>
        </>
    )
}

const Games =()=>{
    const [games, setGames] = useState([]);

    useEffect(()=>{
        axios.get(gameControllerUrl)
        .then(response=>setGames(response.data))
        .catch(error=>console.log(error))
    });
    return(
        <>
        <h1>All games</h1>
        <ul>
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/books/new">Add a New Book</Link></li>
        </ul>
        <div className="wrapper">
            {games.map(game=>{
                return(
                    <article className="item">
                        <div>Id: {game.gameId}</div>
                        <div>Category: {game.category}</div>
                        <div>Year: {game.year}</div>
                    </article>
                )
            })}
        </div>
        </>
    )
}

const NewBook=({onAddBook})=>{
    const navigate=useNavigate();

    const [id, setId] = useState("");
    const [bookName, setBookName] = useState("");
    const [price, setPrice] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const [file, setFile] = useState("");
    const [newBook, setNewBook]= useState([]);
    const [selectedImage, setSelectedImage] = useState("");
    
    useEffect(()=>{
        setNewBook({id, bookName, price, author, category, file})
    }, [id, bookName, price, author, category, file])

    async function handleSubmit (event) { 
        event.preventDefault()
        await onAddBook(newBook, selectedImage);
        navigate("/books");
    }
    const handleFileSelect = (event) => {
        setSelectedImage(event.target.files[0]);
        setFile(event.target.files[0].name);
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <h3>Add A New Book</h3>
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

const ListBooks=()=>{
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        axios.get(bookControllerUrl)
        .then(response=>setBooks(response.data))
        .catch(error=>console.log(error))
    });
    return(
        <>
        <h1>All books</h1>
        <ul>
            <li><Link to="/games">Games</Link></li>
            <li><Link to="/books/new">Add a New Book</Link></li>
        </ul>
        <div class="wrapper">
            {books.map(book=>{
                return(
                    <article className="item">
                        <div>Id: {book.id}</div>
                        <div>Name: {book.bookName}</div>
                        <div>Price: {book.price}</div>
                        <div>Category: {book.category}</div>
                        <div>Author: {book.author}</div>
                        <img src={`${imageUrl}/${encodeURIComponent(book.file)}`} className="fluid-image" alt={book.id} ></img>
                     </article>
                )
            })}
        </div>
        </>
    )
}

export default function ReactBookStore(){
    
    const onAddBook= async (newBook, selectedImage)=>{
        await axios.post(bookControllerUrl, 
        JSON.stringify(newBook), 
        {
            headers: {
            'Content-Type': 'application/json'
            }
        })
        .then((response)=>{console.log(response)})
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
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route path="/games" element={<Games/>}></Route>
                <Route path="/books/new" element={<NewBook onAddBook={onAddBook}/>}></Route>
                <Route path="/books" element={<ListBooks/>}></Route>
            </Routes>
        </BrowserRouter>
    );
    }