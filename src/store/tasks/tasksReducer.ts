import {createSlice} from '@reduxjs/toolkit';

export interface ITask {
  id: string;
  complete: boolean;
  task: string;
}

const initialState: {
  status: boolean;
  todoList: ITask[];
} = {
  status: false,
  todoList: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    getTodo(state, action) {
      state.status = true;
      state.todoList = action.payload;
    },
    addTodo(state, action) {
      state.todoList.push({
        id: Math.random().toString(16).substring(2, 10),
        complete: false,
        task: action.payload,
      });
    },
    removeTodo(state, action) {
      state.todoList = state.todoList.filter(
        (task) => task.id !== action.payload
      );
    },
    completeTodo(state, action) {
      state.todoList = state.todoList.map((task) => {
        if (task.id === action.payload) {
          task.complete = true;
        }
        return task;
      });
    },
    editTodo(state, action) {
      state.todoList = state.todoList.map((task) => {
        if (task.id === action.payload.id) {
          task.task = action.payload.task;
        }
        return task;
      });
    },
  },
});

export default tasksSlice.reducer;
export const {addTodo, removeTodo, completeTodo, getTodo, editTodo} =
  tasksSlice.actions;
