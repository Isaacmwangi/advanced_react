import React, { useState, useReducer } from 'react';
import Todo from './Todo';
import { ACTIONS } from '../0.useReducer/actions/actions';
import { todoReducer } from '../0.useReducer/reducers/todoReducer';

function Todos() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (name.trim() === '') return; // Basic validation
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name } });
    setName('');
  }

  return (
    <div className="todos">
      <div className='todos__content'>
        <h2>My todo app</h2>
        <div className="todos__forms">
          <form className="todos__form" onSubmit={handleSubmit} >
            <input
              className="todos__input"
              value={name}
              placeholder="Add todo"
              onChange={e => setName(e.target.value)}
            />
          </form>
          <button className='todos__add__btn' onClick={handleSubmit}>
            Create
          </button>
        </div>
        <div className="todos__todo">
          {todos.map(todo => (
            <Todo key={todo.id} todo={todo} dispatch={dispatch} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todos;
