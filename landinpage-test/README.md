# React + Vite – Configuración Base

Este proyecto proporciona una configuración mínima para trabajar con **React** usando **Vite**, incluyendo **Hot Module Replacement (HMR)** y una configuración básica de **ESLint**.

Actualmente, existen dos plugins oficiales disponibles:

* **@vitejs/plugin-react** – Usa Babel para Fast Refresh
* **@vitejs/plugin-react-swc** – Usa SWC para compilaciones más rápidas y Fast Refresh

---

## ESLint y calidad de código

Si estás desarrollando una aplicación para producción, se recomienda:

* Usar **TypeScript** para mayor seguridad de tipos
* Habilitar reglas de ESLint con soporte de tipos
* Mantener un estilo de código consistente

Puedes revisar la plantilla oficial React + TypeScript:
[https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts)

---

# 📅 Requerimientos diarios – Página Web Ecommerce

Los cambios deben de ser pusheados a la rama alternativa establecida con fecha limite de 06:00 hrs del dia siguiente a la emision de este documento

---

## 🧩 Requerimientos funcionales (alcance diario)

* Implementar o mejorar **una funcionalidad relacionada a productos**, por ejemplo:

  * Tarjeta de producto (Product Card)
  * Vista de detalle de producto
  * Visualización de precio con descuento

* Renderizar productos de forma dinámica desde:

  * Datos simulados (mock)
  * o una API

* Agregar interacción básica del usuario:

  * Botón "Agregar al carrito"
  * Selector de cantidad
  * Vali
