import {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import {useDispatch} from 'react-redux';
import { authLogin } from '../../store/auth/authReducer';

export const ModalElement = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.ChangeEvent<EventTarget>) => {
    e.preventDefault();
    dispatch(authLogin(name));
    setName('');
  };

  return (
    <div
      className="modal show align-items-center"
      style={{display: 'flex', position: 'initial'}}
    >
      <Modal.Dialog className="w-100">
        <Modal.Header>
          <Modal.Title className="text-center w-100">Авторизация</Modal.Title>
        </Modal.Header>
        <Form className="p-3 d-flex flex-column" onSubmit={handleSubmit}>
          <Form.Control
            size="lg"
            type="text"
            placeholder="Введите имя"
            value={name}
            required
            onChange={(e: React.ChangeEvent<EventTarget>) => {
              e.preventDefault();
              if (e.target instanceof HTMLInputElement) {
                setName(e.target.value);
              }
            }}
            className="mb-3"
          />
          <Button variant="primary" type='submit' className="text-right">
            Войти
          </Button>
        </Form>
      </Modal.Dialog>
    </div>
  );
};
