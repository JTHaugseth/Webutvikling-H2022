import movieService from "./movieService.js"
	/*
		HTML OBJECTS		
	*/
	const outputMain = document.getElementById("output-main");

	const addIdTxt=document.getElementById("add-id-txt");
	const addTitleTxt=document.getElementById("add-title-txt");
	const addMoviePoster=document.getElementById("add-movie-poster");
	const addMovieBtn=document.getElementById("add-movie-btn");

	const updateIdTxt=document.getElementById("update-id-txt");
	const updateTitleTxt=document.getElementById("update-title-txt");
	const updateMovieBtn=document.getElementById("update-movie-btn");

	const deleteIdTxt=document.getElementById("delete-id-txt");
	const deleteMovieBtn=document.getElementById("delete-movie-btn");


	/*
		ARRAYS	
	*/		
	const movies = movieService.getAll();

	/*
		FUNCTIONS
	*/
	const getRelativePath =(path)=>{
		let location=path.lastIndexOf('\\');
		return path.slice(location);
	}
	const addMovie=()=>{
		let imageSrc= getRelativePath(addMoviePoster.value)
		let newMovie= {
			id: addIdTxt.value,
			title: addTitleTxt.value,
			imageSrc: imageSrc
		};
		console.log(addMoviePoster.value)
		movies.push(newMovie);
		showMovies(movies);
	}
	const deleteMovie =()=>{
		let id= parseInt(deleteIdTxt.value);
		let index = movies.findIndex(movie=>movie.id===id);
		movies.splice(index, 1);
		showMovies(movies);
	}

	const updateMovie=()=>{
		let id= parseInt(updateIdTxt.value);
		let movie = movies.find(movie=>movie.id===id);
		let updatedMovie ={
			id: updateIdTxt.value,
			title: updateTitleTxt.value?updateTitleTxt.value:movie.title,
			imageSrc: movie.imageSrc
		}
		let newMovies = movies.map(movie=>movie.id!=id?movie:updatedMovie);
		showMovies(newMovies);

	}
	const showMovies =(movies)=>{
		let htmlTxt = "";
			
			movies.forEach( movie => {
				
				let categoryClass = "";
				
				switch( movie.category ){
					case "Action":
						categoryClass = "action-movie";
						break;
					case "Drama":
						categoryClass = "drama-movie";
						break;
					case "Horror":
						categoryClass = "horror-movie";
						break;
					case "Cartoon":
						categoryClass = "cartoon-movie";
						break;
					case "Comedy":
						categoryClass = "comedy-movie";
				}
				
				htmlTxt += `
					<article class="movie-box ${ categoryClass }"> 
						<div>
							<h3>${ movie.id}</h3>
							<h3>${ movie.title }</h3>
							<img class="fluid-image" src="images/${ movie.imageSrc }" alt="Foto. Cover ${ movie.title }">
							<p>${ movie.category}</p>
							<p>År: ${ movie.year }</p>
							<p>Pris: ${ movie.price },-</p>
						</div>
						<input class="btn btn-rent" type="button" value="Lei film">
					</article>
				`;
			});
			
			outputMain.innerHTML = htmlTxt;
	}
	/*
		INIT FUNCTIONS
	*/
	(
		() => {		
			showMovies(movies)
		}
	)();

	/*
		EVENTS
	*/
	addMovieBtn.addEventListener("click", addMovie);
	deleteMovieBtn.addEventListener("click", deleteMovie);
	updateMovieBtn.addEventListener("click", updateMovie);