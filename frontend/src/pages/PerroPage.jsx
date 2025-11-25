export default function PerroPage() {
  return <h1>Perros</h1>;
}


// Página de categoría "Perros"


import React from "react"
import Productos from "../components/Productos"
// Importam la lista de productos locales de categoria perros
import dogs from "../data/dogs"

export default function PerroPage({ addToCart }) {

  // Separar cada categoría y reutilizar el mismo componente Productos para mantener consistencia visual

  return (
    <main>
      <div className="container mt-4">
        <h2 className="mb-4">Alimentos para Perros</h2>

        {/* Renderizacion usando el mismo componente reutilizable */}
        <Productos productos={dogs} addToCart={addToCart} />
      </div>
    </main>
  )
}
