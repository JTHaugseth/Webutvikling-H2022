
class Hangman
{
    public string secretWord;
    public char[] guessedWord;
    public int numberOfGuessed;
    public bool isWin;
    public void Play(int maximumGuesses)
    {
        do
        {
            ShowStatus();
            char guessedCharacter = Guess();
            Check(guessedCharacter);
            isWin = secretWord.Equals(new String(guessedWord));
        } while (!isWin && numberOfGuessed < maximumGuesses);
    }

    private void Check(char guessedCharacter)
    {
        if (secretWord.Contains(guessedCharacter))
        {
            for (int i = 0; i < secretWord.Length; i++)
            {
                if (secretWord[i] == guessedCharacter)
                {
                    guessedWord[i] = guessedCharacter;
                }

            }
        }
    }

    public virtual char Guess()
    {
        Console.Write("Enter a character: ");
        char guessedCharacter = Console.ReadKey().KeyChar;
        numberOfGuessed++;
        return guessedCharacter;
    }

    private void ShowStatus()
    {
        Console.WriteLine($"{Environment.NewLine}Current status: {new String(guessedWord)}");
    }

    public void Initiate(string v)
    {
        secretWord = v;
        guessedWord = new string('-', secretWord.Length).ToCharArray();
        numberOfGuessed = 0;
        isWin = false;
    }
}
