import React, { useState } from 'react';

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
  const { 
    data: productos, 
    cart, 
    addToCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    clearCart
  } = useCart();

  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);

  return (
    <>
      <Header 
        cart={cart}
        removeFromCart={removeFromCart}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        clearCart={clearCart}
        onOpenLogin={() => setLoginModalOpen(true)}
        onOpenRegister={() => setRegisterModalOpen(true)}
      />

      <main>
        <div className="container mt-4">
          <section className="my-5">
            <h2 className="mb-4">Ofertas</h2>
            <Productos productos={productos} addToCart={addToCart} />
          </section>

          <Carousel />
        </div>
      </main>

      <Footer />

      {/* Modales */}
      <RegistroModal 
        isOpen={isRegisterModalOpen}
        onClose={() => setRegisterModalOpen(false)}
      />
      <LoginModal 
        isOpen={isLoginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />
    </>
  );
}

export default App;