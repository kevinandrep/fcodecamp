// 📌 Ejercicio – Inventario de tienda

// Tienes este array de productos vendidos:

const ventas = [
  {
    id: 1,
    producto: "Laptop",
    categoria: "Electrónica",
    precio: 1200,
    cantidad: 1,
  },
  { id: 2, producto: "Camiseta", categoria: "Ropa", precio: 30, cantidad: 4 },
  {
    id: 3,
    producto: "Teléfono",
    categoria: "Electrónica",
    precio: 800,
    cantidad: 2,
  },
  { id: 4, producto: "Zapatos", categoria: "Ropa", precio: 60, cantidad: 1 },
  { id: 5, producto: "Silla", categoria: "Hogar", precio: 150, cantidad: 3 },
];

// 👉 Con un único reduce, debes:
const final = ventas.reduce(
  (acc, venta) => {
    // Calcular un campo subtotal en cada venta (precio * cantidad).
    venta.subtotal = venta.precio * venta.cantidad;

    // Agrupar las ventas en ventasPorCategoria, donde cada clave es una categoría y contiene un array con las ventas de esa categoría.
    acc.ventasPorCategoria[venta.categoria] =
      acc.ventasPorCategoria[venta.categoria] || [];

    acc.ventasPorCategoria[venta.categoria].push(venta);

    // Calcular totalPorCategoria, sumando los subtotales de cada categoría.
    acc.totalPorCategoria[venta.categoria] +=
      acc.ventasPorCategoria[venta.categoria] || venta.subtotal;

    // Calcular un totalGeneral con la suma de todas las ventas.
    acc.totalGeneral += venta.subtotal;
    // Si un subtotal > 1000, marcar esa venta con alta: true.
    if (venta.subtotal > 1000) venta.alta = true;
    return acc;
  },
  {
    ventasPorCategoria: { Electrónica: [], Ropa: [], Hogar: [] },
    totalPorCategoria: { Electrónica: 0, Ropa: 0, Hogar: 0 },
    totalGeneral: 0,
  }
);

console.dir(final, { depth: null });
