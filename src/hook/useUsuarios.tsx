import React, { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/ReqRes";
import { ReqResListado, Usuario } from "../interfaces/reqRes";

export const useUsuarios = () => {
  // state
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  // ref
  const paginaRef = useRef(1);
  // effect
  useEffect(() => {
    cargarUsuarios();
  }, []);
  // funciones
  const cargarUsuarios = async () => {
    const resp = await reqResApi.get<ReqResListado>("/users", {
      params: {
        page: paginaRef.current,
      },
    });
    if (resp.data.data.length > 0) {
      setUsuarios(resp.data.data);
    } else {
      paginaRef.current--;
      window.alert("No hay mas registros");
    }
  };
  const paginaSiguiente = () => {
    paginaRef.current++;
    cargarUsuarios();
  };
  const paginaAnterior = () => {
    if (paginaRef.current > 1) {
      paginaRef.current--;
      cargarUsuarios();
    }
  };
  return {
    usuarios,
    paginaSiguiente,
    paginaAnterior,
  };
};
