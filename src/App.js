import React, { useState } from "react";
import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

function App() {

  const [cantidad, setCantidad] = useState(0)

  const aumentar = () => {
    setCantidad(cantidad + 1)
  }


  return (
    <div className="App">
      <Cabecera cantidad={cantidad} />
      <Listado func={aumentar} />
    </div>
  );
}

export default App;