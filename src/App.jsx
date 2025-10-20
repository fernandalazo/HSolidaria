import React, { useState } from 'react'

// Estilos
import './App.css'

// Importación componentes
import Header from './components/Header'
import Productos from './components/Productos'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import RegistroModal from './components/RegistroModal'
import LoginModal from './components/LoginModal'
import CartCanvas from './components/CartCanvas' // CAMBIO: Importar el nuevo componente

// CAMBIO: elimino import db (no se usa directamente).
// Motivo: ahora los productos vienen desde el hook useCart.
import { useCart } from './hooks/useCart'

function App() {
  const {
    data: productos,
    cart,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    clearCart
  } = useCart()

  const [isLoginModalOpen, setLoginModalOpen] = useState(false)
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false)
  const [isCartOpen, setCartOpen] = useState(false) // CAMBIO: Estado para el panel del carrito

  return (
    <>
      <Header
        cart={cart}
        onOpenLogin={() => setLoginModalOpen(true)}
        onOpenRegister={() => setRegisterModalOpen(true)}
        // CAMBIO: Pasar la función para abrir el panel
        onOpenCart={() => setCartOpen(true)}
      />

      <main>
        <div className="container mt-4">
          <section className="my-5">
            <h2 className="mb-4">Ofertas</h2>
            {/* CAMBIO: verificar que <Productos> pase el objeto completo "producto"
                a <ProductCard> para aprovechar imagenSrc y precios formateados. */}
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

      {/* CAMBIO: Renderizar el panel del carrito y pasarle todas las props necesarias */}
      <CartCanvas
        isOpen={isCartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        removeFromCart={removeFromCart}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        clearCart={clearCart}
      />
    </>
  )
}

export default App
