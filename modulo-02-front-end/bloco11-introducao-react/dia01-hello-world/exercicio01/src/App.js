import './App.css';
import React from 'react';


const Task = (value) => {
  return (
    <li>{value}</li>
  )
}

const tasks = ['Acordar', 'Escovar os dentes', 'Fazer café', 'Bater o ponto'];

class App extends React.Component {
  render () {
    return (
      <ul>{ tasks.map(task => Task(task)) }</ul>
    )
  }
}


export default App;
