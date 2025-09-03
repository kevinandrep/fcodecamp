// Ejercicio:

// Tienes este arreglo inicial:

const usuarios = [
  { id: 1, nombre: "Ana", rol: "usuario", activo: true },
  { id: 2, nombre: "Luis", rol: "admin", activo: true },
  { id: 3, nombre: "Marta", rol: "usuario", activo: false },
];

// 👉 Debes hacer lo siguiente paso a paso:

// Agregar un nuevo usuario:

// { id: 4, nombre: "Pedro", rol: "usuario", activo: true }

// Cambiar el rol de Ana (id=1) a "admin".

// Marcar a Marta (id=3) como activa (activo: true).

// Eliminar a Luis (id=2).

const final = [
  ...usuarios,
  { id: 4, nombre: "Pedro", rol: "usuario", activo: true },
]
  .map((usuario) => {
    if (usuario.id === 1) return { ...usuario, rol: "admin" };
    if (usuario.id === 3) return { ...usuario, activo: true };
    return usuario;
  })
  .filter((usuario) => usuario.id !== 2);

console.log(final);
