using System.Threading.Tasks.Dataflow;
using Microsoft.Extensions.Options;
using MongoDB.Bson.Serialization;
using MongoDB.Driver;

namespace TodoApi.Service;

public class GameService{
    private readonly IMongoCollection<Game> _booksCollection; 
    public GameService(IOptions<BookDatabaseSettings> bookDatabaseSettings) {
       var client = new MongoClient(bookDatabaseSettings.Value.ConnectionStr);
       var database = client.GetDatabase(bookDatabaseSettings.Value.DatabaseName);
        _booksCollection = database.GetCollection<Game>(bookDatabaseSettings.Value.GameCollection);
    }

}