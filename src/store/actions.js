import { ADD_TASK, DELETE_TASK, DID_TASK } from './types';

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});
export const deleteTask = (task) => ({
  type: DELETE_TASK,
  payload: task,
});
export const didTask = (id) => ({
  type: DID_TASK,
  payload: id,
});
