import {Container} from 'react-bootstrap';
import style from './App.module.scss';
import { AddTask } from './modules/AddTask';
import { List } from './modules/List';

function App() {
  return (
    <div className={style.app}>
      <Container className="app-container vh-100 w-100 d-flex align-items-center justify-content-center flex-column">
        <h3>Todo App</h3>
        <AddTask />
        <List />
      </Container>
    </div>
  );
}

export default App;
