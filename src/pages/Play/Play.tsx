/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Board from '../../components/Board/Board';
import createDeck from '../../functions/createDeck';
import InformativeContainer from '../../components/InformativeContainer/InformativeContainer';
import shuffleDeck from '../../functions/shuffleDeck';
import { numSetsInBoard } from '../../functions/findAllSets';
import type { CardObject } from '../../types/types';

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

  function toggleBuffer(i: number) {
    if (cardBuffer.includes(i)) {
      const newBuffer = [...cardBuffer];
      const indexToRemove = cardBuffer.indexOf(i);
      newBuffer.splice(indexToRemove, 1);
      setCardBuffer(newBuffer);
      return;
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
