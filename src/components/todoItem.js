import React from 'react';

class TodoItemRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: false
    };

    this.toggleCompletion = this.toggleCompletion.bind(this);
  }

  toggleCompletion(event) {
    this.setState({
      completed: !this.state.completed
    });
  }

  /* Todo: 
   * How to NOT set this conditional styling
   * based on component state this way? 
   */
  render() {
    const todo = this.props.todo
    const description = !this.state.completed ? <span>{ todo.description }</span> : <span class='completed'>{ todo.description }</span>

      return (
      <li onClick={this.toggleCompletion}>
        { description }
      </li>
    )
  }
}

export default TodoItemRow;