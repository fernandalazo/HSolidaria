
import React from 'react';
import ProductCard from './cards/ProductCard';

export default function BokatoVeloz({ onAdd }) {
  const data = {
    id: 9,
    imagenSrc: '/img/Bokato_perro_veloz.webp',
    categoria: 'Perro',
    titulo: 'Veloz Super Premium 20Kg',
    precioNuevo: '51.700'
  };
  return <ProductCard {...data} onAdd={(id)=>onAdd?onAdd(id):alert(`Agregado: ${data.titulo}`)} />;
}
