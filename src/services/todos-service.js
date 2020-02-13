// import data from '../api-data/todos.json';

// const timeout = () => {
//   setTimeout(() => {
//     return getTodosFake();
//   }, 0);
// };

const getTodosFake = async () => {
  const t = await import(
    /* webpackChunkName: "test" */
    '../api-data/todos.json'
  );

  return t.default;
};
const getTodosReal = async () => {
  const t = await import(
    /* webpackChunkName: "test" */
    '../api-data/todos.json'
  );
  return t.default;
};

export const getTodos = async () => {
  if (process.env.NODE_ENV === 'production') {
    return await getTodosReal();
  } else {
    return await getTodosFake();
  }
};
