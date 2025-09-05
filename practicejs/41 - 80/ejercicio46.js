// 📌 Ejercicio – Ventas por categorías

// Tienes este array de ventas:

const ventas = [
  {
    id: 1,
    categoria: "Electrónica",
    producto: "Laptop",
    precio: 1200,
    cantidad: 1,
  },
  { id: 2, categoria: "Ropa", producto: "Camisa", precio: 50, cantidad: 3 },
  {
    id: 3,
    categoria: "Electrónica",
    producto: "Auriculares",
    precio: 200,
    cantidad: 2,
  },
  { id: 4, categoria: "Hogar", producto: "Silla", precio: 150, cantidad: 4 },
  { id: 5, categoria: "Ropa", producto: "Pantalón", precio: 80, cantidad: 2 },
];

// 👉 Con un único reduce, debes:

const final = ventas.reduce(
  (acc, venta) => {
    // Calcular un campo subtotal = precio * cantidad para cada venta.
    let copiaVenta = { ...venta };

    copiaVenta.subTotal = copiaVenta.precio * copiaVenta.cantidad;

    // Agrupar las ventas en ventasPorCategoria, donde cada clave es una categoría y su valor es un array de ventas procesadas.
    acc.ventasPorCategoria[copiaVenta.categoria] =
      acc.ventasPorCategoria[copiaVenta.categoria] || [];

    acc.ventasPorCategoria[copiaVenta.categoria].push(copiaVenta);

    // Acumular en totalPorCategoria la suma de los subtotales de cada categoría.
    acc.totalPorCategoria[copiaVenta.categoria] +=
      copiaVenta.precio * copiaVenta.cantidad;

    // Calcular un totalGeneral con la suma de todas las ventas.
    acc.totalGeneral += copiaVenta.subTotal;

    return acc;
  },
  {
    ventasPorCategoria: {
      Electrónica: [],
      Ropa: [],
      Hogar: [],
    },
    totalPorCategoria: {
      Electrónica: 0,
      Ropa: 0,
      Hogar: 0,
    },
    totalGeneral: 0,
  }
);

console.dir(final, { depth: null });
