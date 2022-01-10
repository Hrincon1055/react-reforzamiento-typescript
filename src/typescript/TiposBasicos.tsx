// Inicio

export default function TiposBasicos() {
  const nombre: string = "Henry";
  const edad: number = 35;
  const isActive: boolean = true;
  const poderes: string[] = ["Velocidad", "Volar", "Respirar Bajo el agua"];
  return (
    <>
      <h3>Tipos Basicos</h3>
      {nombre}, {edad}, {isActive ? "activo" : "no activo"}
      <br />
      {poderes.join(", ")}
    </>
  );
}
