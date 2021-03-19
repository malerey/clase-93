import React, { useState } from 'react';

const Contador = ({ nombre }) => {

  const [contador, setContador] = useState(0)


  const handleClickMas = () => {
    console.log("hiciste click en el boton mas de ", nombre)
    setContador(contador + 1)
  }

  const handleClickMenos = () => {
    setContador(contador - 1)
  }

  console.log("Hola, soy", nombre)

  return (
    <div>
      <button onClick={handleClickMas}> + </button>
        <span> {contador} </span>
      <button onClick={handleClickMenos}> - </button>
    </div>
  )
}

export default Contador;
