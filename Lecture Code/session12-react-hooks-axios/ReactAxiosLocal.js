import {useState, useEffect} from "react";
import axios from "axios";

function ReactAxiosLocal() {
    const [movies, setMovies] = useState([]);
    
    useEffect(()=>{
        axios
        .get("movie.json")
        .then((res)=>setMovies(res.data))
        .catch(error=>console.log(error))
    },[movies]);

    return (
        <div id="output-main">
            {movies.map(movie => {
                return (
                    <div key={movie.id} className="movie-box">
                            <h3>{ movie.id}</h3>
                            <h3>{ movie.title }</h3>
                            <img src={`/images/${movie.imageSrc}`} 
                            className="fluid-image" alt={movie.description} ></img>
                            <p>{ movie.category}</p>
                            <p>År: { movie.year }</p>
                            <p>Pris: { movie.price },-</p>
                    </div>
                    );
            })}
        </div>
    )
}
export default ReactAxiosLocal;