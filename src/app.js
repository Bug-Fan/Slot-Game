// Requiring(Importing) all the modules
const input = require("prompt-sync")();
const generateReels = require("./generateReels");
const shuffleReels = require("./shuffleReels");
const spinReels = require("./spinReels");
const selectPattern = require("./selectPattern");
const determinePay = require("./determinePay");

// Declaring symbols, paytable, occurence probability for each symbol, number of reels and their length
const symbols = ["A", "B", "C", "D", "E", "F", "G", "H"];
const active_rows = 3, reels_count = 3, reel_length = symbols.length * 5;
const probability = new Map();

probability.set(new Array("A", "B", "C"), 0.2);
probability.set(new Array("D", "E", "F"), 0.3);
probability.set(new Array("G", "H"), 0.5);

// Driver code
const startSlotMahine = () => {

  const wager = input("Enter the number coins: ");
	let reels = generateReels(reel_length, reels_count, symbols, probability);
  reels = shuffleReels(reels);
  const display = spinReels(reels, reel_length, reels_count, active_rows);
  const selectedPattern = selectPattern(display, reels_count, active_rows);
  const pay = determinePay(wager, selectedPattern, probability);
  console.log(pay);
  
};

startSlotMahine();