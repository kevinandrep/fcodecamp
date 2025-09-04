// 📌 Ejercicio – Pedidos de clientes

// Tienes este array de pedidos:

const pedidos = [
  {
    id: 1,
    cliente: "Carlos",
    items: [
      { producto: "Zapatos", precio: 200, cantidad: 2 },
      { producto: "Camisa", precio: 80, cantidad: 1 },
    ],
    entregado: true,
  },
  {
    id: 2,
    cliente: "Lucía",
    items: [
      { producto: "Bolso", precio: 500, cantidad: 1 },
      { producto: "Bufanda", precio: 50, cantidad: 3 },
    ],
    entregado: false,
  },
  {
    id: 3,
    cliente: "Miguel",
    items: [
      { producto: "Reloj", precio: 1200, cantidad: 1 },
      { producto: "Corbata", precio: 60, cantidad: 2 },
    ],
    entregado: true,
  },
];

// 👉 Con un único reduce, debes:

const final = pedidos.reduce(
  (acc, pedido) => {
    // Ignorar el pedido con id = 2.
    if (pedido.id === 2) return acc;

    // En cada item calcular subtotal = precio * cantidad.
    let copiaPedido = { ...pedido };

    copiaPedido.items = copiaPedido.items.map((item) => {
      return { ...item, subtotal: item.precio * item.cantidad };
    });

    // Calcular en cada pedido un campo totalPedido (suma de subtotales).
    copiaPedido.totalPedido = copiaPedido.items.reduce((sum, item) => {
      return (sum += item.subtotal);
    }, 0);

    // Si el totalPedido > 1000, marcar el pedido como vip: true.
    if (copiaPedido.totalPedido > 1000) copiaPedido.vip = true;

    // Acumular en totalEntregado la suma de todos los pedidos entregados.
    if (copiaPedido.entregado) acc.totalEntregado += copiaPedido.totalPedido;

    // Acumular en totalGeneral la suma de todos los pedidos (entregados o no).
    acc.totalGeneral += copiaPedido.totalPedido;

    // Guardar en pedidosProcesados los pedidos transformados.
    acc.pedidosProcesados.push(copiaPedido);
    return acc;
  },
  {
    pedidosProcesados: [],
    totalEntregado: 0,
    totalGeneral: 0,
  }
);

console.log(final);
