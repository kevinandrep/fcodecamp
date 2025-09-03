// Ejercicio:

// Tienes una lista de facturas:

const facturas = [
  { id: 1, cliente: "Ana", monto: 500, pagada: false },
  { id: 2, cliente: "Luis", monto: 0, pagada: true },
  { id: 3, cliente: "Marta", monto: 200, pagada: false },
  { id: 4, cliente: "Pedro", monto: 800, pagada: false },
];

// 👉 Debes hacer lo siguiente usando reduce:

const final = facturas.reduce(
  (acc, factura) => {
    // Ignorar la factura con id=2.
    if (factura.id === 2) return acc;

    // Si la factura tiene monto > 600, agregar una propiedad alta: true.
    let nuevoFactura = { ...factura };
    if (nuevoFactura.monto > 600) nuevoFactura.alta = true;

    // Si la factura ya está pagada: true, marcarla con una propiedad adicional cerrada: true.
    if (nuevoFactura.pagada === true) nuevoFactura.cerrada = true;

    // Calcular la suma de todos los montos de las facturas no pagadas.
    if (nuevoFactura.pagada === false) {
      acc.deudaTotal += nuevoFactura.monto;
    }

    acc.facturasActualizadas.push(nuevoFactura);

    // El resultado final debe ser un objeto:
    return acc;
  },
  { facturasActualizadas: [], deudaTotal: 0 }
);

console.log(final);
