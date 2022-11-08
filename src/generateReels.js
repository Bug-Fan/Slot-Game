const reels = new Array();

// Main Reel filling function
const generateReels = (rows, columns, symbols, probability) => {
    
    for (let i = 0; i < columns; i++)
    reels.push(generateSingleReel(rows, symbols, probability));

    return reels;
};

const generateSingleReel = (rows, symbols, probability) => {

  let reel = new Array();
  let filledRows = 0;
  
//   Filling a reel with symbols 
  symbols.forEach((symbol) => {
    let count = determineOccurrence(rows, symbol, probability);
    if (filledRows + count < rows)
      for (let i = 0; i < count; i++) {
        reel.push(symbol);
        filledRows++;
      }
  });
  
//   Filling remaining unfilled rows with randomly selected symbols
  if (reel.length < rows)
    while (reel.length < rows)
      reel.push(symbols[Math.floor(Math.random() * symbols.length)]);
  
  return reel;
};

// Determining the occurrence of each element based on its occurrence probability and the size of the reel
const determineOccurrence = (rows, symbol, probability) => {

  for (let i of probability.keys())
    if (i.indexOf(symbol) >= 0)
      return Math.floor((probability.get(i) * rows) / i.length);

};

module.exports = generateReels;
