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

## ✅ Requisitos previos

Para ejecutar el proyecto de forma local:

- Node.js 18+ (recomendado 18 o superior)
- npm (se instala junto con Node.js)
- Editor de código (VS Code recomendado)

---

## 🚀 Instalación y ejecución (desarrollo)

1. Clonar el repositorio

git clone https://github.com/fernandalazo/HSolidaria.git
cd HSolidaria/frontend

2. Instalar dependencias --> npm install

3. Levantar el servidor de desarrollo --> npm run dev


4. Abrir en el navegador la URL que Vite mostrará en consola

ejemplo --> http://localhost:5173/


---

## 🧪 Scripts disponibles

Desde la carpeta frontend/ puedes ejecutar:

npm run dev
Inicia el servidor de desarrollo con recarga en caliente (Hot Module Replacement)

npm run build
Genera la versión optimizada para producción en la carpeta dist/

npm run preview
Levanta un servidor para previsualizar el build de producción

npm run test
Ejecuta las pruebas unitarias configuradas con Vitest


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
