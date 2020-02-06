// const todosLoaded = (newTodos) => {
//   return {
//     type: 'FETCH_TODOS_SUCCESS',
//     payload: newTodos
//   };
// };

// const todosRequested = () => {
//   return {
//     type: 'FETCH_TODOS_REQUEST'
//   };
// };

// const todosError = (error) => {
//   return {
//     type: 'FETCH_TODOS_FAILURE',
//     payload: error
//   };
// };

// const fetchTodos = (todoListService, dispatch) => () => {
//   dispatch(todosRequested());
// };

let nextId = 0;

const todoAdd = (label) => {
  return {
    type: 'ADD_TODO',
    payload: { id: nextId++, label, completed: false }
  };
};

export { todoAdd };
