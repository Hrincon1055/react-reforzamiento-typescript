import React, { useState } from "react";
// Inicio
export const useCounter = (inicial: number = 10) => {
  // state
  const [valor, setValor] = useState(inicial);
  // funciones
  const acumular = (numero: number) => {
    setValor(valor + numero);
  };
  return {
    valor,
    acumular,
  };
};
