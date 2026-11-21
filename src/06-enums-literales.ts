export {};

// Tema 6: enum agrupa constantes con nombres.
enum EstadoPedido {
  Pendiente = "PENDIENTE",
  EnPreparacion = "EN_PREPARACION",
  Entregado = "ENTREGADO"
}

// Un tipo literal permite solo los valores indicados.
type MedioEntrega = "retiro" | "envio";

const estadoActual: EstadoPedido = EstadoPedido.EnPreparacion;
const medioSeleccionado: MedioEntrega = "retiro";

console.log("Tema 6 - Enums y tipos literales");
console.log("Estado del pedido:", estadoActual);
console.log("Medio de entrega:", medioSeleccionado);
console.log("Otro estado posible:", EstadoPedido.Entregado);
