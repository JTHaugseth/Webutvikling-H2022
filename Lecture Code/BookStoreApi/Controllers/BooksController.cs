#nullable disable
using BookStoreApi.Models;
using Microsoft.AspNetCore.Mvc;
using BookStoreApi.Services;

namespace BookStoreApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BooksController : ControllerBase
{
    private readonly ILogger<BooksController> _logger;
    private readonly BooksService _bookService;
    private readonly IWebHostEnvironment _hosting;
    public BooksController(ILogger<BooksController> logger,
    BooksService bookService, IWebHostEnvironment hosting)
    {
        _logger = logger;
        _bookService = bookService;
        _hosting= hosting;
    }

    [HttpGet] // GET api/books
    public ActionResult<List<Book>> Get()
    {
        return _bookService.Get();
    }   

 
   // GET api/books/id
    [HttpGet("{id:length(24)}")]
    // [HttpGet("{id}")] // GET api/books/id     
    public ActionResult<Book> GetBookById(string Id)
    {
        var book = _bookService.Get(Id);
        if(book == null) {
            return NotFound();
        }
        return book; 
    }   

    [HttpGet("name/{name}")]
    // [HttpGet("{id}")] // GET api/books/id     
    public ActionResult<List<Book>> GetBooksByName(string name)
    {
        List<Book> allBooks = _bookService.Get();

        List<Book> booksByName = allBooks.Where(book=>
        book.BookName.ToLower().Contains(name.ToLower()))
        .ToList();
        if(booksByName == null) {
            return NoContent(); 
        }
        return booksByName;
    }   

        [HttpGet("price/{price}")]
    // [HttpGet("{id}")] // GET api/books/id     
    public ActionResult<List<Book>> GetBooksByPrice(string price)
    {

        List<Book> allBooks = _bookService.Get();

        List<Book> booksByName = allBooks.Where(book=> float.Parse(book.Price, System.Globalization.CultureInfo.InvariantCulture) 
        > float.Parse(price, System.Globalization.CultureInfo.InvariantCulture))
        .ToList();
        if(booksByName == null) {
            return NoContent(); 
        }
        return booksByName;
    }   
 
    [HttpPost]
    public IActionResult Post([FromBody] Book newBook)
    {
        _bookService.Create(newBook);
        return CreatedAtAction(nameof(Post), new { id = newBook.Id }, newBook);
    } 
        
        [HttpPost]
        [Route("[action]")]
    public IActionResult SaveImage(IFormFile file)
    {
         string webrootPath= _hosting.WebRootPath;
         string imagePath = Path.Combine($"{webrootPath}/images/{file.FileName}");
         using(var fileStream= new FileStream(imagePath, FileMode.Create)) {
            file.CopyTo(fileStream);
         }
         return Ok();
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

    [HttpPut("{Id}")]
    public IActionResult Update([FromRoute] string Id, [FromBody] Book updatedBook)
    {
        var book = _bookService.Get(Id);
        if(book == null) {
            return NotFound();
        }
        _bookService.Update(Id, updatedBook);
        return CreatedAtAction(nameof(Update), new { id = updatedBook.Id }, updatedBook);
    }   


}