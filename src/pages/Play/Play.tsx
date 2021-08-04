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

  function dealSet(bufferIndices: [number, number, number]) {
    const [...theDeck] = deck;
    const [...theBoard] = boardCards;

    const [i1, i2, i3] = bufferIndices;

    if (theDeck.length >= 3) {
      theBoard[i1] = theDeck.pop() as CardObject;
      theBoard[i2] = theDeck.pop() as CardObject;
      theBoard[i3] = theDeck.pop() as CardObject;
    } else {
      theBoard[i1] = { ...theBoard[i1], visibility: false };
      theBoard[i2] = { ...theBoard[i2], visibility: false };
      theBoard[i3] = { ...theBoard[i3], visibility: false };
    }
    setBoardCards(theBoard);
    setDeck(theDeck);
    setCardBuffer([]);
  }

  function removeAlreadySelectedIndex(i: number) {
    const newBuffer = [...cardBuffer];
    newBuffer.splice(cardBuffer.indexOf(i), 1);
    setCardBuffer(newBuffer);
  }

  function toggleBuffer(i: number) {
    if (cardBuffer.includes(i)) {
      removeAlreadySelectedIndex(i);
      return;
    }
    const newBuffer = [...cardBuffer, i];
    if (newBuffer.length > 2) {
      const [i1, i2, i3] = newBuffer;
      if (isSet([boardCards[i1], boardCards[i2], boardCards[i3]])) {
        dealSet([i1, i2, i3]);
        return;
      }
      setCardBuffer([]);
      return;
    }
    setCardBuffer(newBuffer);
  }

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', marginTop: '100px' }}
    >
      <InformativeContainer color="blue">
        Informative Content Here
      </InformativeContainer>
      <Board
        cardBuffer={cardBuffer}
        boardCards={boardCards}
        toggleBuffer={toggleBuffer}
      />
      <p>Sets possible: {setsAvailable}</p>
      <p>Total cards left: {deck.length + boardCards.length}</p>
    </div>
  );
};

export default Play;
