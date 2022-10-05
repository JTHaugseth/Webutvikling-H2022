import {useState} from "react";

function NewMovie ( {onAddMovie} ) {
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [language, setLanguage] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        onAddMovie({title, year, language});
    }

    return <form onSubmit={handleSubmit}>
        <h1>New movie</h1>
        <div>
            <label>Title: <input value={title} onChange={e => setTitle(e.target.value)} /></label>
        </div>
        <div>
            <label>Year: <input value={year} onChange={e => setYear(e.target.value)} /></label>
        </div>
        <div>
            <label>Language: <textarea value={language} onChange={e => setLanguage(e.target.value)} /></label>
        </div>
        <button>Submit</button>
    </form>;
}

function AddMovies() {
    const [movies, setMovies] = useState([]);

    const addMovie = ( movie) => {
        const newMovies = [...movies, movie];
        setMovies(newMovies);
    };
       
    return (
          <div >
            <NewMovie onAddMovie={addMovie} />
            <div>
                <h1>All Movies</h1>
                {movies.map((movie) => (
                <div key={movie.title}>
                    <h2>{movie.title} ({movie.year}) {movie.language}</h2>
                </div>
                ))}
            </div>
          </div>

      );
}
export default AddMovies;