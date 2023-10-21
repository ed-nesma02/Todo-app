import React from 'react';
import {Button} from 'react-bootstrap';

type Props = {};

export const Task = (props: Props) => {
  return (
    <tr className="table-light">
      <td>1</td>
      <td className="task">Купить слона</td>
      <td>В процессе</td>
      <td>
        <Button className="btn btn-danger">Удалить</Button>{' '}
        <Button className="btn btn-success">Завершить</Button>
      </td>
    </tr>
  );
};
