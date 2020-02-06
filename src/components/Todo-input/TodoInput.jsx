import React from 'react';
import PropTypes from 'prop-types';

// import store from '../../store';
// import { connect } from 'react-redux';
// import { todoAdd } from '../../actions';

import './TodoInput.scss';

const TodoInput = ({ value, onChange }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const textArea = document.getElementsByClassName('add-todo__input')[0]
      .value;
    console.dir(textArea);

    // store.dispatch(todoAdd('Learn Redux'));
    // dispatch(todoAdd('rer'));
  };

  return (
    <form className="item-add-form d-flex" onSubmit={onSubmit}>
      <input
        type="text"
        className="add-todo__input form-control"
        placeholder="Введите задачу"
        onChange={onChange}
      />
      <button className="add-todo__btn btn btn-primary">Add</button>
    </form>
  );
};

TodoInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string
};

TodoInput.defaultProps = {
  onChange: () => {},
  value: ''
};

export default TodoInput;
