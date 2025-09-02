// Ejercicio:

// Tienes este arreglo de tareas:

const tareas = [
  {
    id: 1,
    titulo: "Estudiar JavaScript",
    completada: false,
    etiquetas: ["estudio", "programación"],
  },
  { id: 2, titulo: "Ir al gimnasio", completada: true, etiquetas: ["salud"] },
  { id: 3, titulo: "Comprar víveres", completada: false, etiquetas: ["hogar"] },
];

// Agrega una nueva tarea:
// { id: 4, titulo: "Leer un libro", completada: false, etiquetas: ["ocio"] }
const nuevaTarea = [
  ...tareas,
  { id: 4, titulo: "Leer un libro", completada: false, etiquetas: ["ocio"] },
];

// Marca como completada la tarea con id: 3.
const tareaCompletada = nuevaTarea.map((tarea) =>
  tarea.id === 3 ? { ...tarea, completada: true } : tarea
);

// Agrega la etiqueta "prioridad" a la tarea con id: 1.
const tareaPrioridad = tareaCompletada.map((tarea) =>
  tarea.id === 1
    ? { ...tarea, etiquetas: [...tarea.etiquetas, "prioridad"] }
    : tarea
);

// Elimina la tarea con id: 2.
const tareaFinal = tareaPrioridad.filter((tarea) => tarea.id !== 2);

console.log(tareaFinal);
