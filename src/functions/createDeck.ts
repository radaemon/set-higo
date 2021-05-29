const createDeck = (quantity: number, colors: number, shapes: number, textures: number) => {
  const deck = [];

  for (let i = 1; i <= quantity; i++) {
    for (let j = 1; j <= colors; j++) {
      for (let k = 1; k <= shapes; k++) {
        for (let m = 1; m <= textures; m++) {
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
