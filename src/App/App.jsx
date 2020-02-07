import React from 'react';

import Todo from '../containers/Todo';

import './App.scss';

const App = () => {
  return (
    <div className="card m-2">
      <div className="app card-body">
        <Todo />
      </div>
    </div>
  );
};

export default App;
