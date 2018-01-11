import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './components/todoApp'

const destination = document.getElementById('root');           

var TODOS = [
  {description: 'buy cat food'},
  {description: 'make matcha latte'},
  {description: 'call best friend'}
];

ReactDOM.render(<TodoApp todos={TODOS} />, destination);