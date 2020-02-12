import {
  TODOS_LOADED,
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO
} from '../constans/constans';
import { getTodos } from '../services/todos-service';

import { load } from 'redux-localstorage-simple';

let TODOS = load({ namespace: 'todo-list' });

const fetchTodos = () => {
  getTodos().then((data) => {
    return data;
  });
};

if (!TODOS || !TODOS.todos || !TODOS.todos.length) {
  // fetchTodos если ок ( с рандом.мас и сеттаймаут вернуть
  // TODOS забив туда данные из todos-service, которые взяли данные из json)

  // захардкоженый объект
  TODOS = {
    // todos: []
    todos: [
      {
        id: 1,
        label: 'Learn React',
        isCompleted: true
      },
      {
        id: 2,
        label: 'Learn React-router',
        isCompleted: true
      },
      {
        id: 3,
        label: 'Learn Redux',
        isCompleted: true
      },
      {
        id: 4,
        label: 'Learn Redux-Thunk',
        isCompleted: false
      }
    ]
  };
}

const todos = (state = TODOS.todos, action) => {
  const { id, label, isCompleted, type } = action;

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

export default todos;
