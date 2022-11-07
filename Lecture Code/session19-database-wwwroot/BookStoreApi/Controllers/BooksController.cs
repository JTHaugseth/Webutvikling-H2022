#nullable disable
using BookStoreApi.Models;
using BookStoreApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace BookStoreApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BooksController : ControllerBase
{
    private readonly BooksService _booksService;
    private readonly IWebHostEnvironment _hosting;

    public BooksController(BooksService booksService, IWebHostEnvironment hosting) {
        _booksService = booksService;
        _hosting = hosting;

    }

    [HttpGet]
    public ActionResult<List<Book>> Get() =>
        _booksService.Get();

    [HttpGet("{id:length(24)}")]
    public ActionResult<Book> Get(string id)
    {
        var book = _booksService.Get(id);
        if (book is null) return NotFound();
        return book;
    }
        
    [HttpGet("{name}")]
    public ActionResult<List<Book>> GetByName(string name)
    {
        List<Book> bookList = _booksService.Get();

        bookList = bookList.Where(book=>
            book.BookName.ToLower().Contains(name.ToLower()))
            .ToList();
        if(bookList==null) {
            return NoContent();
        }
        return bookList;
    }

    [HttpPost]
    public IActionResult Post([FromBody]Book newBook)
    {
        _booksService.Create(newBook);
        return CreatedAtAction(nameof(Get), new { id = newBook.Id }, newBook);
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


    [HttpPut("{id:length(24)}")]
    public IActionResult Update([FromRoute]string id, [FromBody]Book updatedBook)
    {
        var book = _booksService.Get(id);
        if (book is null) return NotFound();
        updatedBook.Id = book.Id;
        _booksService.Update(id, updatedBook);
        return NoContent();
    }

    [HttpDelete("{id:length(24)}")]
    public IActionResult Delete(string id)
    {
        var book = _booksService.Get(id);
        if (book is null) return NotFound();
        _booksService.Remove(id);

        string webRootPath = _hosting.WebRootPath;
        string absolutePath = Path.Combine($"{webRootPath}/images/{book.File}");
        if (System.IO.File.Exists(absolutePath))
        {
        System.IO.File.Delete(absolutePath);
        }

        return NoContent();
    }

}