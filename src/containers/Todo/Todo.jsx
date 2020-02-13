import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  addTodo,
  deleteTodo,
  completeTodo,
  changeFilter,
  fetchTodoTest
} from '../../actions';

import TodoInput from '../../components/Todo-input';
import TodoList from '../../components/Todo-list';
import Footer from '../../components/Footer';

import './Todo.scss';

class Todo extends Component {
  state = {
    inputText: ''
  };

  componentDidMount = () => {
    this.props.fetchTodoTest();
  };

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      inputText: value
    });
  };

  addTodoInForm = () => {
    console.log('ADDED!');
    const { inputText } = this.state;

    if (inputText.length >= 3) {
      const { addTodo } = this.props;

      addTodo(new Date().getTime(), inputText, false);

      this.setState({
        inputText: ''
      });
    } else alert('Ваша задача составляет меньше 3 символов!');
  };

  filterTodos = (todos, activeFilter) => {
    switch (activeFilter) {
      case 'completed':
        return todos.filter((todo) => todo.isCompleted);

      case 'active':
        return todos.filter((todo) => !todo.isCompleted);

      default:
        return todos;
    }
  };

  getActiveTodosCounter = (todos) =>
    todos.filter((todo) => !todo.isCompleted).length;

  render() {
    const { inputText } = this.state;
    const {
      todos,
      deleteTodo,
      completeTodo,
      filter,
      changeFilter,
      loading
    } = this.props;
    const filteredTodos = this.filterTodos(todos, filter);
    const todosCounter = this.getActiveTodosCounter(todos);

    return (
      <>
        <TodoInput
          onButtonPress={this.addTodoInForm}
          onChange={this.handleInputChange}
          value={inputText}
        />
        <TodoList
          todoList={filteredTodos}
          removeTodo={deleteTodo}
          completeTodo={completeTodo}
        />
        {loading.toString()}
        <Footer
          amount={todosCounter}
          activeFilter={filter}
          changeFilter={changeFilter}
        />
      </>
    );
  }
}

export default connect(
  ({ todos, filter, loading }) => ({ todos, filter, loading }),
  {
    addTodo,
    fetchTodoTest,
    deleteTodo,
    completeTodo,
    changeFilter
  }
)(Todo);

// export default connect(
//   (state) => ({
//     todos: state.todos,
//     filter: state.filter
//   }),
//   { addTodo, deleteTodo, completeTodo, changeFilter }
// )(Todo);
