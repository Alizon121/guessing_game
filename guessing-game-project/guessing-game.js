const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let secretNumber;


function checkGuess(num) {
if (num > secretNumber) {
    console.log("Too high.")
    return false;
}
else if (num < secretNumber) {
    console.log("Too low.")
    return false;
} 
else {
    console.log("Correct!");
    return true;
}
}

function askGuess () {
    rl.question("Enter a guess: ", (answer) => {
        console.log(`Your guess is: ${answer}`)
        let result = Number(answer);
        if (checkGuess(result)) {
            console.log("You win!");
            rl.close()
        } else {
            askGuess();
        }
    })
}

function randomInRange(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
    // The maximum is inclusive and the minimum is inclusive
}




function askRange() {
// Nested questions
rl.question("What would you like the minimum range to be? ", minAnswer => {
console.log(`The minimum range is: ${minAnswer}`);

rl.question("What would you like the max range to be? ", maxAnswer => {
console.log(`The maximum range is: ${maxAnswer}`)
console.log("I'm thinking of a number between " + minAnswer + " and " + maxAnswer + ".");
minAnswer = Number(minAnswer);
maxAnswer = Number(maxAnswer);
secretNumber = randomInRange(minAnswer, maxAnswer);
askGuess();
})
})
}

    

console.log(askRange());