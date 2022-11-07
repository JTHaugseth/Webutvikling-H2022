using System;

class Program
{
    static void Main(string[] args)
    {
        string[] vocabulary = System.IO.File.ReadAllLines("vocabulary.txt");
        Random generator = new Random();

        string secretWord = vocabulary[generator.Next(vocabulary.Length)];
        
        /*
        Hangman newGame = new Hangman();
        newGame.Initiate(secretWord.ToLower());
        newGame.Play(secretWord.Length);
        */

        HangmanComputer newComputerGame = new HangmanComputer();
        newComputerGame.Initiate(secretWord.ToLower());
        newComputerGame.Play(secretWord.Length * 2);

        Console.WriteLine($"The secret word is: {secretWord}");
    }
}