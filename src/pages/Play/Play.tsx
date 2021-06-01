/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Board from '../../components/Board/Board';
import createDeck from '../../functions/createDeck';
import InformativeContainer from '../../components/InformativeContainer/InformativeContainer';
import shuffleDeck from '../../functions/shuffleDeck';
import combinations from '../../functions/findAllSets';
import isSet from '../../functions/isSet';
import type { DeckObject } from '../../functions/createDeck';

function dealCards(
  deck: DeckObject[],
  deckSetter: React.Dispatch<DeckObject[]>,
  shownCardsSetter: React.Dispatch<DeckObject[]>
) {
  const [...theDeck] = deck;
  shownCardsSetter(theDeck.splice(0, 12));
  deckSetter(theDeck);
}

// function checkSelectedCards(i1: number, i2: number, i3: number) {
//   const card1 = shownCards[i1];
//   const card2 = shownCards[i2];
//   const card3 = shownCards[i3];

//   let isASet = isSet(card1, card2, card3);

//   if (!isASet) {
//     // if its not a set send signal to reset class back to unselected
//     return false;
//   }

//   // remove this 3 cards from shownCards array and deal more
// }

function toggleBuffer(
  i: number,
  buffer: number[],
  bufSetter: React.Dispatch<number[]>
) {
  if (buffer.includes(i)) {
    const indexToRemove = buffer.indexOf(i);
    buffer.splice(indexToRemove, 1);
    bufSetter(buffer);
    return;
  }
  bufSetter([...buffer, i]);
}

const Play = () => {
  const [timer, setTimer] = useState(0);
  const [cardBuffer, setCardBuffer] = useState<number[]>([]);
  const [deck, setDeck] = useState(shuffleDeck(createDeck()));
  const [shownCards, setShownCards] = useState<DeckObject[]>([]);
  const [setsAvailable, setSetsAvailable] = useState<number>(0);

  const allShownComb = combinations(shownCards);

  let currSetCount = 0;
  allShownComb.forEach(([obj1, obj2, obj3]) => {
    if (isSet(obj1, obj2, obj3)) {
      currSetCount += 1;
    }
  });

  useEffect(() => {
    setSetsAvailable(currSetCount);
  }, [shownCards, currSetCount]);

  useEffect(() => {
    dealCards(deck, setDeck, setShownCards);
    const timeSinceStart = window.setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      window.clearInterval(timeSinceStart);
    };
  }, []);

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', marginTop: '100px' }}
    >
      <InformativeContainer color="blue">
        Informative Content Here
      </InformativeContainer>
      <Board
        shownCards={shownCards}
        toggleBuffer={toggleBuffer}
        cardBuffer={cardBuffer}
        setCardBuffer={setCardBuffer}
      />
      <p>Sets possible: {setsAvailable}</p>
      <p>Total cards left: {deck.length + shownCards.length}</p>
      <p>{timer}</p>
    </div>
  );
};

export default Play;
