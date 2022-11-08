// const spinReels = (reels, reel_length, reels_count, active_rows) => {

//     console.log("Complete reels: ");
//     for (let i = 0; i < reel_length; i++) {
//         let row = "";
//         for (let j = 0; j < reels_count; j++)
//             row = row + `${reels[j][i]}\t`;
//         console.log(row)
//     }
//     return mainDisplay(reels, reel_length, reels_count, active_rows);
// }

const spinReels = (reels, reel_length, reels_count, active_rows) => {

  const display = new Array();
  console.log("Rows on Display: ");
  
  const mid = Math.floor(reel_length / 2);
  const diff = Math.floor(active_rows / 2);
  
//   Selecting the number of rows to be displayed at the middle on the display screen
  for (let i = mid - diff; i <= mid + diff; i++) {
    let row = "",
      rowArray = new Array();
    for (let j = 0; j < reels_count; j++) {
      row = row + `${reels[j][i]}\t`;
      rowArray.push(reels[j][i]);
    }
    console.log(row);
    display.push(rowArray);
  }

  return display;
};

module.exports = spinReels;