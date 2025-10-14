import React from 'react';

// Estilos
import './App.css'; 

// Importación de todos los componentes

import Header from './components/Header';
import Productos from './components/Productos';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import RegistroModal from './components/RegistroModal';
import LoginModal from './components/LoginModal'; 
import Churu from './components/Churu';  // Importo componente producto Churu

// Definición de los datos de los productos usando imágenes locales en vez de los links externos

const productosEnOferta = [
  {
    id: 1,
    imagen: '/img/nutrique_baby_cat.webp',
    categoria: 'Nutrique',
    titulo: 'Nutrique Baby Cat & Kitten Pavo 2Kg',
    precioAntiguo: '22.500',
    precioNuevo: '17.400'
  },
  {
    id: 2,
    imagen: '/img/royal_weight_control.webp',
    categoria: 'Royal Canin',
    titulo: 'Royal Canin Gato Adulto Castrados Weight Control 1.5Kg (Seco)',
    precioAntiguo: '20.000',
    precioNuevo: '17.580'
  },
  {
    id: 3,
    imagen: '/img/nomade_senior.webp',
    categoria: 'Nómade',
    titulo: 'Nomade Senior 15Kg',
    precioAntiguo: '35.000',
    precioNuevo: '32.000'
  }
];


function App() {
  return (
    <>
      <Header />

      <main>
        <div className="container mt-4">
          <Productos productos={productosEnOferta} />
          <Carousel />
        </div>
      </main>

      <Footer />

      {/* 2. Añadir ambos modales al final */}
      <RegistroModal />
      <LoginModal />
    </>
  );
}

export default App;