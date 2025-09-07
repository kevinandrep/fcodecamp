// 📌 Ejercicio – Clientes y compras

// Tienes este array de clientes con el monto de sus compras:

const clientes = [
  { id: 1, nombre: "Carlos", compras: [120, 80, 50] },
  { id: 2, nombre: "Ana", compras: [500, 300] },
  { id: 3, nombre: "Luis", compras: [40, 20, 15, 25] },
  { id: 4, nombre: "Marta", compras: [1000] },
];

// 👉 Con un único reduce, debes:
const final = clientes.reduce(
  (acc, cliente) => {
    // Calcular para cada cliente un campo totalGastado (la suma de sus compras).
    let nuevoCliente = { ...cliente };
    nuevoCliente.totalGastado = nuevoCliente.compras.reduce(
      (suma, compra) => (suma += compra),
      0
    );

    // Si el cliente gastó más de 500, añadirle la propiedad clienteVIP: true.
    if (nuevoCliente.totalGastado > 500) nuevoCliente.clienteVIP = true;

    // Guardar todos los clientes procesados en clientesProcesados.
    acc.clientesProcesados.push(nuevoCliente);

    // Calcular gastoTotalGeneral (la suma de lo que gastaron todos los clientes).
    acc.gastoTotalGeneral += nuevoCliente.totalGastado;

    // Guardar en clientesPorVIP un objeto con dos listas:
    // acc.clientesPorVIP[nuevoCliente.clienteVIP] =
    //   acc.clientesPorVIP[nuevoCliente.clienteVIP] || [];

    nuevoCliente.clienteVIP
      ? acc.clientesPorVIP["vip"].push(nuevoCliente)
      : acc.clientesPorVIP["noVip"].push(nuevoCliente);

    return acc;
    // vip: todos los clientes VIP.
    // noVip: los que no son VIP.
  },
  {
    clientesProcesados: [],
    clientesPorVIP: { vip: [], noVip: [] },
    gastoTotalGeneral: 0,
  }
);

console.dir(final, { depth: null });
