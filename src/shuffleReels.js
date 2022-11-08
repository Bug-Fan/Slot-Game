// Function that shuffles the elements of each reel randomly
const shuffleReels = (reels) => {

  reels.forEach((reel) => {
    for (let i = reel.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [reel[i], reel[j]] = [reel[j], reel[i]];
    }
  });

  return reels;

};

module.exports = shuffleReels;
