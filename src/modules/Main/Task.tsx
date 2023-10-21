import {Button, Form, InputGroup} from 'react-bootstrap';
import {
  ITask,
  completeTodo,
  editTodo,
  removeTodo,
} from '../../store/tasks/tasksReducer';
import {useDispatch} from 'react-redux';
import {useEffect, useRef, useState} from 'react';
import {ConfirmModal} from '../ConfirmModal/ConfirmModal';

type Props = ITask & {index: number};

export const Task = ({task, complete, id, index}: Props) => {
  const dispatch = useDispatch();
  const editBtn = useRef<HTMLButtonElement>(null);
  const [edit, setEdit] = useState(false);
  const [taskValue, setTaskValue] = useState(task);
  const [confirmModal, setConfirmModal] = useState(false);
  const [deleteTask, setDeleteTask] = useState(false);

  const handleClickEdit = (e: React.ChangeEvent<EventTarget>) => {
    if (edit) {
      setEdit(false);
      dispatch(editTodo({id, task: taskValue}));
      return;
    }
    setEdit(true);
  };

  useEffect(() => {
    if (deleteTask) {
      dispatch(removeTodo(id));
    }
  }, [deleteTask, dispatch, id]);


  useEffect(() => {
    if (editBtn.current instanceof HTMLButtonElement) {
      if (!taskValue) {
        editBtn.current.disabled = true;
        return;
      }
      editBtn.current.disabled = false;
    }
  }, [taskValue]);

  return (
    <>
      <tr className={complete ? 'table-success' : "table-light"}>
        <td>{index}</td>
        {!edit ? (
          <td className={complete ? 'text-decoration-line-through' : 'task'}>
            {taskValue}
          </td>
        ) : (
          <td>
            <InputGroup>
              <Form.Control
                value={taskValue}
                required
                onChange={(e: React.ChangeEvent<EventTarget>) => {
                  if (e.target instanceof HTMLInputElement) {
                    setTaskValue(e.target.value);
                  }
                }}
              />
            </InputGroup>
          </td>
        )}
        <td>{complete ? 'Выполнена' : 'В процессе'}</td>
        <td>
          <Button
            ref={editBtn}
            className="btn btn-secondary"
            data-id={id}
            onClick={handleClickEdit}
          >
            Редактировать
          </Button>{' '}
          <Button
            className="btn btn-danger"
            data-id={id}
            onClick={() => {
              setConfirmModal(true);
            }}
          >
            Удалить
          </Button>{' '}
          <Button
            className="btn btn-success"
            data-id={id}
            onClick={() => {
              dispatch(completeTodo(id));
            }}
          >
            Завершить
          </Button>
        </td>
      </tr>
      {confirmModal && <ConfirmModal setConfirmModal={setConfirmModal} setDeleteTask={setDeleteTask} />}
    </>
  );
};
