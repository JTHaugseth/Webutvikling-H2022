namespace BookStoreApi.Models;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class Game : IGame
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }
 
    public string GameId { get; set; }
    public string Category { get; set; }
    public string Year { get; set; }
}