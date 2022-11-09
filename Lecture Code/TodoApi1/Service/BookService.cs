using System.Threading.Tasks.Dataflow;
using Microsoft.Extensions.Options;
using MongoDB.Bson.Serialization;
using MongoDB.Driver;

namespace TodoApi.Service;

public class BookService{
    private readonly IMongoCollection<Book> _booksCollection; 
    public BookService(IOptions<BookDatabaseSettings> bookDatabaseSettings) {
       var client = new MongoClient(bookDatabaseSettings.Value.ConnectionStr);
       var database = client.GetDatabase(bookDatabaseSettings.Value.DatabaseName);
        _booksCollection = database.GetCollection<Book>(bookDatabaseSettings.Value.DataCollection);
    }

    public List<Book> Get() {
        return _booksCollection.Find(_=>true).ToList();
    }
    public Book? Get(string id) {
        return _booksCollection.Find(book=>book.Id==id).FirstOrDefault();
    }
    public void Create(Book newBook) {
        _booksCollection.InsertOne(newBook);
    }

    public void Update(string id, Book updatedBook) {
        _booksCollection.ReplaceOne(book=>book.Id==id, updatedBook);
    }

    public void Remove(string id) {
        _booksCollection.DeleteOne(book=>book.Id==id);
    }
}