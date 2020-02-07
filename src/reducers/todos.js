import { ADD_TODO } from '../constans/constans';

const TODOS = [
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
];

const todos = (state = TODOS, action) => {
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
    default:
      return state;
  }
};

export default todos;
