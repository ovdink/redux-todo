import React from 'react';

const TodoItem = ({ label }) => {
  return (
    <div className="d-flex">
      <p>{label}</p>
      <button className="">edit</button>
      <button>delete</button>
      <button>important</button>
    </div>
  );
};

export default TodoItem;
