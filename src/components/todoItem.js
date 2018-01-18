import React from 'react';

class TodoItemRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false
    };
  }

  toggleCompletion = (event) => {
    this.setState({
      completed: !this.state.completed
    });
  }

  render() {
    const todo = this.props.todo
    const description = !this.state.completed ? <span>{ todo }</span> : <span class='completed'>{ todo }</span>

      return (
      <li onClick={this.toggleCompletion}>
        { description }
      </li>
    )
  }
}

export default TodoItemRow;