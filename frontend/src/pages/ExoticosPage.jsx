// Página de categoría “Exóticos”
import React from "react";
import Productos from "../components/Productos";

// Importación lista local de productos exóticos
import exoticos from "../data/exoticos";

export default function ExoticosPage({ addToCart }) {
  return (
    <main>
      <div className="container mt-4">
        <h2 className="mb-4">Alimentos para Mascotas Exóticas</h2>

        {/* Renderizado de la grilla usando el componente Productos */}
        <Productos productos={exoticos} addToCart={addToCart} />
      </div>
    </main>
  );
}
