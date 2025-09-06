// 📌 Ejercicio – Empleados y salarios

// Tienes este array de empleados:

const empleados = [
  { id: 1, nombre: "Ana", salario: 2500, departamento: "Ventas" },
  { id: 2, nombre: "Luis", salario: 1800, departamento: "Marketing" },
  { id: 3, nombre: "Marta", salario: 3200, departamento: "Ventas" },
  { id: 4, nombre: "Pedro", salario: 2100, departamento: "IT" },
  { id: 5, nombre: "Lucía", salario: 4000, departamento: "IT" },
];

// 👉 Con un único reduce, debes:
const final = empleados.reduce(
  (acc, empleado) => {
    // A cada empleado calcularle un campo impuesto = 10% de su salario.
    let copiaEmpleado = { ...empleado };
    copiaEmpleado.impuesto = copiaEmpleado.salario * 0.1;

    // Si el salario > 3000, marcar al empleado como altoIngreso: true.
    if (copiaEmpleado.salario > 3000) copiaEmpleado.altoIngreso = true;

    // Agrupar a los empleados por departamento en empleadosPorDepartamento.
    acc.empleadosPorDepartamento[copiaEmpleado.departamento] =
      acc.empleadosPorDepartamento[copiaEmpleado.departamento] || [];

    acc.empleadosPorDepartamento[copiaEmpleado.departamento].push(
      copiaEmpleado
    );

    // Calcular totalSalarios con la suma de todos los salarios.
    acc.totalSalarios += copiaEmpleado.salario;

    // Guardar los empleados procesados en empleadosProcesados.
    acc.empleadosProcesados.push(copiaEmpleado);

    return acc;
  },
  { empleadosPorDepartamento: {}, empleadosProcesados: [], totalSalarios: 0 }
);

console.dir(final, { depth: null });
