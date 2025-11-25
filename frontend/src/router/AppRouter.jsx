import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import RegistroModal from "../components/RegistroModal";
import LoginModal from "../components/LoginModal";

import { useCart } from "../hooks/useCart";

import App from "../App";
import PerroPage from "../pages/PerroPage";
import GatoPage from "../pages/GatoPage";
import ExoticosPage from "../pages/ExoticosPage";
import OfertasPage from "../pages/OfertasPage";
import ProductosPage from "../pages/ProductosPage";
import ProductoDetallePage from "../pages/ProductoDetallePage";

export default function AppRouter() {
  // Carrito centralizado
  const {
    data: productos,
    cart,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    clearCart
  } = useCart();

  //  Modales centralizados
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);

  return (
    <BrowserRouter>
      {/* HEADER con props REALES */}
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        clearCart={clearCart}
        onOpenLogin={() => setLoginModalOpen(true)}
        onOpenRegister={() => setRegisterModalOpen(true)}
      />

      <Routes>
        <Route
          path="/"
          element={
            <App
              productos={productos}
              addToCart={addToCart}
            />
          }
        />

        <Route
          path="/perro"
          element={<PerroPage productos={productos} addToCart={addToCart} />}
        />

        <Route
          path="/gato"
          element={<GatoPage productos={productos} addToCart={addToCart} />}
        />

        <Route
          path="/exoticos"
          element={<ExoticosPage productos={productos} addToCart={addToCart} />}
        />

        <Route
          path="/ofertas"
          element={<OfertasPage productos={productos} addToCart={addToCart} />}
        />

        <Route
          path="/productos"
          element={<ProductosPage productos={productos} addToCart={addToCart} />}
        />

        <Route
          path="/producto/:id"
          element={
            <ProductoDetallePage productos={productos} addToCart={addToCart} />
          }
        />
      </Routes>

      <Footer />

      <RegistroModal
        isOpen={isRegisterModalOpen}
        onClose={() => setRegisterModalOpen(false)}
      />
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />
    </BrowserRouter>
  );
}
