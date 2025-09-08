// 📌 Ejercicio – Tienda online y pedidos

// Tienes este array de pedidos:

const pedidos = [
  { id: 1, cliente: "Ana", productos: [100, 200, 50] },
  { id: 2, cliente: "Luis", productos: [300, 150] },
  { id: 3, cliente: "Marta", productos: [500, 400, 100] },
  { id: 4, cliente: "Pedro", productos: [50] },
];

// 👉 Con un único reduce, debes:
const final = pedidos.reduce(
  (acc, pedido) => {
    // A cada pedido calcularle un campo totalPedido (la suma de los precios de sus productos).
    let copiaPedido = { ...pedido };
    copiaPedido.totalPedido = copiaPedido.productos.reduce(
      (suma, prod) => (suma += prod),
      0
    );

    // Si el total del pedido es mayor a 400, marcarlo como pedidoGrande: true.
    if (copiaPedido.totalPedido > 400) copiaPedido.pedidoGrande = true;

    // Guardar todos los pedidos procesados en pedidosProcesados.
    acc.pedidosProcesados.push(copiaPedido);

    // Calcular totalVentas, que es la suma de todos los pedidos.
    acc.totalVentas += copiaPedido.totalPedido;

    // Clasificar los pedidos en grandes y pequeños dentro de pedidosPorTipo.
    copiaPedido.pedidoGrande
      ? acc.pedidosPorTipo["grandes"].push(copiaPedido)
      : acc.pedidosPorTipo["pequenos"].push(copiaPedido);
    return acc;
  },
  {
    pedidosProcesados: [],
    totalVentas: 0,
    pedidosPorTipo: { grandes: [], pequenos: [] },
  }
);

console.dir(final, { depth: null });
