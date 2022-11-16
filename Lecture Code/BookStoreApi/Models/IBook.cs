namespace BookStoreApi.Models;
public interface IBook
{
    string Id { get; set; }
    string BookName { get; set; }
    string Price { get; set; }
    string Category { get; set; }
    string Author { get; set; }

}