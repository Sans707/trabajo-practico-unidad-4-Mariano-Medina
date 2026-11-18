export {};

// Tema 1: TypeScript agrega tipos a JavaScript.
// Los tipos permiten detectar errores antes de ejecutar el programa.
const lenguaje: string = "TypeScript";
const creador: string = "Microsoft";
const anioLanzamiento: number = 2012;

function presentarTecnologia(nombre: string, empresa: string): string {
  return `${nombre} fue desarrollado por ${empresa}.`;
}

console.log("Tema 1 - ¿Qué es TypeScript?");
console.log(presentarTecnologia(lenguaje, creador));
console.log("Año de lanzamiento:", anioLanzamiento);
// Ejemplo de error detectado: const cantidad: number = "diez";
