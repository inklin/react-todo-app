import React from 'react';
import SearchBar from './searchBar';
import TodoItemTable from './todoItemTable'

class TodoList extends React.Component {
  render() {
    return (
      <div className='todoListMain'>
        <SearchBar />
        <TodoItemTable todos={this.props.todos} />
      </div>
    );
  }
}

export default TodoList;