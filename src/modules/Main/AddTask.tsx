import {useEffect, useRef, useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {addTodo} from '../../store/tasks/tasksReducer';

export const AddTask = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState('');
  const saveRef = useRef<HTMLButtonElement>(null);
  const [valueSelect, setValueSelect] = useState('regular');

  const handleSubmit = (e: React.ChangeEvent<EventTarget>) => {
    e.preventDefault();
    dispatch(addTodo({task, importance: valueSelect}));
    setTask('');
    setValueSelect('regular');
  };

  const handleChange = (e: React.ChangeEvent<EventTarget>) => {
    if (e.target instanceof HTMLInputElement) {
      setTask(e.target.value);
    }
    if(e.target instanceof HTMLSelectElement){
      setValueSelect(e.target.value);
      console.log(e.target.value);
    }
  };

  useEffect(() => {
    if (saveRef.current) {
      if (task) {
        saveRef.current.disabled = false;
        return;
      }
      saveRef.current.disabled = true;
    }
  }, [task]);

  return (
    <Form className="d-flex align-items-center mb-3" onSubmit={handleSubmit}>
      <Form.Label className="form-group me-3 mb-0">
        <Form.Control
          value={task}
          onChange={handleChange}
          type="text"
          className="form-control"
          placeholder="ввести задачу"
        />
      </Form.Label>
      <Form.Select
        className="me-3"
        aria-label="Важность задачи"
        style={{width: '125px'}}
        value={valueSelect}
        onChange={handleChange}
      >
        <option value="regular">обычная</option>
        <option value="important">важная</option>
        <option value="urgent">срочная</option>
      </Form.Select>
      <Button
        className="btn btn-primary me-3"
        type="submit"
        disabled
        ref={saveRef}
      >
        Сохранить
      </Button>
      <Button
        className="btn btn-warning"
        type="reset"
        onClick={(e: React.ChangeEvent<EventTarget>) => {
          e.preventDefault();
          setTask('');
          setValueSelect('regular');
        }}
      >
        Очистить
      </Button>
    </Form>
  );
};
