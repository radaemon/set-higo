/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Board from '../../components/Board/Board';
import createDeck from '../../functions/createDeck';
import InformativeContainer from '../../components/InformativeContainer/InformativeContainer';
import shuffleDeck from '../../functions/shuffleDeck';
import { findBoardSets } from '../../functions/findAllSets';
// import { checkBufferSelectedCards } from '../../functions/isSet';

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

function dealACard(
  [...deck]: DeckObject[],
  [...board]: DeckObject[],
  indexOfBoard: number,
  deckSetter: React.Dispatch<React.SetStateAction<DeckObject[]>>,
  boardSetter: React.Dispatch<React.SetStateAction<DeckObject[]>>
) {
  if (!deck.length) {
    return;
  }
  board[indexOfBoard] = deck.pop() as DeckObject;

  deckSetter(deck);
  boardSetter(board);
}

const Play = () => {
  // let counter = 0;
  const [cardBuffer, setCardBuffer] = useState<number[]>([]);
  const [deck, setDeck] = useState(shuffleDeck(createDeck()));
  const [shownCards, setShownCards] = useState<DeckObject[]>([]);
  const [setsAvailable, setSetsAvailable] = useState<number>(0);

  useEffect(() => {
    setSetsAvailable(findBoardSets(shownCards));
  }, [shownCards]);

  useEffect(() => {
    dealCards(deck, setDeck, setShownCards);
    // const timeSinceStart = window.setInterval(() => {
    //   counter += 1;
    // }, 1000);
    // return () => {
    //   window.clearInterval(timeSinceStart);
    // };
  }, []);

  // if (cardBuffer.length > 2) {
  //   const card1InBufferIdx = cardBuffer[0];
  //   const card2InBufferIdx = cardBuffer[1];
  //   const card3InBufferIdx = cardBuffer[2];
  //   if (
  //     checkBufferSelectedCards(
  //       card1InBufferIdx,
  //       card2InBufferIdx,
  //       card3InBufferIdx,
  //       shownCards
  //     )
  //   ) {
  //     // remove from board those indices and replace with new cards from deck
  //     const [...newBoardCards] = shownCards;
  //     const [...newDeckToInsert] = deck;
  //     // replace cards with new ones from deck.
  //     newBoardCards[card1InBufferIdx] = newDeckToInsert.pop();
  //     newBoardCards[card2InBufferIdx] = newDeckToInsert.pop();
  //     newBoardCards[card3InBufferIdx] = newDeckToInsert.pop();
  //     // set the board
  //     setShownCards(newBoardCards);
  //     setDeck(newDeckToInsert);
  //     setCardBuffer([]);
  //   }
  //   setTimeout(() => {
  //     setCardBuffer([]);
  //   }, 500);
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
