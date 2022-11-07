import * as React from "react";
import {useState, useEffect} from "react";
import {Routes, Route, Link, BrowserRouter, useNavigate} from "react-router-dom";
import axios from "axios";

function FrontPage() {
    return <div>
        <h1>Kristiania Movie Database</h1>
        <ul>
            <li><Link to="/movies">List movies</Link></li>
            <li><Link to="/movies/new">New Movie</Link></li>
        </ul>
    </div>;
}

function ListMovies() {
    const [movies, setMovies] = useState([]);
    useEffect( ()=> {
        axios
        .get("http://localhost:3000/movies")
        .then((res)=>setMovies(res.data))
        .catch(error=>console.log(error));
    }, []);

    if (!movies) {
        return <div>Loading...</div>
    } 

    return <div>
        <h1>All movies</h1>
        <ul>
            <li><Link to="/">Home Page</Link></li>
            <li><Link to="/movies/new">New Movie</Link></li>
        </ul>
        <div id="output-main">
            {movies.map(movie => {
                return (
                    <div key={movie.id} className="movie-box">
                            <h3>{ movie.id}</h3>
                            <h3>{ movie.title }</h3>
                            <img src={`/images/${movie.imageSrc}`} className="fluid-image" alt={movie.description} ></img>
                            <p>{ movie.category}</p>
                            <p>År: { movie.year }</p>
                            <p>Pris: { movie.price },-</p>
                    </div>
                    );
            })}
        </div>
        
    </div>;
}
function NewMovie({onAddMovie}) {

    const [id, setId] = useState(0);
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [imageSrc, setImageSrc] = useState("");

    const navigate = useNavigate();


    async function handleSubmit(e) {
        e.preventDefault();
        await onAddMovie({
            id: id,
            title: title,
            imageSrc: imageSrc.name,
            year: year,
            category: category,
            price: price
        });
        navigate("/");
    }

    return (
    <form onSubmit={handleSubmit}>
        <h3>Add Movie</h3>
        <div>
            <label>Id</label>
            <input type="text" id="add-id-txt" placeholder="Enter the Id" onChange={(e)=>setId(e.target.value)}></input>
        </div>
        <div>
            <label>Title</label>
            <input type="text" id="add-title-txt" placeholder="Enter the Title" onChange={(e)=>setTitle(e.target.value)}></input>
        </div>
        <div>
            <label>Category</label>
            <select id="add-category-txt" value={category} onChange={(e)=>setCategory(e.target.value)}>
                <option value="Action">Action</option>
                <option value="Drama">Drama</option>
                <option value="Horror">Horror</option>
                <option value="Cartoon">Cartoon</option>
                <option value="Comedy">Comedy</option>
            </select>
        </div>
        <div>
            <label>Year</label>
            <input type="text" id="add-year-txt" placeholder="Enter the Year" onChange={(e)=>setYear(e.target.value)}></input>
        </div>
        <div>
            <label>Price</label>
            <input type="text" id="add-price-txt" placeholder="Enter the Price" onChange={(e)=>setPrice(e.target.value)}></input>
        </div>
        <input type="file" id="add-movie-poster" onChange={(e)=>setImageSrc(e.target.files[0])}></input>
        <input type="submit" id="add-movie-btn" value="Add a Movie" />
    </form>
    );
}

function ReactRouterMovie() {

    const onAddMovie = async (formData) => {
         await axios({
            method: "post",
            url: "http://localhost:3000/movies",
            data: formData,
            headers: { "Content-Type": "application/json" },
          });
    };
    
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<FrontPage/>}/>
            <Route path="/movies/new" element={<NewMovie onAddMovie={onAddMovie}/>}/>
            <Route path="/movies" element={<ListMovies />}/>
        </Routes>
    </BrowserRouter>;
}
export default ReactRouterMovie;