import {useState, useEffect} from "react";

function ReactFetch() {
    const [movies, setMovies] = useState([]);
    const [id, setId] = useState(0);
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [imageSrc, setImageSrc] = useState("");

     useEffect(()=>{
        /* how to get */
         fetch("http://localhost:3000/movies")
         .then((response) => {
            if(response.ok) {
                return response.json()
            }
            throw response;})
         .then((data)=>setMovies(data))
         .catch(error => {
            console.log(error);
        });
    },[movies]); 

    const handleClick =()=>{
        const m={
            id: id,
            title: title,
            imageSrc: imageSrc.name,
            year: year,
            category: category,
            price: price
        };
        /* how to post */
        fetch('http://localhost:3000/movies', 
        {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(m)
        })
        .then(resp => {
            console.log(resp.json);
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <div>
            <div>
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
                <button id="add-movie-btn" onClick={handleClick}>Add a Movie</button>
            </div>
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
        </div>
    )

}
export default ReactFetch;