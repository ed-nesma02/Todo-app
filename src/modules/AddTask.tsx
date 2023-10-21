import {Button, Form} from 'react-bootstrap';

export const AddTask = () => {
  return (
    <Form className="d-flex align-items-center mb-3">
      <Form.Label className="form-group me-3 mb-0">
        <Form.Control
          type="text"
          className="form-control"
          placeholder="ввести задачу"
        />
      </Form.Label>
      <Button className="btn btn-primary me-3" type="submit">
        Сохранить
      </Button>
      <Button className="btn btn-warning" type="reset">
        Очистить
      </Button>
    </Form>
  );
};
