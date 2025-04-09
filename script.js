const randomNumber = Math.floor(Math.random() * 100) + 1;
let userGuess = null;

while (userGuess != randomNumber) {
    userGuess = parseInt(prompt("Guess a number between 1 and 100:"));
    if (userGuess < randomNumber) {
        console.log("Too low! Try Again.");
    } else if (userGuess > randomNumber) {
        console.log("Too high! Try Again.");
    } else if (userGuess == randomNumber) {
        console.log("Congratulations! You guessed the correct number!")
    }
}