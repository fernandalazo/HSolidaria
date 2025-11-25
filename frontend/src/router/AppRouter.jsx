import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import PerroPage from "../pages/PerroPage";
import GatoPage from "../pages/GatoPage";
import ExoticosPage from "../pages/ExoticosPage";
import OfertasPage from "../pages/OfertasPage";
import ProductosPage from "../pages/ProductosPage";
import ProductoDetallePage from "../pages/ProductoDetallePage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/perro" element={<PerroPage />} />
        <Route path="/gato" element={<GatoPage />} />
        <Route path="/exoticos" element={<ExoticosPage />} />
        <Route path="/ofertas" element={<OfertasPage />} />
        <Route path="/productos" element={<ProductosPage />} />
        <Route path="/producto/:id" element={<ProductoDetallePage />} />
      </Routes>
    </BrowserRouter>
  );
}
