import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoInput from '../../components/Todo-input';
import TodoList from '../../components/Todo-list';
import Footer from '../../components/Footer';

import './Todo.scss';

class Todo extends Component {
  state = {
    activeFilter: 'all',
    inputText: ''
  };

  handleInputChange = ({ target: { value } }) => {
    console.log(value);
    this.setState({
      // inputText: value
    });
  };

  render() {
    const { activeFilter, inputText } = this.state;
    const todoList = [];
    console.log(this.props);
    return (
      <>
        <TodoInput onChange={this.handleInputChange} value={inputText} />
        <TodoList todoList={todoList} />
        <Footer amount={todoList.length} activeFilter={activeFilter} />
      </>
    );
  }
}

export default connect((state) => {
  console.log(state);
})(Todo);
