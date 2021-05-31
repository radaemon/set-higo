/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Board from '../../components/Board/Board';
import createDeck from '../../functions/createDeck';
import InformativeContainer from '../../components/InformativeContainer/InformativeContainer';
import shuffleDeck from '../../functions/shuffleDeck';
import combinations from '../../functions/findAllSets';
import isSet from '../../functions/isSet';

type DeckObject = {
  color: 1 | 2 | 3;
  quantity: 1 | 2 | 3;
  shape: 1 | 2 | 3;
  texture: 1 | 2 | 3;
};

function dealCards(
  deck: DeckObject[],
  deckSetter: React.Dispatch<DeckObject[]>,
  shownCardsSetter: React.Dispatch<DeckObject[]>
) {
  const [...theDeck] = deck;
  shownCardsSetter(theDeck.splice(0, 12));
  deckSetter(theDeck);
}

const Play = () => {
  const [deck, setDeck] = useState(shuffleDeck(createDeck()));
  const [shownCards, setShownCards] = useState<DeckObject[]>([]);
  const [setsAvailable, setSetsAvailable] = useState<number>(0);

  const allShownComb = combinations(shownCards);

  let setCounter = 0;
  allShownComb.forEach(([obj1, obj2, obj3]) => {
    if (isSet(obj1, obj2, obj3)) {
      setCounter += 1;
    }
  });

  useEffect(() => {
    setSetsAvailable(setCounter);
  }, [shownCards, setCounter]);

  useEffect(() => {
    dealCards(deck, setDeck, setShownCards);
  }, []);

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', marginTop: '100px' }}
    >
      <InformativeContainer color="blue">
        Informative Content Here
      </InformativeContainer>
      <Board shownCards={shownCards} />
      <p>Sets possible: {setsAvailable}</p>
      <p>Total cards left: {deck.length + shownCards.length}</p>
    </div>
  );
};

export default Play;
