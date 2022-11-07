class HangmanComputer : Hangman 
{
    string vocabulary = " abcdefghijklmnopqrstuvwzyz";
    public override char Guess()
    {
        char guessedChar = vocabulary[numberOfGuessed];
        Console.WriteLine($"My guess: {guessedChar}");
        numberOfGuessed++;
        return guessedChar;
    }
}
