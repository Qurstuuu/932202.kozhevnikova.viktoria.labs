public class CalcModel
{
    private static Random rnd;
    public int first { get; set; }
    public int second { get; set; }
    public int Add() => first + second;
    public int Sub() => first - second;
    public int Mult() => first * second;
    public double Div() => second != 0 ? first / second : Double.NaN;
    public void GenerateNumbers()
    {
        if(rnd == null) rnd = new Random();
        first = rnd.Next(11);
        second = rnd.Next(11);
    }
}