namespace TodoApi;
using System.Text.Json.Serialization;

public class Book : IBook
{
    public string Id { get; set; }

    public string BookName { get; set; } = "Not Set";

    public string Price { get; set; } ="0.00";

    public string Category { get; set; } = "Crime";

    public string Author { get; set; }
}