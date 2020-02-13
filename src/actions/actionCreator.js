import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  CHANGE_FILTER
} from '../constans/constans';

import { getTodos } from '../services/todos-service';

const fetchTodoTest = () => (dispatch) => {
  dispatch({
    type: 'set_loading',
    value: true
  });
  getTodos()
    .then((data) => {
      dispatch({
        type: 'set_data',
        value: [...data]
      });
    })
    .catch((e) => {
      dispatch({
        type: 'set_error',
        value: `error: ${e}`
      });
    })
    .finally(() => {
      dispatch({
        type: 'set_loading',
        value: false
      });
    });
};

// const addTodo = (id, label, isCompleted) => (dispatch) => {
//   setTimeout(() => {
//     dispatch({
//       type: ADD_TODO,
//       id,
//       label,
//       isCompleted
//     });
//   }, 1000);
// };

const addTodo = (id, label, isCompleted) => {
  return {
    type: ADD_TODO,
    id,
    label,
    isCompleted
  };
};

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

export { addTodo, deleteTodo, completeTodo, changeFilter, fetchTodoTest };
