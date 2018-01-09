import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './components/todoList'

const destination = document.getElementById('root');           

var TODOS = [
  {description: 'buy cat food'},
  {description: 'make matcha latte'},
  {description: 'call best friend'}
];

ReactDOM.render(<TodoList todos={TODOS} />, destination);