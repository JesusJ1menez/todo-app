import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  // Usando el useContext ya no es necesario pasar las props al componente TodoCounter
  const { totalTodos, completedTodos } = React.useContext(TodoContext);

  return (
    <h2 className='TodoCounter'>
      Has completado {completedTodos} de {totalTodos} tareas por hacer
    </h2>
  );
}

export { TodoCounter };
