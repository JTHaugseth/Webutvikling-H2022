using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
namespace BookStoreApi.Models;

public class Book: IBook
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("Name")]
    public string BookName { get; set; } = "Not Set";
    public string Price { get; set; } ="0.00";

    public string Category { get; set; } = "Crime";
    public string Author { get; set; } = null!;
    public string File{ get; set; } = null!;
}