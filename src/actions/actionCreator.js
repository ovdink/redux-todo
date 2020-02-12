import {
  TODOS_LOADED,
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  CHANGE_FILTER
} from '../constans/constans';

// unused
const todosLoaded = (newTodos) => {
  return {
    type: TODOS_LOADED,
    newTodos
  };
};

const todosRequested = () => {
  return {
    type: 'FETCH_TODOS_REQUEST'
  };
};

const todosError = (error) => {
  return {
    type: 'FETCH_TODOS_FAILURE',
    error
  };
};

const fetchBooks = (todosService) => () => (dispatch) => {
  dispatch(todosRequested());
  todosService
    .getTodos()
    .then((data) => dispatch(todosLoaded(data)))
    .catch((err) => dispatch(todosError(err)));
};
// \unused

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

export { todosLoaded, addTodo, deleteTodo, completeTodo, changeFilter };
