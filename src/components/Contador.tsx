// Inicio

import { useState } from "react";

export default function Contador() {
  // state
  const [valor, setValor] = useState(0);
  // funciones
  const acumular = (numero: number) => {
    setValor(valor + numero);
  };
  // render
  return (
    <>
      <h3>
        Contador: <small>{valor}</small>
      </h3>
      <button className="btn btn-primary" onClick={() => acumular(1)}>
        +1
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={() => acumular(-1)}>
        -1
      </button>
    </>
  );
}
