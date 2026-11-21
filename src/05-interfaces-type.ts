export {};

// Tema 5: interface describe la estructura de un objeto.
interface Producto {
  nombre: string;
  precio: number;
  descripcion?: string; // Propiedad opcional.
}

const producto: Producto = {
  nombre: "Cuaderno",
  precio: 3500,
  descripcion: "80 hojas"
};

const productoSinDescripcion: Producto = {
  nombre: "Lápiz",
  precio: 500
};

// type también permite declarar uniones de tipos.
type CodigoProducto = string | number;
const codigo: CodigoProducto = "ART-10";

type EstadoStock = "disponible" | "agotado";
const stock: EstadoStock = "disponible";

console.log("Tema 5 - Interfaces y type");
console.log("Producto:", producto);
console.log("Producto sin descripción:", productoSinDescripcion);
console.log("Código:", codigo);
console.log("Estado del stock:", stock);
