namespace BookStoreApi.Models;
public interface IGame
{
    string Id { get; set; }
    string GameId { get; set; }
    string Category { get; set; }
    string Year { get; set; }

}