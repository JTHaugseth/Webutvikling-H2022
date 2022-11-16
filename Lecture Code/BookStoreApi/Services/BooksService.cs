using BookStoreApi.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace BookStoreApi.Services;

public class BooksService
{
    private readonly IMongoCollection<Book> _booksCollection;
    public BooksService(
        IOptions<DatabaseSettings> databaseSettings)
    {
        var mongoClient = new MongoClient(
            databaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            databaseSettings.Value.DatabaseName);

        _booksCollection = mongoDatabase.GetCollection<Book>(
            databaseSettings.Value.BooksCollectionName);
    }
    public List<Book> Get() =>
        _booksCollection.Find(_ => true).ToList();
    public Book? Get(string id) =>
        _booksCollection.Find(x => x.Id == id).FirstOrDefault();
    public void Create(Book newBook) =>
        _booksCollection.InsertOne(newBook);
    public void Update(string id, Book updatedBook) =>
        _booksCollection.ReplaceOne(x => x.Id == id, updatedBook);
    public void Remove(string id) =>
        _booksCollection.DeleteOne(x => x.Id == id);
}