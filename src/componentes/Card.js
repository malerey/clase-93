import React, {useState} from 'react';

const Card = ({ nombre, borrarTarjeta, saludar }) => {

  const [mostrarTitulo, setMostrarTitulo] = useState(true)

  const handleClickBorrarTitulo = () => {
    setMostrarTitulo(false)
  }

  const handleClickMostrarTitulo = () => {
    setMostrarTitulo(true)
  }

  return(
    <article>

    <button onClick={handleClickBorrarTitulo}>Borrar el titulo de esta tarjeta</button>
    <button onClick={handleClickMostrarTitulo}>Mostrar el titulo de esta tarjeta</button>
      
      <button onClick={() => saludar("desde card")}>Saludar desde adentro del componente</button>
      {mostrarTitulo && <h2>Hola soy la tarjeta {nombre}</h2>}
    </article>
  )
}

export default Card;
