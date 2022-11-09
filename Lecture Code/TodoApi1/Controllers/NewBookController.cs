using Microsoft.AspNetCore.Mvc;

namespace TodoApi.Controllers;

[ApiController]
[Route("api/[controller]")]
//url will be localhost:7192/api/newBook
public class NewBookController : ControllerBase
{

    private static NewBook[] books ={
        new NewBook{
            Id="1",
            Author = "Yuan Lin",
            Category = "CS",
            Price="free",
            Name = "DS3103 slides"
        },
        new NewBook{
            Id="2",
            Author = "Tien",
            Category = "CS",
            Price="not free",
            Name = "C# slides"
        }
    }; 
private readonly ILogger<NewBookController> _logger;

    public NewBookController(ILogger<NewBookController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        return new ObjectResult(books);
    }
/* 
    [HttpGet]
    [Route("{id}")] */

    [HttpGet("{id}")]
    //localhost:7192/api/newBook/1
    public ActionResult<NewBook> GetBookById(string id)
    {
        List<NewBook> bookList = books.ToList();
        NewBook? book = bookList.Find(book=>book.Id == id);
        if(book == null) {
            return NotFound();
        }
        return book;
    }

    [HttpDelete("{id}")]
    //localhost:7192/api/newBook/1
    public IActionResult Delete(string id)
    {
        List<NewBook> bookList = books.ToList();
        NewBook? book = bookList.Find(book=>book.Id == id);
        if(book == null) {
            return NotFound();
        }
        books = books.Where(book => book.Id != id).ToArray();
        return Ok();
    }

    [HttpPost]
    public ActionResult<NewBook> PostBook([FromBody] NewBook newBook)
    {
        books = books.Concat(new NewBook[] {newBook}).ToArray();
        return CreatedAtAction(nameof(PostBook), new {id=newBook.Id}, newBook);
    }

}