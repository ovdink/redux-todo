import data from '../api-data/todos.json';

export const getTodos = () => {
  // console.log(data);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.8) reject(new Error('data error!'));
      else resolve(data);
    }, 1000);
  });
};
