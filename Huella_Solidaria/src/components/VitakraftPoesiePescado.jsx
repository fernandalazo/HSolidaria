
import React from 'react';
import ProductCard from './cards/ProductCard';

export default function VitakraftPoesiePescado({ onAdd }) {
  const data = {
    id: 9,
    imagenSrc: '/img/Vitakraft-Poesie-Creation-Pescado.webp',
    categoria: 'Gato',
    titulo: 'Poésie Création Pescado 85g',
    precioAntiguo: '1.300',
    precioNuevo: '1.000'
  };
  return <ProductCard {...data} onAdd={(id)=>onAdd?onAdd(id):alert(`Agregado: ${data.titulo}`)} />;
}
