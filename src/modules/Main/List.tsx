import {Table} from 'react-bootstrap';
import {Task} from './Task';
import {useAppSelector} from '../../hooks';

export const List = () => {
  const {todoList} = useAppSelector((state) => state.tasks);

  return (
    <div className="table-wrapper" style={{overflowY: 'auto'}}>
      {!!todoList.length && (
        <Table className="table table-hover table-bordered">
          <thead>
            <tr key="headtr">
              <th>№</th>
              <th>Задача</th>
              <th>Статус</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {!!todoList.length &&
              todoList.map((task, index) => (
                <Task key={task.id} {...task} index={index + 1} />
              ))}
          </tbody>
        </Table>
      )}
      {!todoList.length && <p>Задач нет</p>}
    </div>
  );
};
