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

import db from './data/db.js';
import { useCart } from './hooks/useCart';

// (He eliminado los componentes individuales estáticos para usar el listado dinámico)
// Si quieres mantenerlos, añádelos más abajo.

function App() {
  const { data, cart, addToCart } = useCart();
  // fuente de productos (puedes usar `data` si prefieres que venga del hook)
  const productos = db;

  return (
    <>
      <Header data={data} cart={cart} addToCart={addToCart} />

      <main>
        <div className="container mt-4">
          <section className="my-5">
            <h2 className="mb-4">Ofertas</h2>
            <div className="row g-3">
              <Productos
                productos={productos}
                onAdd={(id) => {
                  const prod = productos.find(p => p.id === id);
                  if (prod) addToCart(prod);
                }}
              />
            </div>
          </section>

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