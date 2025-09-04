// 📌 Ejercicio – Ventas con productos

// Tienes este array:

const ventas = [
  {
    id: 1,
    vendedor: "Ana",
    productos: [
      { nombre: "Laptop", precio: 1000, cantidad: 1 },
      { nombre: "Mouse", precio: 50, cantidad: 2 },
    ],
    entregado: true,
  },
  {
    id: 2,
    vendedor: "Luis",
    productos: [
      { nombre: "Monitor", precio: 300, cantidad: 1 },
      { nombre: "Teclado", precio: 100, cantidad: 1 },
    ],
    entregado: false,
  },
  {
    id: 3,
    vendedor: "Marta",
    productos: [
      { nombre: "Laptop", precio: 1000, cantidad: 2 },
      { nombre: "Mouse", precio: 50, cantidad: 1 },
    ],
    entregado: true,
  },
];

// 👉 Con un único reduce, debes hacer lo siguiente:

const final = ventas.reduce(
  (acc, venta) => {
    // Ignorar la venta con id = 2.
    if (venta.id === 2) return acc;

    // Copia de la venta y cálculo de subtotales.
    let copiaVenta = { ...venta };
    copiaVenta.productos = copiaVenta.productos.map((prod) => {
      return { ...prod, subtotal: prod.precio * prod.cantidad };
    });

    // Total de la venta.
    copiaVenta.totalVenta = copiaVenta.productos.reduce((suma, prod) => {
      return (suma += prod.subtotal);
    }, 0);

    // Marcar premium si corresponde. > 1500
    if (copiaVenta.totalVenta > 1500) copiaVenta.premium = true;

    // Sumar en totalGeneral si fue entregada. y     // Guardar en el acumulador.
    acc.totalGeneral += copiaVenta.totalVenta;
    acc.ventasProcesadas.push(copiaVenta);

    return acc;
  },
  {
    ventasProcesadas: [],
    totalGeneral: 0,
  }
);

console.log(final);
