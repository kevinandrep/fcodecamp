import data from "../data/data.json";
// helpers
export const pedirDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data) {
        resolve(data);
      } else {
        reject("No se encontraron datos");
      }
    }, 500);
  });
};

export const pedirItemPorId = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const item = data.find((item) => item.id === Number(id));
      if (item) {
        resolve(item);
      } else {
        reject("No se encontró el item con el id especificado");
      }
    }, 500);
  });
};
