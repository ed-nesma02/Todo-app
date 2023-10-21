import {Container} from 'react-bootstrap';
import {AddTask} from './modules/Main/AddTask';
import {List} from './modules/Main/List';
import {useAppSelector} from './hooks';
import {useEffect} from 'react';
import {getLocalStorage, setLocalStorage} from './services/SotargeService';
import {useDispatch} from 'react-redux';
import {getTodo} from './store/tasks/tasksReducer';
import {ModalElement} from './modules/Modal/Modal';

function App() {
  const {todoList, status} = useAppSelector((state) => state.tasks);
  const {login, name} = useAppSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (name) {
      if (status) {
        setLocalStorage(name, todoList);
        return;
      }
      const data = getLocalStorage(name);
      dispatch(getTodo(data));
    }
  }, [todoList, status, name, dispatch]);

  return (
    <div>
      <Container className="app-container vh-100 w-100 d-flex align-items-center justify-content-center flex-column">
        {login && (
          <>
            <h3 className='mt-3'>{`Todo App - ${name}`}</h3>
            <AddTask />
            <List />
          </>
        )}
        {!login && <ModalElement />}
      </Container>
    </div>
  );
}

export default App;
