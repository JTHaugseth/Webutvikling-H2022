using System.Runtime.CompilerServices;
using Microsoft.AspNetCore.Mvc;
using TodoApi.Service;

namespace TodoApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class OlderBooksController : ControllerBase
{
    private readonly ILogger<BooksController> _logger;
    private readonly BookService _bookService;
    private readonly IWebHostEnvironment _hosting;
    public OlderBooksController(ILogger<BooksController> logger,
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
    
    [HttpGet("{name}")]
    public ActionResult<List<Book>> GetByName(string name)
    {
        List<Book> bookList = _bookService.Get();

        bookList = bookList.Where(book=>
            book.BookName.ToLower().Contains(name.ToLower()))
            .ToList();
        if(bookList==null) {
            return NoContent();
        }
        return bookList;
    }

    [HttpDelete("{Id}")]
    public IActionResult DeleteById(string Id)
    {
        var book = _bookService.Get(Id);
        if(book == null) {
            return NotFound();
        }
        _bookService.Remove(Id);

        string webRootPath = _hosting.WebRootPath;
        string absolutePath = Path.Combine($"{webRootPath}/images/{book.File}");
        if (System.IO.File.Exists(absolutePath))
        {
        System.IO.File.Delete(absolutePath);
        }

        return Ok();
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
        string webRootPath = _hosting.WebRootPath;
        string absolutePath = Path.Combine($"{webRootPath}/images/{file.FileName}");
        using(var fileStream = new FileStream(absolutePath, FileMode.Create))
        {
            file.CopyTo(fileStream);
        }
        return Ok();
    }


    [HttpPut("{Id}")]
    public IActionResult Update([FromRoute]string Id, [FromBody] Book updatedBook)
    {
        var book = _bookService.Get(Id);
         if(book == null) {
            return NotFound();
        }
        _bookService.Update(Id, updatedBook);
        return CreatedAtAction(nameof(Update), new { id = updatedBook.Id }, updatedBook);
    }  

    [HttpPost]
    [Route("UpdateImage/{Id}")]
    public IActionResult UpdateImage(string Id, IFormFile file)
    {
         var book = _bookService.Get(Id);
         if(book == null) {
            return NotFound();
        }

        string webRootPath = _hosting.WebRootPath;
        string absolutePath = Path.Combine($"{webRootPath}/images/{file.FileName}");
        using(var fileStream = new FileStream(absolutePath, FileMode.Create))
        {
            file.CopyTo(fileStream);
        }

        absolutePath = Path.Combine($"{webRootPath}/images/{book.File}");
        if (System.IO.File.Exists(absolutePath))
        {
        System.IO.File.Delete(absolutePath);
        }
        return Ok();
    }

}


        /*         bookList.Remove(book);
        books = bookList.ToArray(); */
 