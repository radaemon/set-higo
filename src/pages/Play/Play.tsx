/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Board from '../../components/Board/Board';
import createDeck from '../../functions/createDeck';
import InformativeContainer from '../../components/InformativeContainer/InformativeContainer';
import shuffleDeck from '../../functions/shuffleDeck';
import { findBoardSets } from '../../functions/findAllSets';
import type { CardObject } from '../../types/types';

function dealCards(
  deck: CardObject[],
  deckSetter: React.Dispatch<CardObject[]>,
  shownCardsSetter: React.Dispatch<CardObject[]>
) {
  const [...theDeck] = deck;
  shownCardsSetter(theDeck.splice(0, 12));
  deckSetter(theDeck);
}

function toggleBuffer(
  i: number,
  buffer: number[],
  bufSetter: React.Dispatch<number[]>
) {
  if (buffer.includes(i)) {
    const newBuffer = [...buffer];
    const indexToRemove = buffer.indexOf(i);
    newBuffer.splice(indexToRemove, 1);
    bufSetter(newBuffer);
    return;
  }
  bufSetter([...buffer, i]);
}

// function dealCard(
//   deck: CardObject[],
//   board: CardObject[],
//   indexOfBoard: number,
//   deckSetter: React.Dispatch<React.SetStateAction<CardObject[]>>,
//   boardSetter: React.Dispatch<React.SetStateAction<CardObject[]>>
// ) {
//   if (!deck.length) {
//     return;
//   }
//   board[indexOfBoard] = deck.pop() as CardObject;

//   deckSetter(deck);
//   boardSetter(board);
// }

const Play = () => {
  const [cardBuffer, setCardBuffer] = useState<number[]>([]);
  const [deck, setDeck] = useState(shuffleDeck(createDeck()));
  const [shownCards, setShownCards] = useState<CardObject[]>([]);
  const [setsAvailable, setSetsAvailable] = useState<number>(0);

  useEffect(() => {
    setSetsAvailable(findBoardSets(shownCards));
  }, [shownCards]);

  useEffect(() => {
    dealCards(deck, setDeck, setShownCards);
  }, []);

  // function isCurrBufferSet() {
  //   if (cardBuffer.length >= 3) {
  //     if (
  //       checkBufferSelectedCards(
  //         cardBuffer[0],
  //         cardBuffer[1],
  //         cardBuffer[2],
  //         shownCards
  //       )
  //     ) {
  //       const [...newBoardCards] = shownCards;
  //       const [...newDeckToInsert] = deck;
  //       newBoardCards[card1InBufferIdx] = newDeckToInsert.pop();
  //       newBoardCards[card2InBufferIdx] = newDeckToInsert.pop();
  //       newBoardCards[card3InBufferIdx] = newDeckToInsert.pop();
  //       setShownCards(newBoardCards);
  //       setDeck(newDeckToInsert);
  //       setCardBuffer([]);
  //     }
  //   }
  // }

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
    </div>
  );
};

export default Play;
