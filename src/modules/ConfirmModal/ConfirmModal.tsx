import React, {Dispatch, SetStateAction} from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

type Props = {
  setConfirmModal: Dispatch<SetStateAction<boolean>>;
  setDeleteTask: Dispatch<SetStateAction<boolean>>;
};

export const ConfirmModal = ({setConfirmModal, setDeleteTask}: Props) => {
  return ReactDOM.createPortal(
    <div
      className="modal show align-items-center bg-dark"
      style={{display: 'flex', position: 'fixed'}}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title className="text-center w-100">
            Уверенны что хотите удалить?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-evenly">
          <Button
            variant="danger"
            onClick={() => {
              setConfirmModal(false);
              setDeleteTask(true);
            }}
            style={{width: '100px'}}
          >
            Да
          </Button>
          <Button
            variant="success"
            onClick={() => {
              setConfirmModal(false);
            }}
            style={{width: '100px'}}
          >
            Нет
          </Button>
        </Modal.Body>
      </Modal.Dialog>
    </div>,
    document.getElementById('confirmModal-root')!
  );
};
