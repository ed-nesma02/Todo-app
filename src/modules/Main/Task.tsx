import {Button} from 'react-bootstrap';
import {ITask, completeTodo, removeTodo} from '../../store/tasks/tasksReducer';
import {useDispatch} from 'react-redux';
import {useEffect, useRef} from 'react';

type Props = ITask & {index: number};

export const Task = ({task, complete, id, index}: Props) => {
  const dispatch = useDispatch();
  const taskRef = useRef<HTMLTableRowElement>(null);
  const nameTaskRef = useRef<HTMLTableDataCellElement>(null);

  const handleClickDelete = (e: React.ChangeEvent<EventTarget>) => {
    if (e.target instanceof HTMLButtonElement) {
      e.preventDefault();
      dispatch(removeTodo(e.target.dataset.id));
    }
  };

  const handleClickComplete = (e: React.ChangeEvent<EventTarget>) => {
    if (e.target instanceof HTMLButtonElement) {
      e.preventDefault();
      dispatch(completeTodo(e.target.dataset.id));
    }
  };

  useEffect(() => {
    if (taskRef.current && nameTaskRef.current) {
      if (complete) {
        taskRef.current.className = 'table-success';
        nameTaskRef.current.className = 'text-decoration-line-through';
        return;
      }
    }
  }, [complete]);

  return (
    <tr className="table-light" ref={taskRef}>
      <td>{index}</td>
      <td className="task" ref={nameTaskRef}>
        {task}
      </td>
      <td>{complete ? 'Выполнена' : 'В процессе'}</td>
      <td>
        <Button
          className="btn btn-danger"
          data-id={id}
          onClick={handleClickDelete}
        >
          Удалить
        </Button>{' '}
        <Button
          className="btn btn-success"
          data-id={id}
          onClick={handleClickComplete}
        >
          Завершить
        </Button>
      </td>
    </tr>
  );
};
