// 📝 Ejercicio:

// Tienes este inventario de productos:

// const inventario = [
//   { id: 1, nombre: "Laptop", stock: 5, categorias: ["tecnología", "computo"] },
//   { id: 2, nombre: "Mouse", stock: 10, categorias: ["tecnología", "accesorios"] },
//   { id: 3, nombre: "Teclado", stock: 8, categorias: ["tecnología", "accesorios"] },
// ];

// 👉 Haz lo siguiente sin mutar el array original:

// Agregar un producto nuevo:
// { id: 4, nombre: "Auriculares", stock: 15, categorias: ["audio", "tecnología"] }

// Incrementar en +5 el stock de la Laptop (id: 1).

// Agregar la categoría "oficina" al producto con id: 3 (Teclado).

// Eliminar el producto con id: 2 (Mouse).

const inventario = [
  { id: 1, nombre: "Laptop", stock: 5, categorias: ["tecnología", "computo"] },
  {
    id: 2,
    nombre: "Mouse",
    stock: 10,
    categorias: ["tecnología", "accesorios"],
  },
  {
    id: 3,
    nombre: "Teclado",
    stock: 8,
    categorias: ["tecnología", "accesorios"],
  },
];
// Agregar un producto nuevo:
// { id: 4, nombre: "Auriculares", stock: 15, categorias: ["audio", "tecnología"] }
const prodAdd = [
  ...inventario,
  {
    id: 4,
    nombre: "Auriculares",
    stock: 15,
    categorias: ["audio", "tecnología"],
  },
];

// Incrementar en +5 el stock de la Laptop (id: 1).
const prodStock = prodAdd.map((prod) =>
  prod.id === 1 ? { ...prod, stock: prod.id + 56 } : prod
);

// Agregar la categoría "oficina" al producto con id: 3 (Teclado).
const prodOf = prodStock.map((prod) => {
  return prod.id === 3
    ? { ...prod, categorias: [...prod.categorias, "oficina"] }
    : prod;
});

// Eliminar el producto con id: 2 (Mouse).
const prodFinal = prodOf.filter((prod) => prod.id !== 2);

console.log(prodFinal);
