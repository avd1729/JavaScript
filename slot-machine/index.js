// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6 . Give or Take money
// 7 . Play again

const prompt = require("prompt-sync")();


const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    A:2,
    B:4,
    C:6,
    D:8
}

const SYMBOL_VALUES = {
    A:5,
    B:4,
    C:3,
    D:2
}


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

const getBet = (balance , noOfLines) => {

    while(true){
        const bet = prompt("Enter a bet amount: ")
        const betAmount = parseFloat(bet)

        if (isNaN(betAmount) || betAmount <= 0 || betAmount > balance / noOfLines){
            console.log("Invalid bet amount , try again !.")
        } else {
            return betAmount;
        }
    }

};

const spin = () => {
    const symbols = [];
    for (const [symbol , count] of Object.entries(SYMBOLS_COUNT)){
        for(let i=0 ; i<count ; i++){
            symbols.push(symbol);
        }
    }
    // console.log(symbols);

    const reels = [];
    for (let i = 0; i < COLS; i++) {

      reels.push([]);
      const reelSymbols = [...symbols];

      for (let j = 0; j < ROWS; j++) {

        const randomIndex = Math.floor(Math.random() * reelSymbols.length);
        const selectedSymbol = reelSymbols[randomIndex];
        reels[i].push(selectedSymbol);
        reelSymbols.splice(randomIndex, 1); // index , no of elements to remove
        
        }
    }

    return reels;
};

let balance = deposit();
const noOfLines = lines();
const bet = getBet(balance , noOfLines);