import React from 'react';
import PropTypes from 'prop-types';

import './TodoInput.scss';

const TodoInput = ({ onButtonPress, onChange, value }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    onButtonPress();
  };

  return (
    <form className="item-add-form top-panel d-flex mb-3" onSubmit={onSubmit}>
      <input
        type="text"
        className="add-todo__input form-control mr-2"
        placeholder="Введите задачу"
        onChange={onChange}
        value={value}
      />
      <button className="add-todo__btn btn btn-primary">Добавить</button>
    </form>
  );
};

TodoInput.propTypes = {
  onChange: PropTypes.func,
  onButtonPress: PropTypes.func,
  value: PropTypes.string
};

TodoInput.defaultProps = {
  onChange: () => {},
  onButtonPress: () => {},
  value: ''
};

export default TodoInput;
