import React from 'react';
import PropTypes from 'prop-types';

// import store from '../../store';
// import { connect } from 'react-redux';
import { todoAdd } from '../../actions';

import './TodoInput.scss';

const TodoInput = ({ value, onChange }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    // const textArea = document.getElementsByClassName('add-todo__input')[0]
    //   .value;
    // console.dir(textArea);
    console.log(value);

    // store.dispatch(todoAdd('Learn Redux'));
    // dispatch(todoAdd('rer'));
  };

  return (
    <form className="item-add-form top-panel d-flex mb-3" onSubmit={onSubmit}>
      <input
        type="text"
        className="add-todo__input form-control mr-2"
        placeholder="Введите задачу"
        onChange={onChange}
      />
      <button className="add-todo__btn btn btn-primary">Добавить</button>
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
