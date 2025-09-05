// 📌 Ejercicio – Supermercado

// Tienes este array de compras de clientes:

const compras = [
  {
    id: 1,
    cliente: "Carlos",
    productos: [
      { nombre: "Leche", precio: 5, cantidad: 4 },
      { nombre: "Pan", precio: 2, cantidad: 6 },
    ],
  },
  {
    id: 2,
    cliente: "Lucía",
    productos: [
      { nombre: "Arroz", precio: 3, cantidad: 10 },
      { nombre: "Aceite", precio: 12, cantidad: 2 },
    ],
  },
  {
    id: 3,
    cliente: "Marta",
    productos: [
      { nombre: "Queso", precio: 15, cantidad: 3 },
      { nombre: "Huevos", precio: 0.5, cantidad: 12 },
    ],
  },
];

// 👉 Con un único reduce, debes:
const final = compras.reduce(
  (acc, compra) => {
    // Calcular un campo subtotal en cada producto (precio * cantidad).
    let copiaCompra = { ...compra };
    copiaCompra.productos = copiaCompra.productos.map((producto) => {
      return { ...producto, subtotal: producto.precio * producto.cantidad };
    });
    // Calcular un campo totalCompra en cada cliente (suma de sus productos).
    copiaCompra.totalCompra = copiaCompra.productos.reduce(
      (total, producto) => {
        return (total += producto.subtotal);
      },
      0
    );
    // Si totalCompra > 40, marcar al cliente con descuento: true.
    if (copiaCompra.totalCompra > 40) copiaCompra.descuento = true;
    // Sumar en totalGeneral todas las compras de todos los clientes.
    acc.totalGeneral += copiaCompra.totalCompra;
    acc.comprasProcesadas.push(copiaCompra);
    return acc;
  },
  { comprasProcesadas: [], totalGeneral: 0 }
);

console.dir(final, { depth: null });
