// Inicio

import { useCounter } from "../hook/useCounter";

export default function ContadorConHook() {
  // hooks
  const { valor, acumular } = useCounter(10);
  // render
  return (
    <>
      <h3>
        Contador con Hook: <small>{valor}</small>
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
