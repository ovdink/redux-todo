import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from '../Todo-item';

import './TodoList.scss';

const TodoList = ({ todoList, removeTodo, completeTodo }) => {
  const elements = todoList.map(({ id, label, isCompleted }) => {
    return (
      <TodoItem
        key={id}
        id={id}
        label={label}
        isCompleted={isCompleted}
        removeTodo={removeTodo}
        completeTodo={completeTodo}
      />
    );
  });

  return <ul className="todo-list list-group">{elements}</ul>;
};

TodoList.propTypes = {
  todoList: PropTypes.array,
  removeTodo: PropTypes.func,
  completeTodo: PropTypes.func
};

TodoList.defaultProps = {
  todoList: [],
  removeTodo: () => {},
  completeTodo: () => {}
};

export default TodoList;
