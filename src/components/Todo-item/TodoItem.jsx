import React from 'react';
import PropTypes from 'prop-types';

import './TodoItem.scss';

const TodoItem = ({ id, label, isCompleted, removeTodo, completeTodo }) => {
  return (
    <li className=" todo-item list-group-item d-flex justify-content-between">
      <i
        className={
          isCompleted
            ? 'todo-item__complete__active fa fa-check-circle fa-lg'
            : 'todo-item__complete far fa-circle fa-lg'
        }
        onClick={() => completeTodo(id)}
      />
      <span className={isCompleted ? 'completed text' : 'text'}>{label}</span>
      <i
        className="todo-item__delete fa fa-times fa-lg"
        onClick={() => removeTodo(id)}
      />
    </li>
  );
};

TodoItem.propTypes = {
  id: PropTypes.number,
  label: PropTypes.string,
  isCompleted: PropTypes.bool,
  removeTodo: PropTypes.func,
  completeTodo: PropTypes.func
};

TodoItem.defaultProps = {
  id: 0,
  label: '',
  isCompleted: false,
  removeTodo: () => {},
  completeTodo: () => {}
};

export default TodoItem;
