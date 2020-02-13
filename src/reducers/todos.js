import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from '../constans/constans';

import { load } from 'redux-localstorage-simple';

let TODOS = load({ namespace: 'todo-list' });

// const fetchTodos = async () => {
//   const res = await getTodos();
//   console.log(res);
//   return res;
//   // (data) => {
//   //   if (!data) {
//   //     console.log('invalid data format');
//   //     return;
//   //   }
//   //   console.log(data);
//   // };
// };

// const DATA = fetchTodos();

// console.log(DATA);

// if (!TODOS || !TODOS.todos || !TODOS.todos.length) {
//   // fetchTodos если ок ( с рандом.мас и сеттаймаут вернуть
//   // TODOS забив туда данные из todos-service, которые взяли данные из json)

//   // захардкоженый объект
//   TODOS = {
//     // todos: []
//     todos: [
//       {
//         id: 1,
//         label: 'Learn React',
//         isCompleted: true
//       },
//       {
//         id: 2,
//         label: 'Learn React-router',
//         isCompleted: true
//       },
//       {
//         id: 3,
//         label: 'Learn Redux',
//         isCompleted: true
//       },
//       {
//         id: 4,
//         label: 'Learn Redux-Thunk',
//         isCompleted: false
//       }
//     ]
//   };
// }

const todos = (state = TODOS.todos || [], action) => {
  const { id, label, isCompleted, type, value } = action;

  switch (type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id,
          label,
          isCompleted
        }
      ];

    case 'set_data':
      return [
        ...state,
        ...value.filter(
          (item) =>
            state.findIndex((currentItem) => currentItem.id === item.id) < 0
        )
      ];

    case DELETE_TODO:
      return [...state].filter((todo) => todo.id !== id);

    case COMPLETE_TODO:
      return [...state].map((todo) => {
        if (todo.id === id) todo.isCompleted = !todo.isCompleted;
        return todo;
      });

    default:
      return state;
  }
};

const loading = (state = false, action) => {
  const { type, value } = action;
  switch (type) {
    case 'set_loading':
      return value;
    default:
      return state;
  }
};

const error = (state = false, action) => {
  const { type, value } = action;
  switch (type) {
    case 'set_error':
      return value;
    default:
      return state;
  }
};

export { todos, error, loading };
