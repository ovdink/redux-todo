import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  CHANGE_FILTER
} from '../constans/constans';

// without redux-thunk middleware method

const addTodo = (id, label, isCompleted) => (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: ADD_TODO,
      id,
      label,
      isCompleted
    });
  }, 1500);
};

//need create to service with acync actions

// const addTodo = (id, label, isCompleted) => {
//   return {
//     type: ADD_TODO,
//     id,
//     label,
//     isCompleted
//   };
// };

const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id
  };
};

const completeTodo = (id) => {
  return {
    type: COMPLETE_TODO,
    id
  };
};

// Фильтр

const changeFilter = (activeFilter) => {
  return {
    type: CHANGE_FILTER,
    activeFilter
  };
};

export { addTodo, deleteTodo, completeTodo, changeFilter };
