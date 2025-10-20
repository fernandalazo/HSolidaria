// Convierto productos antiguos a React (que no sean links de imagenes)
// Mantuve el array en App.jsx y lo pase como prop a un componente 'Productos' que renderiza tarjetas

/*ESTE NO ES UN COMPONENTE DE RUTA, SOLO RENDERIZA TARJETAS DE PRODUCTOS*/
import React from 'react';
import ProductCard from './cards/ProductCard'; // Plantilla reutilizable

export default function Productos({ productos = [], addToCart }) {
  if (!productos.length) return null;

  return (
    <section className="my-4">
      <h2 className="mb-3">Ofertas</h2>
      <div className="row g-3">
        {productos.map(producto => (
          <ProductCard key={producto.id} producto={producto} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
}
