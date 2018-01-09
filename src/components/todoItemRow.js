import React from 'react';

class TodoItemRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false
    };
  }

  render() {
    const todo = this.props.todo
    const isCompleted = this.state.completed ? 'X' : null;    
      return (
      <tr>
        <td>{ todo.description }</td>
        <td>{ isCompleted }</td>
      </tr>
    )
  }
}

export default TodoItemRow;