let secretNumber = 15;

const checkGuess = (num) => {
num = Math.abs(num)
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

console.log(checkGuess(10))