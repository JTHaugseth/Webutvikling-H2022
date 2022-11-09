namespace TodoApi;
public class NewBook 
{
    public string Id{get; set;}
    //? means the attribute can be null/nullable
    public string? Name{get; set;}
    public string? Price{get; set;}
    public string? Category{get; set;}
    public string? Author{get; set;}


}