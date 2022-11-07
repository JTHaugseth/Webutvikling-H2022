using System.Runtime.CompilerServices;
using Microsoft.AspNetCore.Mvc;
using TodoApi.Service;

namespace TodoApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BooksController : ControllerBase
{
    private readonly ILogger<BooksController> _logger;
    private readonly BookService _bookService;
    private readonly IWebHostEnvironment _hosting;
    public BooksController(ILogger<BooksController> logger,
    BookService bookService, 
    IWebHostEnvironment hosting)
    {
        _logger = logger;
        _bookService = bookService;
        _hosting = hosting;
    }

    [HttpGet] // GET api/books
    public ActionResult<List<Book>> Get()
    {
        return _bookService.Get();
    }   

 
    [HttpGet] // GET api/books/id
    [Route("{id}")]
    // [HttpGet("{id}")] // GET api/books/id     
    public ActionResult<Book> GetBookById(string Id)
    {
        var book = _bookService.Get(Id);
        if(book == null) {
            return NotFound();
        }
        return book; 
    }   
    [HttpDelete("{Id}")]
    public IActionResult DeleteById(string Id)
    {
        var book = _bookService.Get(Id);
        if(book == null) {
            return NotFound();
        }
        _bookService.Remove(Id);
        return Ok();
    }    
    [HttpPost]
    public IActionResult Post([FromBody] Book newBook)
    {
        _bookService.Create(newBook);
        return CreatedAtAction(nameof(Post), new { id = newBook.Id }, newBook);
    }    

    [HttpPut("{Id}")]
    public IActionResult Update([FromRoute]string Id, [FromBody] Book updatedBook)
    {
        var book = _bookService.Get(Id);
         if(book == null) {
            return NotFound();
        }
        _bookService.Update(Id, updatedBook);
        return NoContent();
    }  

}


        /*         bookList.Remove(book);
        books = bookList.ToArray(); */
 