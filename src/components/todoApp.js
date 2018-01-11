import React from 'react';
import SearchBar from './searchBar';
import TodoItemList from './todoItemList'

class TodoApp extends React.Component {
  render() {
    return (
      <div className='todoListMain'>
        <SearchBar />
        <TodoItemList todos={this.props.todos} />
      </div>
    );
  }
}

export default TodoApp;