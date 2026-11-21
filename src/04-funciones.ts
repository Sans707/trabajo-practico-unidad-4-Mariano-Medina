export {};

// Tema 4: parámetros con tipo y retorno declarado.
function calcularPromedio(nota1: number, nota2: number): number {
  return (nota1 + nota2) / 2;
}

// El apellido es opcional: puede omitirse.
function presentarAlumno(nombre: string, apellido?: string): string {
  return apellido ? `${nombre} ${apellido}` : nombre;
}

// El segundo parámetro tiene un valor por defecto.
function repetirMensaje(mensaje: string, veces: number = 2): string {
  return Array(veces).fill(mensaje).join(" - ");
}

console.log("Tema 4 - Funciones");
console.log("Promedio:", calcularPromedio(8, 10));
console.log("Alumno:", presentarAlumno("Lucía"));
console.log("Alumno completo:", presentarAlumno("Lucía", "Pérez"));
console.log("Repetición por defecto:", repetirMensaje("Hola"));
console.log("Repetición personalizada:", repetirMensaje("TS", 3));
