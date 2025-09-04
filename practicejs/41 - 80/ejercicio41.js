// 📌 Ejercicio – Ventas

// Tienes este array de ventas:

const ventas = [
  { id: 1, vendedor: "Ana", monto: 1200, entregado: true },
  { id: 2, vendedor: "Luis", monto: 0, entregado: false },
  { id: 3, vendedor: "Marta", monto: 800, entregado: true },
  { id: 4, vendedor: "Pedro", monto: 1500, entregado: false },
];

// 👉 Debes hacer lo siguiente con un único reduce:

const final = ventas.reduce(
  (acc, venta) => {
    // Ignorar la venta con id=2.

    if (venta.id === 2) return acc;

    // Si el monto > 1000, agrega una propiedad premium: true.
    let ventaCopia = { ...venta };
    if (ventaCopia.monto > 1000) ventaCopia.premium = true;

    // Si entregado === false, agrega una propiedad pendiente: true.
    if (!ventaCopia.entregado) ventaCopia.pendiente = true;

    // Calcular el monto total vendido (totalVentas) solo de las ventas entregadas.
    if (ventaCopia.entregado) {
      acc.totalVentas += ventaCopia.monto;
    }

    acc.ventasActualizadas.push(ventaCopia);

    // El resultado final debe ser un objeto:
    return acc;
  },
  { ventasActualizadas: [], totalVentas: 0 }
);

console.log(final);
