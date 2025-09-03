const empleados = [
  { id: 1, nombre: "Ana", salario: 2000, activo: true, departamento: "Ventas" },
  {
    id: 2,
    nombre: "Luis",
    salario: 2500,
    activo: false,
    departamento: "Marketing",
  },
  { id: 3, nombre: "Marta", salario: 3000, activo: true, departamento: "IT" },
];

// 👉 Haz lo siguiente:

// Agrega un nuevo empleado:

// { id: 4, nombre: "Pedro", salario: 2200, activo: true, departamento: "Ventas" }

// Aumenta en 10% el salario de Marta (id=3).

// Cambia el estado de Luis (id=2) a activo: true.

// Elimina al empleado con id=1 (Ana).

// Usa find para obtener el empleado con mayor salario y muéstralo por consola.

const final = [
  ...empleados,
  {
    id: 4,
    nombre: "Pedro",
    salario: 2200,
    activo: true,
    departamento: "Ventas",
  },
].reduce((max, empleado) => {
  if (empleado.id === 1) return max;

  let actualizado = { ...empleado };
  if (empleado.id === 3) actualizado.salario *= 1.1;
  if (empleado.id === 2) actualizado.activo = true;

  if (!max || actualizado.salario > max.salario) {
    return actualizado;
  }

  return max;
}, null);

console.log(final);
