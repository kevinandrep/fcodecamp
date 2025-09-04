// Ejercicio 📝

// Tienes este array inicial de productos:

const productos = [
  { id: 1, nombre: "Laptop", stock: 5, etiquetas: ["tecnología"] },
  { id: 2, nombre: "Silla", stock: 10, etiquetas: ["muebles"] },
  { id: 3, nombre: "Auriculares", stock: 2, etiquetas: ["audio"] },
];

// 👉 Debes realizar los siguientes pasos en orden:

// Agregar un nuevo producto:

// { id: 4, nombre: "Mesa", stock: 3, etiquetas: ["muebles"] }

// Incrementar en +5 el stock de la Laptop (id=1).

// Agregar la etiqueta "oferta" al producto con id=3 (Auriculares).

// Eliminar el producto con id=2 (Silla).

const final = [
  ...productos,
  { id: 4, nombre: "Mesa", stock: 3, etiquetas: ["muebles"] },
]
  .map((producto) => {
    if (producto.id === 1) return { ...producto, stock: producto.stock + 5 };
    if (producto.id === 3)
      return { ...producto, etiquetas: [...producto.etiquetas, "oferta"] };
    return producto;
  })
  .filter((producto) => producto.id !== 2);

console.log(final);
