namespace TodoApi;
using System.Text.Json.Serialization;

public class Book
{
    public string? Id { get; set; }

    [JsonPropertyName("Name")]
    public string BookName { get; set; } = null!;

    public string Price { get; set; }

    public string Category { get; set; } = null!;

    public string Author { get; set; } = null!;
}