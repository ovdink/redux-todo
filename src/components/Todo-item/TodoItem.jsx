import React from 'react';
import PropTypes from 'prop-types';

import './TodoItem.scss';

const TodoItem = ({ label, isCompleted }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <i
        className={
          isCompleted ? 'fa fa-check-circle fa-lg' : 'fa fa-circle fa-lg'
        }
      />
      <span className={isCompleted ? 'completed text' : 'text'}>{label}</span>
      <i className="fa fa-times fa-lg" />
    </li>
  );
};

TodoItem.propTypes = {
  label: PropTypes.string,
  isCompleted: PropTypes.bool
};

TodoItem.defaultProps = {
  label: '',
  isCompleted: false
};

export default TodoItem;
