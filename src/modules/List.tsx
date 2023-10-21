import {Table} from 'react-bootstrap';
import { Task } from './Task';

export const List = () => {
  return (
    <div className="table-wrapper">
      <Table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th>№</th>
            <th>Задача</th>
            <th>Статус</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          <Task />
        </tbody>
      </Table>
    </div>
  );
};
