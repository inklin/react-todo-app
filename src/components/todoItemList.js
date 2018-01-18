import React from 'react';
import TodoItem from './todoItem';

class TodoItemList extends React.Component {
  constructor(props) {
    super(props);
  }

  createTodoItem = (item) => {
    return <TodoItem todo={item} key={item.description} />
  }

  render() {
    const todoItems = this.props.todos;
    const todoItemRows = todoItems.map(this.createTodoItem);
 
    return (
      <ul>
        {todoItemRows}
      </ul>
    )
  }
}

export default TodoItemList