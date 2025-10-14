
import React from 'react';
import ProductCard from './cards/ProductCard';

export default function ZeusBetterBones({ onAdd }) {
  const data = {
    id: 8,
    imagenSrc: '/img/Zeus-Better-Bones-Duck-Cranberry.webp',
    categoria: 'Perro',
    titulo: 'Better Bones Duck & Cranberry 219g',
    precioAntiguo: '3.750',
    precioNuevo: '3.000'
  };
  return <ProductCard {...data} onAdd={(id)=>onAdd?onAdd(id):alert(`Agregado: ${data.titulo}`)} />;
}
