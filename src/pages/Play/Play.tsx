import React, { useState } from 'react';
import Board from '../../components/Board/Board';
import createDeck from '../../functions/createDeck';

const Play = () => {
  const [timer, setTimer] = useState();
  const [deck, setDeck] = useState(createDeck(3, 3, 3, 3));
  const [shownCards, setShownCards] = useState();
  const [selectedCards, setSelectedCards] = useState();
  const [cardsLeft, setCardsLeft] = useState();
  const [setsAvailableInDeck, setSecksAvailableInDeck] = useState();

  return (
    <>
      <InformativeContainer />
      <Board shownCards={shownCards} selectedCards={selectedCards} />
      <p>Sets possible: {setsAvailableInDeck}</p>
      <p>Total cards left: {cardsLeft}</p>
    </>
  );
};

export default Play;
