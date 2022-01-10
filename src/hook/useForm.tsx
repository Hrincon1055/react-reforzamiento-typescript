import { useState } from "react";

// Inicio
export const useForm = <T extends Object>(formulario: T) => {
  const [state, setState] = useState(formulario);
  // funciones
  const onChange = (value: string, campo: keyof T): void => {
    setState({
      ...state,
      [campo]: value,
    });
  };
  return {
    state,
    onChange,
  };
};
