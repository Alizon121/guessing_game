const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



let secretNumber = 15;

function checkGuess(num) {
if (num > secretNumber) {
    console.log("Too high.")
    return false;
} else if (num < secretNumber) {
    console.log("Too low.")
    return false;
} else {
    console.log("Correct!");
    return true;
}
}

function askGuess () {
    rl.question("Enter a guess: ", (answer) => {
        console.log(`Your guess is: ${answer}`)
        let result = Number(answer);
        if (checkGuess(answer) === true) {
            console.log("You win!");
            rl.close()
        } else {
            askGuess();
        }
        // rl.close()
    })
}

askGuess()