import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from '../Todo-item';
// import store from '../../store';
// import { todoAdd } from '../../actions';

import './TodoList.scss';

// console.log(store.getState());

// store.dispatch(todoAdd('Learn React'));
// store.dispatch(todoAdd('Learn Redux'));

// const todos = store.getState();

const TodoList = ({ todoList }) => {
  const elements = todoList.map(({ id, label, isCompleted }) => {
    return (
      <li key={id}>
        <TodoItem label={label} isCompleted={isCompleted} />
      </li>
    );
  });

  return <ul className="todo-list list-group">{elements}</ul>;
};

TodoList.propTypes = {
  todoList: PropTypes.array
};

TodoList.defaultProps = {
  todoList: []
};

export default TodoList;
