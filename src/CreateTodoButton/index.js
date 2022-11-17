import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = () => {
    // Las funciones actualizadoras del estado pueden recibir el estado o una funcion. La funcion recibe el valor actual del estado.
    props.setOpenModal((prevState) => !prevState);
  };

  return (
    <button className='CreateTodoButton' onClick={onClickButton}>
      +
    </button>
  );
}

export { CreateTodoButton };
