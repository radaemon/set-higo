/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Board from '../../components/Board/Board';
import createDeck from '../../functions/createDeck';
import InformativeContainer from '../../components/InformativeContainer/InformativeContainer';
import Modal from '../../components/Modal/Modal';
import TimerHook from '../../components/Hooks/TimerHook';
import { numSetsInCardObjArr } from '../../functions/findAllSets';
import type { CardObject, ModalState, StatusDisplay } from '../../types/types';
import isSet from '../../functions/isSet';

const Play = () => {
  const timer = TimerHook();
  const [cardBuffer, setCardBuffer] = useState<number[]>([]);
  const [deck, setDeck] = useState(createDeck());
  const [boardCards, setBoardCards] = useState<CardObject[]>([]);
  const [numBoardSets, setNumBoardSets] = useState<number>(0);
  const [statusDisplay, setStatusDisplay] = useState<StatusDisplay>({
    color: '',
    text: 'Incorrect set',
    thinking: false,
  });
  const [stateModal, setStateModal] = useState<ModalState>({
    noSetsBoard: false,
    noSetsDeck: false,
    seconds: 0,
  });

  useEffect(() => {
    setNumBoardSets(numSetsInCardObjArr(boardCards));
    checkNoBoardSetsModal();
    checkNoDeckSetsModal();
  }, [boardCards]);

  useEffect(() => {
    dealGame();
  }, []);

  function dealGame() {
    const [...copyDeck] = shuffleDeck();
    setBoardCards(copyDeck.splice(0, 12));
    setDeck(copyDeck);
  }

  function checkNoBoardSetsModal() {
    if (numBoardSets) setStateModal({ ...stateModal, noSetsBoard: false });
    else if (!numBoardSets) setStateModal({ ...stateModal, noSetsBoard: true });
  }

  function checkNoDeckSetsModal() {
    const setsInDeck = numSetsInCardObjArr([...boardCards, ...deck]);
    if (setsInDeck) setStateModal({ ...stateModal, noSetsBoard: false });
    else if (!setsInDeck)
      setStateModal({ ...stateModal, noSetsBoard: true, seconds: timer });
  }

  function shuffleDeck() {
    const [...arr] = [...deck, ...boardCards];
    for (let i = deck.length - 1; i > 0; i--) {
      const randomInteger = Math.floor(Math.random() * deck.length);
      const temp = arr[i];
      arr[i] = arr[randomInteger];
      arr[randomInteger] = temp;
    }
    return arr;
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
    if (statusDisplay.thinking) return;
    if (cardBuffer.includes(i)) {
      removeAlreadySelectedIndex(i);
      return;
    }
    const newBuffer = [...cardBuffer, i];
    setCardBuffer(newBuffer);
    if (newBuffer.length > 2) {
      const [i1, i2, i3] = newBuffer;
      if (isSet([boardCards[i1], boardCards[i2], boardCards[i3]])) {
        alertSetSuccess().then(() => {
          dealSet([i1, i2, i3]);
        });
        return;
      }
      alertSetFailed().then(() => {
        setCardBuffer([]);
      });
      return;
    }
    setCardBuffer(newBuffer);
  }

  function alertSetFailed() {
    setStatusDisplay({ color: 'red', text: 'Incorrect set', thinking: true });
    return new Promise((resolve) => {
      setTimeout(() => {
        setStatusDisplay({ ...statusDisplay, color: '', thinking: false });
        resolve('Promise resolved');
      }, 3000);
    });
  }

  function alertSetSuccess() {
    setStatusDisplay({ color: 'blue', text: 'Set found', thinking: true });
    return new Promise((resolve) => {
      setTimeout(() => {
        setStatusDisplay({ ...statusDisplay, color: '', thinking: false });
        resolve('Promise resolved');
      }, 3000);
    });
  }

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', marginTop: '100px' }}
    >
      <Modal modalState={stateModal} />
      <InformativeContainer color={statusDisplay.color}>
        {statusDisplay.text}
      </InformativeContainer>
      <Board
        cardBuffer={cardBuffer}
        boardCards={boardCards}
        toggleBuffer={toggleBuffer}
      />
      <p className="mt-3">Sets possible: {numBoardSets}</p>
      <p>Total cards left: {deck.length + boardCards.length}</p>
    </div>
  );
};

export default Play;
