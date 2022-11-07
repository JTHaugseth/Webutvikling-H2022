using Microsoft.AspNetCore.Mvc;
namespace TodoApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BooksController : ControllerBase
{
    private static Book[] books = {
         new Book{
            Id = "1", 
            Author = "Ralph Johnson", 
            Category = "Computers", 
            Price = "54.93",
            BookName = "Design Patterns"
            },
         new Book{
            Id = "2", 
            Author = "Robert C. Martin", 
            Category = "Computers", 
            Price = "43.15",
            BookName = "Clean Code"
            },
        };
    private readonly ILogger<BooksController> _logger;
    public BooksController(ILogger<BooksController> logger)
    {
        _logger = logger;
    }

    [HttpGet] // GET api/books
    public IActionResult Get()
    {
        return new ObjectResult(books);
    }   
    [HttpGet] // GET api/books/id
    [Route("{id}")]
    // [HttpGet("{id}")] // GET api/books/id     
    public ActionResult<Book> GetBookById(string Id)
    {
        List<Book> bookList = books.ToList();
        Book? book = bookList.Find(book => book.Id == Id);
        if(book == null) {
            return NotFound();
        }
        return book; 
    }   
    [HttpDelete("{id}")]
    public IActionResult Delete(string Id)
    {
        List<Book> bookList = books.ToList();
        Book? book = bookList.Find(book => book.Id == Id);
        if(book == null) {
            return NotFound();
        }
        books = books.Where(book => book.Id != Id).ToArray();
        return Ok();
    }    
    [HttpPost]
    public ActionResult<Book> Post([FromBody] Book newBook)
    {
        books = books.Concat(new Book[] { newBook }).ToArray();
        return CreatedAtAction(nameof(Post), new { id = newBook.Id }, newBook);
    }    
}


        /*         bookList.Remove(book);
        books = bookList.ToArray(); */
 