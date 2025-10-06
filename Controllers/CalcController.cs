using Microsoft.AspNetCore.Mvc;

public class CalcController : Controller
{
    public IActionResult Index()  // Домашняя страница
    {
        return View();
    }
    public IActionResult ModelPage() //PassUsingModel
    {
        var model = new CalcModel();
        model.GenerateNumbers();
        return View(model);
    }
    public IActionResult ViewDataPage()
    {
        var rnd = new Random();
        int first = rnd.Next(11);
        ViewData["first"] = first;
        int second = rnd.Next(11);
        ViewData["second"] = second;
        ViewData["Add"] = first + second;
        ViewData["Sub"] = first - second;
        ViewData["Mult"] = first * second;
        ViewData["Div"] = second != 0 ? (double)(first / second) : Double.NaN;
        return View();
    }
    public IActionResult ViewBagPage()
    {
        var rand = new Random();
        ViewBag.First = rand.Next(1, 11);
        ViewBag.Second = rand.Next(1, 11);
        ViewBag.AddResult = ViewBag.First + ViewBag.Second;
        ViewBag.SubResult = ViewBag.First - ViewBag.Second;
        ViewBag.MultResult = ViewBag.First * ViewBag.Second;
        ViewBag.DivResult = ViewBag.Second != 0
            ? ViewBag.First / ViewBag.Second
            : double.NaN;
        return View();
    }
    public IActionResult AccessServiceDirectly()
    {
        return View();
    }
    }