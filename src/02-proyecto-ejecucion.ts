export {};

// Tema 2: Este archivo se puede ejecutar con tsx o compilar con tsc.
// tsc comprueba tipos y genera JavaScript en dist/.
// node ejecuta el JavaScript obtenido después de compilar.
const pasos: string[] = [
  "Instalar dependencias con npm install",
  "Comprobar tipos con npm run check",
  "Ejecutar un ejemplo con npm run tema2",
  "Compilar con npm run build"
];

console.log("Tema 2 - Proyecto TypeScript");
pasos.forEach((paso: string, indice: number) => {
  console.log(`${indice + 1}. ${paso}`);
});
console.log("Configuración principal: tsconfig.json");
