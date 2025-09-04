// Ejercicio: Gestión de tareas

// Tienes un array inicial de tareas:

const tareas = [
  {
    id: 1,
    titulo: "Estudiar React",
    completada: false,
    etiquetas: ["estudio"],
  },
  { id: 2, titulo: "Ir al gimnasio", completada: true, etiquetas: ["salud"] },
  { id: 3, titulo: "Comprar comida", completada: false, etiquetas: ["hogar"] },
];

// 👉 Debes realizar las siguientes operaciones inmutables:

// Agregar una nueva tarea:

// { id: 4, titulo: "Leer un libro", completada: false, etiquetas: ["ocio"] }
// Marcar como completada la tarea con id = 3 ("Comprar comida").

// Agregar la etiqueta "urgente" a la tarea con id = 1 ("Estudiar React").

// Eliminar la tarea con id = 2 ("Ir al gimnasio").

// Mostrar el resultado final en consola.

const final = [
  ...tareas,
  { id: 4, titulo: "Leer un libro", completada: false, etiquetas: ["ocio"] },
]
  .map((tarea) => {
    if (tarea.id === 3) return { ...tarea, completada: true };
    if (tarea.id === 1)
      return { ...tarea, etiquetas: [...tarea.etiquetas, "urgente"] };
    return tarea;
  })
  .filter((tarea) => tarea.id !== 2);

console.log(final);
