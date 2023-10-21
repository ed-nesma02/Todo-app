import {ITask} from '../store/tasks/tasksReducer';

export const setLocalStorage = (name: string, list: ITask[]): void => {
  localStorage.setItem(name, JSON.stringify(list));
};

export const getLocalStorage = (name: string): ITask[] => {
  if (name) {
    const json = localStorage.getItem(name)
    if(json){
      return JSON.parse(json);
    }
  }
  return [];
};
