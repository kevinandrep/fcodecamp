// Ejercicio:

// Tienes este arreglo de pedidos:

const pedidos = [
  { id: 1, cliente: "Ana", total: 250, entregado: true },
  { id: 2, cliente: "Luis", total: 100, entregado: false },
  { id: 3, cliente: "Marta", total: 400, entregado: true },
  { id: 4, cliente: "Juan", total: 0, entregado: false },
];

// 👉 Con un único reduce, haz lo siguiente:

// Ignora el pedido con id=2.

// Si el total > 300, agrega una propiedad prioritario: true.

// Si el total === 0, marca entregado: true (se considera cancelado).

// Calcular la suma total de todos los pedidos.

// Al final, devuelve un objeto con esta forma:

const final = pedidos.reduce(
  (acc, pedido) => {
    // Ignora el pedido con id=2.

    if (pedido.id === 2) return acc;

    // Si el total > 300, agrega una propiedad prioritario: true.
    let pedidoActual = { ...pedido };
    if (pedido.total > 300) pedidoActual.prioritario = true;

    // Si el total === 0, marca entregado: true (se considera cancelado).
    if (pedido.total === 0) pedidoActual.entregado = true;

    // Calcular la suma total de todos los pedidos.
    acc.sumaTotal += pedidoActual.total;
    acc.pedidosActualizados.push(pedidoActual);

    return acc;
  },
  { pedidosActualizados: [], sumaTotal: 0 }
);

console.log(final);
