using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.ObjectPool;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;

namespace TodoApi.Controllers;

[ApiController]
[Route("[controller]")]
public class TodoController : ControllerBase
{
    private static string[] TodoList = new[]
    {
        "See the dentist",
        "Attend a conference",
        "Prepare a lecture"
    };
    private readonly ILogger<TodoController> _logger;

    public TodoController(ILogger<TodoController> logger)
    {
        _logger = logger;
    }
    [HttpPost(Name = "AddTodo")]
    public IEnumerable<Todo> Post([FromBody] string todoItem)
    {
        Collection<Todo> collection = new Collection<Todo>();
        TodoList = TodoList.Concat(new string[] { todoItem }).ToArray();

        int id = 0;
        foreach (var item in TodoList) { 
            collection.Add(new Todo{
                Id= id++,
                Name=item,
            });
        }
        return collection.ToArray();
    }
    
    [HttpGet(Name = "GetTodoList")]
    public IEnumerable<Todo> Get()
    {
        Collection<Todo> collection = new Collection<Todo>();
        int id = 0;
        foreach (var item in TodoList) { 
            collection.Add(new Todo{
                Id= id++,
                Name=item,
            });
        }
        return collection.ToArray();

    }
}
