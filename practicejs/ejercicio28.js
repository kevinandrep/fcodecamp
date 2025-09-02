// Ejercicio

// Tienes la siguiente lista inicial:

const contactos = [
  { id: 1, nombre: "Ana", telefono: "123456", etiquetas: ["amiga"] },
  { id: 2, nombre: "Luis", telefono: "987654", etiquetas: ["trabajo"] },
  { id: 3, nombre: "Marta", telefono: "555555", etiquetas: ["familia"] },
];

// 👉 Debes hacer lo siguiente paso a paso:

// Agregar un nuevo contacto:

// { id: 4, nombre: "Carlos", telefono: "111222", etiquetas: ["vecino"] }
const nuevoContacto = [
  ...contactos,
  { id: 4, nombre: "Carlos", telefono: "111222", etiquetas: ["vecino"] },
];

// Cambiar el número de teléfono de Ana (id:1) a "999999".
const telfContacto = nuevoContacto.map((contact) =>
  contact.id === 1 ? { ...contact, telefono: "999999" } : contact
);

// Agregar la etiqueta "importante" al contacto con id=2 (Luis).
const impContacto = telfContacto.map((contact) =>
  contact.id === 2
    ? { ...contact, etiquetas: [...contact.etiquetas, "importante"] }
    : contact
);

// Eliminar el contacto con id=3 (Marta).
const delContact = impContacto.filter((contact) => contact.id !== 3);

// Mostrar el resultado final en consola.

console.log(delContact);
