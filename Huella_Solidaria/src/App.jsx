import React from 'react';

// Estilos
import './App.css'; 

// Importación de todos los componentes
import Header from './components/Header';
import Productos from './components/Productos';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import RegistroModal from './components/RegistroModal';
import LoginModal from './components/LoginModal'; // <-- 1. Importar el nuevo componente

// Definición de los datos de los productos
const productosEnOferta = [
  {
    id: 1,
    imagen: 'https://ahorropuntopet.cl/wp-content/uploads/2023/03/FATV0001.png',
    categoria: 'Nutrique',
    titulo: 'Nutrique Baby Cat & Kitten Pavo 2Kg',
    precioAntiguo: '22.500',
    precioNuevo: '17.400'
  },
  {
    id: 2,
    imagen: 'https://ahorropuntopet.cl/wp-content/uploads/2023/08/Weight_Control_FELINE_CL_Med._Res.___Basic.jpg',
    categoria: 'Royal Canin',
    titulo: 'Royal Canin Gato Adulto Castrados Weight Control 1.5Kg (Seco)',
    precioAntiguo: '20.000',
    precioNuevo: '17.580'
  },
  {
    id: 3,
    imagen: 'https://ahorropuntopet.cl/wp-content/uploads/2025/08/Nomade-Senior-15kg.jpg',
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