interface Persona {
  nombreCompleto: string;
  edad: number;
  direccion: Direccion;
}
interface Direccion {
  pais: string;
  casaNo: number;
}
// Inicio

export default function ObjetosLiterales() {
  const persona: Persona = {
    nombreCompleto: "henry",
    edad: 35,
    direccion: {
      pais: "Colombia",
      casaNo: 123,
    },
  };
  return (
    <div>
      <h3>Ojetos Literales</h3>
      <code>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
    </div>
  );
}
