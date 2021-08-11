import React from 'react';
import { Button } from 'react-bootstrap';
import { ModalState } from '../../types/types';
import './styles.scss';

type Props = {
  modalState: ModalState;
};

export default function Modal({ modalState }: Props) {
  let modalScenario;
  if (modalState.noSetsBoard === true) {
    modalScenario = (
      <div className="modalCase">
        <h1 className="mb-4">
          No sets <br />
          available!
        </h1>
        <Button variant="primary">Shuffle cards</Button>
      </div>
    );
  } else if (modalState.noSetsDeck === true) {
    modalScenario = (
      <div className="modalCase">
        <h1>You win!</h1>
        <p>You found all the sets in {modalState.seconds} seconds</p>
        <Button variant="primary">Play again</Button>
      </div>
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
