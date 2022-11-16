#nullable disable
using BookStoreApi.Models;
using Microsoft.AspNetCore.Mvc;
using BookStoreApi.Services;

namespace BookStoreApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class GameController : ControllerBase
{
    private readonly ILogger<GameController> _logger;
    private readonly GameService _gameService;
    private readonly IWebHostEnvironment _hosting;
    public GameController(ILogger<GameController> logger,
    GameService gameService, IWebHostEnvironment hosting)
    {
        _logger = logger;
        _gameService = gameService;
        _hosting= hosting;
    }

    [HttpGet] // GET api/books
    public ActionResult<List<Game>> Get()
    {
        return _gameService.Get();
    } 
     
   // GET api/books/id
    [HttpGet("{GameId}")]
    // [HttpGet("{id}")] // GET api/books/id     
    public ActionResult<Game> GetGameById(string GameId)
    {
        List<Game> allGames = _gameService.Get();

        List<Game> gamesById = allGames.Where(game=>
        game.GameId.ToLower().Contains(GameId.ToLower()))
        .ToList();
        if(gamesById == null) {
            return NoContent(); 
        } else if(gamesById.Count > 1) {
            var errorObjectResult = new ObjectResult("Duplicated Game Id");
            errorObjectResult.StatusCode = StatusCodes.Status500InternalServerError;                            
            return errorObjectResult;
        }
        return gamesById.FirstOrDefault();
    }   

}