import React from 'react';
import TodoItemList from './todoItemList'

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({
      description: event.target.value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      description: '',
      items: [...this.state.items, this.state.description]
    })
  }

  render() {
    return (
      <form className='todoListMain' onSubmit={this.onSubmit}>
        <input value={this.state.description} onChange={this.onChange} />
        <button>Add</button>
        <TodoItemList todos={this.state.items} />
      </form>
    );
  }
}

export default TodoApp;