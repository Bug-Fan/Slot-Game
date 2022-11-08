const determinePay = (wager, selectedPattern, probability) => {
    let returnAmount = 0;
    let message = "";
    console.log(wager, selectedPattern);
    if (selectedPattern === "AAA" || selectedPattern === "BBB" || selectedPattern === "CCC"){
        returnAmount = wager + (wager * 2);
        message = `You won 2 times the reward. You now have ${returnAmount} coins.`;
    }
    else if (selectedPattern === "DDD" || selectedPattern === "EEE" || selectedPattern === "FFF"){
        returnAmount = wager + (wager * 1);
        message = `You won 1 time the reward. You now have ${returnAmount} coins.`;
    }
    else if (selectedPattern === "GGG" || selectedPattern === "HHH"){
        returnAmount = wager + (wager * 0);
        message = `You won 0 times the reward. You now have ${returnAmount} coins.`;
    }
    else {
        returnAmount = 0;
        message = `You lost. You now have ${returnAmount} coins.`;
    }
    
    console.log(returnAmount);
    return message;
}

module.exports = determinePay;