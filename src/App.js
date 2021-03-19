import React, {useState} from 'react'
import Card from './componentes/Card';
import Contador from './componentes/Contador';
import './App.css';

function App() {

  const [mostrarTarjeta, setMostrarTarjeta] = useState(true)
  // const handleClickBorrar = () => {
  //   // borrar todos
  // }

  const borrarTarjeta = () => {
    setMostrarTarjeta(false)
  }

  return (
    <div className="App">
      {/* <Contador nombre="Contador 1" />
      <Contador nombre="Contador 2" />
      <Contador nombre="Contador 3" />

      <button onClick={handleClickBorrar}>Borrar todos</button> */}

      {mostrarTarjeta && 
        <Card nombre="1"  borrarTarjeta={borrarTarjeta} />
      }
 

    </div>
  );
}

export default App;

