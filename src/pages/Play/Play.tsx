import React, { useState } from 'react';
import Board from '../../components/Board/Board';
import createDeck from '../../functions/createDeck';
import InformativeContainer from '../../components/InformativeContainer/InformativeContainer';
import shuffleDeck from '../../functions/shuffleDeck';

type DeckObject = {
  color: number;
  quantity: number;
  shape: number;
  texture: number;
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

  dealCards(deck, setDeck, setShownCards);

  return (
    <>
      <InformativeContainer color="red">hi</InformativeContainer>
      <Board shownCards={shownCards} />
    </>
  );
};

export default Play;
