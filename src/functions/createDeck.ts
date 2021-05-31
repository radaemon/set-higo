const createDeck = () => {
  const deck = [];

  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      for (let k = 1; k <= 3; k++) {
        for (let m = 1; m <= 3; m++) {
          deck.push({
            quantity: i,
            color: j,
            shape: k,
            texture: m,
          });
        }
      }
    }
  }

  return deck;
};

export default createDeck;
