// 📌 Ejercicio – Clientes con pedidos

// Tienes este array:

const clientes = [
  {
    id: 1,
    nombre: "Ana",
    pedidos: [
      { producto: "Laptop", precio: 1000, cantidad: 1, entregado: true },
      { producto: "Mouse", precio: 50, cantidad: 2, entregado: true },
    ],
  },
  {
    id: 2,
    nombre: "Luis",
    pedidos: [
      { producto: "Monitor", precio: 300, cantidad: 1, entregado: false },
      { producto: "Teclado", precio: 100, cantidad: 1, entregado: false },
    ],
  },
  {
    id: 3,
    nombre: "Marta",
    pedidos: [
      { producto: "Laptop", precio: 1000, cantidad: 2, entregado: true },
      { producto: "Mouse", precio: 50, cantidad: 1, entregado: false },
    ],
  },
];

// 👉 Con un único reduce, debes hacer lo siguiente:

const final = clientes.reduce(
  (acc, cliente) => {
    // Ignorar al cliente con id = 2.
    if (cliente.id === 2) return acc;

    // A cada pedido calcularle un campo subtotal = precio * cantidad.
    let copiaCliente = { ...cliente };
    copiaCliente.pedidos = copiaCliente.pedidos.map((pedido) => {
      return { ...pedido, subtotal: pedido.precio * pedido.cantidad };
    });

    // A cada cliente calcularle un campo totalCliente (suma de los subtotales de sus pedidos).
    copiaCliente.totalCliente = copiaCliente.pedidos.reduce((sum, pedido) => {
      return (sum += pedido.subtotal);
    }, 0);

    // Si totalCliente > 1500, marcar al cliente como vip: true.
    if (copiaCliente.totalCliente > 1500) copiaCliente.vip = true;

    // Sumar en totalEntregado únicamente el subtotal de los pedidos entregados de todos los clientes.
    acc.totalEntregado += copiaCliente.pedidos.reduce((sum, pedido) => {
      if (pedido.entregado) {
        return sum + pedido.subtotal;
      } else {
        return sum;
      }
    }, 0);

    // El resultado final debe ser un objeto:
    acc.clientesProcesados.push(copiaCliente);
    return acc;
  },
  {
    clientesProcesados: [],
    totalEntregado: 0,
  }
);

console.log(final);
