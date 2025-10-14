
import React from 'react';
import ProductCard from './cards/ProductCard';

export default function NaturalisticCremiBox({ onAdd }) {
  const data = {
    id: 6,
    imagenSrc: '/img/Naturalistic-Cremi-Box-Chicken-Mix-60-Sachet.webp',
    categoria: 'Gato',
    titulo: 'Cremi Box Chicken Mix (60 sachet)',
    precioAntiguo: '18.200',
    precioNuevo: '16.400'
  };
  return <ProductCard {...data} onAdd={(id)=>onAdd?onAdd(id):alert(`Agregado: ${data.titulo}`)} />;
}
