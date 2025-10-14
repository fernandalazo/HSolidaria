import React from 'react';

// Estilos
import './App.css';

// Importación componentes
import Header from './components/Header';
import Productos from './components/Productos';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import RegistroModal from './components/RegistroModal';
import LoginModal from './components/LoginModal';

// Productos individuales
import Churu from './components/Churu';
import NutriqueBabyCat from './components/NutriqueBabyCat';
import RoyalWeightControl from './components/RoyalWeightControl';
import NomadeSenior from './components/NomadeSenior';

// Definición de los datos de los productos usando imágenes locales no links (transformdo a react)

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
    precioNuevo: '30.000'
  }
];

function App() {
  return (
    <>
      <Header />

      <main>
        <div className="container mt-4">
          {/* Ofertas renderizadas en React con .map() */}
          <Productos productos={productosEnOferta} />

          {/* Catálogo de componentes individuales */}
          <section className="my-5">
            <h2 className="mb-4">Catálogo</h2>
            <div className="row">
              <Churu />
              <NutriqueBabyCat />
              <RoyalWeightControl />
              <NomadeSenior />
              {/* Agrega aquí los otros 8 hasta completar 12 */}
            </div>
          </section>

          {/* Carrusel ya existente */}
          <Carousel />
        </div>
      </main>

      <Footer />

      {/* Modales */}
      <RegistroModal />
      <LoginModal />
    </>
  );
}

export default App;
