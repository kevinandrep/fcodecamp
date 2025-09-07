// 📌 Ejercicio – Productos y stock

// Tienes este array de productos en una tienda:

const productos = [
  { id: 1, nombre: "Laptop", precio: 1200, stock: 5, categoria: "Electrónica" },
  { id: 2, nombre: "Camisa", precio: 40, stock: 20, categoria: "Ropa" },
  { id: 3, nombre: "Silla", precio: 150, stock: 10, categoria: "Hogar" },
  {
    id: 4,
    nombre: "Teléfono",
    precio: 800,
    stock: 3,
    categoria: "Electrónica",
  },
  { id: 5, nombre: "Pantalón", precio: 60, stock: 15, categoria: "Ropa" },
];

// 👉 Con un único reduce, debes:
const final = productos.reduce(
  (acc, producto) => {
    // Calcular un campo valorTotal para cada producto (precio * stock).
    let copiaProducto = { ...producto };
    copiaProducto.valorTotal = copiaProducto.precio * copiaProducto.stock;

    // Si el stock < 5, marcar al producto con bajoStock: true.
    if (copiaProducto.stock < 5) copiaProducto.bajoStock = true;

    // Agrupar los productos por categoría en productosPorCategoria.
    acc.productosPorCategoria[copiaProducto.categoria] =
      acc.productosPorCategoria[copiaProducto.categoria] || [];
    acc.productosPorCategoria[copiaProducto.categoria].push(copiaProducto);

    // Calcular un totalInventario con la suma de todos los valorTotal.
    acc.totalInventario += copiaProducto.valorTotal;

    // Guardar todo en productosProcesados.
    acc.productosProcesados.push(copiaProducto);

    return acc;
  },
  {
    productosPorCategoria: {},
    productosProcesados: [],
    totalInventario: 0,
  }
);

console.dir(final, { depth: null });
