using BookStoreApi.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace BookStoreApi.Services;

public class GameService
{
    private readonly IMongoCollection<Game> _gameCollection;
    public GameService(
        IOptions<DatabaseSettings> databaseSettings)
    {
        var mongoClient = new MongoClient(
            databaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            databaseSettings.Value.DatabaseName);

        _gameCollection = mongoDatabase.GetCollection<Game>(
            databaseSettings.Value.GameCollection);
    }
    public List<Game> Get() =>
        _gameCollection.Find(_ => true).ToList();
    public Game? Get(string id) =>
        _gameCollection.Find(x => x.Id == id).FirstOrDefault();
    public void Create(Game newGame) =>
        _gameCollection.InsertOne(newGame);
    public void Update(string id, Game updatedGame) =>
        _gameCollection.ReplaceOne(x => x.Id == id, updatedGame);
    public void Remove(string id) =>
        _gameCollection.DeleteOne(x => x.Id == id);
}