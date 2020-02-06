import React, { Component } from 'react';

import TodoInput from '../../components/Todo-input';
import TodoList from '../../components/Todo-list';
import Footer from '../../components/Footer';

import './Todo.scss';

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

export default class Todo extends Component {
  state = {
    activeFilter: 'all'
  };

  render() {
    const { activeFilter } = this.state;
    const todoList = TODOS;

    return (
      <>
        <TodoInput />
        <TodoList todoList={todoList} />
        <Footer amount={todoList.length} activeFilter={activeFilter} />
      </>
    );
  }
}
