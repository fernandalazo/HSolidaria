import React from 'react';
import ProductCard from './cards/ProductCard';

export default function Churu({ onAdd }) {
  const data = {
    id: 101,
    imagenSrc: '/img/churu_gato_pollo.webp',  
    categoria: 'Snack Gatos',
    titulo: 'Churu Gato Pollo (10 unidades)',
    precioAntiguo: '5.990',
    precioNuevo: '3.990'
  };

  return (
    <ProductCard
      id={data.id}
      imagenSrc={data.imagenSrc}
      categoria={data.categoria}
      titulo={data.titulo}
      precioAntiguo={data.precioAntiguo}
      precioNuevo={data.precioNuevo}
      onAdd={(id) => {
        onAdd ? onAdd(id) : alert(`Agregado: ${data.titulo}`);
      }}
    />
  );
}
