using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.ObjectPool;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Net;

namespace TodoApi.Controllers;

[ApiController]
[Route("[controller]")]
public class MovieController : ControllerBase
{
    private static Movie[] movies = {
         new Movie{Id=1, Title = "Bad_Boys_for_Life", Description = "2020 American action comedy film directed by Adil & Bilall", Year = "2020"},
         new Movie{Id=2, Title = "Birds_Of_Prey", Description = "a 2020 American superhero film based on the DC Comics team", Year = "2020"},
        };
    private readonly ILogger<MovieController> _logger;
    public MovieController(ILogger<MovieController> logger)
    {
        _logger = logger;
    }

    [HttpPost]
    public ActionResult<Movie> Post([FromBody] Movie newMovie)
    {
        movies = movies.Concat(new Movie[] { newMovie }).ToArray();
        return CreatedAtAction(nameof(Post), new { id = newMovie.Id }, newMovie);
    }    

    [HttpGet]
    public IEnumerable<Movie> Get()
    {
        return movies;
    }

    [HttpGet]
    [Route("{id}", Name = "GetMovieById")]
    public ActionResult<Movie> GetMovieById(int Id)
    {
        List<Movie> movieList = movies.ToList();
        Movie? movie = movieList.Find(movie => movie.Id == Id);
        if(movie == null) {
            return NotFound();
        }
        return movie; 
    }
        
    [HttpDelete("{id}")]
    public IActionResult Delete(int Id)
    {
        List<Movie> movieList = movies.ToList();
        Movie? movie = movieList.Find(movie => movie.Id == Id);
        if(movie == null) {
            return NotFound();
        }
        movies = movies.Where(movie => movie.Id != Id).ToArray();
        return Ok();
/*         movieList.Remove(movie);
        movies = movieList.ToArray();
        return Ok(); */
    }
}
