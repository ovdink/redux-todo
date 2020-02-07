import { ADD_TODO } from '../constans/constans';

const todoAdd = (id, label, isCompleted) => {
  return {
    type: ADD_TODO,
    id,
    label,
    isCompleted
  };
};

export { todoAdd };
