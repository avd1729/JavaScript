// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6 . Give or Take money
// 7 . Play again

const prompt = require("prompt-sync")();

const deposit = () => {

    while(true){
        const depositAmount = prompt("Enter a deposit amount: ")
        const numberDepositAmount = parseFloat(depositAmount)

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0){
            console.log("Invalid deposit amount , try again !.")
        } else {
            return numberDepositAmount;
        }
    }
};

const lines = () => {

    while(true){
        const Lines = prompt("Number of lines to bet on: ")
        const noOfLines = parseInt(Lines)

        if (isNaN(noOfLines) || noOfLines <= 0 || noOfLines > 3){
            console.log("Invalid number of lines , try again !.")
        } else {
            return noOfLines;
        }
    }
};

const getBet = (balance) => {

    while(true){
        const bet = prompt("Enter a bet amount: ")
        const betAmount = parseFloat(bet)

        if (isNaN(betAmount) || betAmount <= 0 || betAmount > balance){
            console.log("Invalid bet amount , try again !.")
        } else {
            return betAmount;
        }
    }

}

let balance = deposit();
const noOfLines = lines();

