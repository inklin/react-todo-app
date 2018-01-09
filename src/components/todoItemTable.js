import React from 'react';
import TodoItemRow from './todoItemRow';

class TodoItemTable extends React.Component {
  render() {
    const rows = [];    
      this.props.todos.forEach((todo) => {
      rows.push(
        <TodoItemRow todo={todo} key={todo.description}/>
      );
    })    
      return (
      <table>
        <thead>
          <tr>
            <th>todo</th>
            <th>completed</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

export default TodoItemTable