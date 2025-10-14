//Paso productos antiguos a React
// Mantuve el array en App.jsx y lo pase como prop a un componente 'Productos' que renderiza tarjetas


import React from 'react';
import ProductCard from './cards/ProductCard'; // Plantilla reutilizable

export default function Productos({ productos = [], onAdd }) {
  if (!productos.length) return null;

  return (
    <section className="my-4">
      <h2 className="mb-3">Ofertas</h2>
      <div className="row">
        {productos.map(p => (
          <ProductCard
            key={p.id}
            id={p.id}
            imagenSrc={p.imagen}
            categoria={p.categoria}
            titulo={p.titulo}
            precioAntiguo={p.precioAntiguo}
            precioNuevo={p.precioNuevo}
            onAdd={() => onAdd ? onAdd(p.id) : alert(`Agregado: ${p.titulo}`)}
          />
        ))}
      </div>
    </section>
  );
}
