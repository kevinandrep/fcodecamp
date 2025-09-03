// Ejercicio:

// Tienes este array de productos:

const productos = [
  { id: 1, nombre: "Laptop", precio: 1500, stock: 3 },
  { id: 2, nombre: "Mouse", precio: 25, stock: 50 },
  { id: 3, nombre: "Teclado", precio: 45, stock: 20 },
  { id: 4, nombre: "Monitor", precio: 300, stock: 10 },
];

// 👉 Debes hacer lo siguiente con un único reduce:

// Ignorar el producto con id=2.

// Si el producto tiene stock < 5, agregar una etiqueta agotándose: true.

// Calcular el valor total del inventario (precio * stock) y guardarlo en una propiedad valorTotal.

// Al final, obtener un objeto con dos claves:

// {
//   productosActualizados: [...], // con las transformaciones
//   valorInventario: X            // suma total del inventario
// }

const final = productos.reduce(
  (acc, prod) => {
    if (prod.id === 2) return acc;

    let actualizado = { ...prod };
    if (productos.stock < 5) actualizado.agotandose = true;
    const valor = actualizado.precio * actualizado.stock;
    acc.productosActualizados.push(actualizado);
    acc.valorInventario += valor;
    return acc;
  },
  { productosActualizados: [], valorInventario: 0 }
);

console.log(final);
