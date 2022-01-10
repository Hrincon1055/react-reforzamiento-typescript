import { useForm } from "../hook/useForm";

// Inicio
export const Formularios = () => {
  const { state, onChange } = useForm({
    email: "test@test.com",
    password: "123456",
  });
  // render
  return (
    <>
      <h3>Formularios</h3>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Email"
        value={state.email}
        onChange={(e) => onChange(e.target.value, "email")}
      />
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Password"
        value={state.password}
        onChange={(e) => onChange(e.target.value, "password")}
      />
      <code>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </code>
    </>
  );
};
