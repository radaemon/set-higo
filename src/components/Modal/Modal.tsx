import React from 'react';
import { ModalState } from '../../types/types';
import './styles.scss';

type Props = {
  modalState: ModalState;
};

export default function Modal({ modalState }: Props) {
  let modalScenario;
  if (modalState.noSetsBoard === true) {
    modalScenario = (
      <>
        <h1>No sets available!</h1>
        <button type="button">Shuffle cards</button>
      </>
    );
  } else if (modalState.noSetsDeck === true) {
    modalScenario = (
      <>
        <h1>You win!</h1>
        <p>You found all the sets in {modalState.seconds} seconds</p>
        <button type="button">Play again</button>
      </>
    );
  } else {
    modalScenario = <></>;
  }
  return (
    <div
      className={
        modalState.noSetsBoard || modalState.noSetsDeck
          ? 'modal show'
          : 'modal hide'
      }
    >
      <section className="modal-main">{modalScenario}</section>
    </div>
  );
}
