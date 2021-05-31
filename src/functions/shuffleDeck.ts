type DeckObject = {
  color: number;
  quantity: number;
  shape: number;
  texture: number;
};

function shuffleDeck(cardArr: DeckObject[]) {
  const [...arr] = cardArr;
  for (let i = cardArr.length - 1; i > 0; i--) {
    const randomInteger = Math.floor(Math.random() * cardArr.length);
    const temp = cardArr[i];
    arr[i] = cardArr[randomInteger];
    arr[randomInteger] = temp;
  }
  return arr;
}

export default shuffleDeck;
