export {};

// Tema 3: tipos primitivos.
const materia: string = "Programación";
const cantidadClases: number = 12;
const cursadaActiva: boolean = true;
console.log("Tema 3 - Tipos básicos");
console.log("Materia:", materia);
console.log("Clases:", cantidadClases);
console.log("¿Está activa?:", cursadaActiva);

// Array tipado: solo admite números.
const calificaciones: number[] = [7, 8, 9];
console.log("Calificaciones:", calificaciones);

// Unión: el identificador puede ser texto o número.
let identificador: string | number = "AL-20";
console.log("Identificador como texto:", identificador);
identificador = 20;
console.log("Identificador como número:", identificador);

// Es mejor evitar any cuando podemos usar tipos específicos.
// unknown exige verificar el tipo antes de utilizar su valor.
const datoExterno: unknown = "Ejemplo";
if (typeof datoExterno === "string") {
  console.log("Dato verificado:", datoExterno.toUpperCase());
}
