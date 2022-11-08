const input = require("prompt-sync")();

const selectPattern = (display, reels_count, active_rows) => {
    let selectedPattern = "";
    console.log("Selecting the pattern...");
    for (let j = 0; j < reels_count; j++){
        console.log(`Reel Number: ${j + 1}`);
        for (let i = 0; i < active_rows; i++){
            console.log(`${i}\t${display[i][j]}`);
        }
        selectedPattern += display[Number(input("Enter index corresponding to the Symbol in the reel: "))][j];
        console.log("\n");
    }
    return selectedPattern;
}

module.exports = selectPattern;