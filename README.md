# Huella Solidaria 🐾

Proyecto de la asignatura **Full Stack Java II – Programación Web** (DUOC UC).  
Huella Solidaria es una **aplicación web de e-commerce solidario** orientada a la venta de productos para mascotas, vinculando cada compra con **donaciones a fundaciones asociadas**.

Este repositorio contiene **exclusivamente el frontend**

---

## ✨ Funcionalidades principales

- Catálogo de productos para mascotas (listar y filtrar).
- Visualización de detalle de producto.
- Carrito de compras con cálculo de totales.
- Flujo de compra asociado a donaciones.
- Sección informativa de fundaciones/aliados solidarios.
- Navegación entre secciones mediante **React Router**.
- Estilos responsivos usando **Bootstrap** y **Bootstrap Icons**.

> Nota: La lógica de persistencia de datos y las integraciones reales (pagos, APIs de fundaciones, etc.) se realizan a través de un **backend REST externo**, que no forma parte de este repositorio.

---

## 🧱 Tecnologías utilizadas

- **React** (SPA y componentes)
- **Vite** (bundler y servidor de desarrollo)
- **React Router DOM** (enrutamiento del lado del cliente)
- **Bootstrap 5** + **Bootstrap Icons** (maquetación y estilos)
- **Vitest** (pruebas unitarias)
- **ESLint** (linter para buenas prácticas de código)

---

## 📁 Estructura general del repositorio

```text
HSolidaria/
├── .vscode/           # Configuración opcional de editor
├── .gitignore         # Exclusiones de Git (node_modules, builds, etc.)
└── frontend/          # Código fuente del frontend (React + Vite)
    ├── index.html
    ├── package.json
    ├── vite.config.* 
    └── src/
        ├── assets/    # Imágenes, íconos, estilos adicionales
        ├── components/# Componentes reutilizables (cards, navbar, footer, etc.)
        ├── pages/     # Vistas/páginas principales (Inicio, Productos, Carrito, Donaciones...)
        ├── routes/    # Definición de rutas de React Router (si aplica)
        └── main.jsx   # Punto de entrada de la aplicación
