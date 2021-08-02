/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Board from '../../components/Board/Board';
import createDeck from '../../functions/createDeck';
import InformativeContainer from '../../components/InformativeContainer/InformativeContainer';
import shuffleDeck from '../../functions/shuffleDeck';
import { numSetsInBoard } from '../../functions/findAllSets';
import type { CardObject } from '../../types/types';
import isSet from '../../functions/isSet';

const Play = () => {
  const [cardBuffer, setCardBuffer] = useState<number[]>([]);
  const [deck, setDeck] = useState(shuffleDeck(createDeck()));
  const [boardCards, setBoardCards] = useState<CardObject[]>([]);
  const [setsAvailable, setSetsAvailable] = useState<number>(0);

  useEffect(() => {
    setSetsAvailable(numSetsInBoard(boardCards));
  }, [boardCards]);

  useEffect(() => {
    dealNewGame();
  }, []);

  function dealNewGame() {
    const [...theDeck] = deck;
    setBoardCards(theDeck.splice(0, 12));
    setDeck(theDeck);
  }

  // function dealSet(cardsToRemove: [number, number, number]) {
  //   const [...theDeck] = deck;
  //   const [...theBoard] = boardCards;

  //   const [i1, i2, i3] = cardsToRemove;
  //   theBoard[i1] = theDeck.pop();
  //   theBoard[i2] = theDeck.pop();
  //   theBoard[i3] = theDeck.pop();

  //   setBoardCards(theBoard)
  //   setDeck(theDeck)
  //   setCardBuffer([])
  // }

  function toggleBuffer(i: number) {
    if (cardBuffer.includes(i)) {
      const newBuffer = [...cardBuffer];
      newBuffer.splice(cardBuffer.indexOf(i), 1);
      setCardBuffer(newBuffer);
      return;
    }
    if (cardBuffer.length >= 3) {
      isSet([
        boardCards[cardBuffer[0]],
        boardCards[cardBuffer[1]],
        boardCards[cardBuffer[2]],
      ]);
    }
    setCardBuffer([...cardBuffer, i]);
  }

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', marginTop: '100px' }}
    >
      <InformativeContainer color="blue">
        Informative Content Here
      </InformativeContainer>
      <Board boardCards={boardCards} toggleBuffer={toggleBuffer} />
      <p>Sets possible: {setsAvailable}</p>
      <p>Total cards left: {deck.length + boardCards.length}</p>
    </div>
  );
};

export default Play;
