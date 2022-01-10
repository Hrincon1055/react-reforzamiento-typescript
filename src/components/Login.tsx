import React, { useEffect, useReducer } from "react";
import { act } from "react-dom/test-utils";
interface AuthState {
  validando: boolean;
  token: string | null;
  username: string;
  nombre: string;
}
const initialState: AuthState = {
  validando: true,
  token: null,
  username: "",
  nombre: "",
};
type LoginPayload = {
  username: string;
  nombre: string;
};
type AuthAction = { type: "logout" } | { type: "login"; payload: LoginPayload };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        validando: false,
        token: null,
        username: "",
        nombre: "",
      };
    case "login":
      return {
        validando: false,
        token: "abc123",
        username: action.payload.username,
        nombre: action.payload.nombre,
      };
    default:
      return state;
  }
};
// Inicio
export default function Login() {
  // reducer
  const [{ validando, token, username, nombre }, dispatch] = useReducer(
    authReducer,
    initialState
  );
  // effect
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);
  // funciones
  const login = () => {
    dispatch({ type: "login", payload: { nombre: "henry", username: "HR" } });
  };
  const logout = () => {
    dispatch({ type: "logout" });
  };
  // render
  if (validando) {
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-info">Validando...</div>
      </>
    );
  }
  return (
    <>
      <h3>Login</h3>
      {token ? (
        <div className="alert alert-success">Autenticado como: {nombre}</div>
      ) : (
        <div className="alert alert-danger">No autenticado...</div>
      )}
      {token ? (
        <button className="btn btn-danger" onClick={logout}>
          Logout
        </button>
      ) : (
        <button className="btn btn-primary" onClick={login}>
          Login
        </button>
      )}
    </>
  );
}
