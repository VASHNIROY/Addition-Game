let randomFirstNumber = Math.ceil(Math.random() * 100);
let randomSecondNumber = Math.ceil(Math.random() * 100);

let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");

function restart() {
    let randomFirstNumber = Math.ceil(Math.random() * 100);
    let randomSecondNumber = Math.ceil(Math.random() * 100);
    firstNumber.textContent = randomFirstNumber;
    secondNumber.textContent = randomSecondNumber;
    gameResult.textContent = "";
    userInput.value = "";

}
restart();

function check() {
    let userInputValue = parseInt(userInput.value);
    let firstNumberInt = parseInt(firstNumber.textContent)
    let seconNumberInt = parseInt(secondNumber.textContent)
    let finalNumber = firstNumberInt + seconNumberInt;
    if (finalNumber === userInputValue) {
        gameResult.textContent = "Congratulations! You got it right";
        gameResult.style.backgroundColor = "#028a0f";
    } else {
        gameResult.textContent = "Please Try again!";
        gameResult.style.backgroundColor = "#1e217c";
    }
}