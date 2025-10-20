import React from 'react'
import { formatCLP } from '../utils/format' // CAMBIO: usar el formateador reutilizable

export default function Header({ cart, onOpenLogin, onOpenRegister, onOpenCart }) {
  // El resto de las props del carrito ya no son necesarias aquí,
  // se pasarán directamente al nuevo componente CartCanvas.

  // CAMBIO: contar unidades reales del carrito (no solo número de líneas).
  // Motivo: si un producto tiene quantity=3, el badge mostrará 3 (mejor UX).
  const itemsCount = cart.reduce((acc, it) => acc + (it.quantity ?? 1), 0)

  return (
    <nav className="navbar navbar-expand-lg navbar-apple">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2" href="/">
          {/* CAMBIO: logo PNG agregado */}
          <img
            src="/img/logo.png"
            alt="Logo Huella Solidaria"
            className="navbar-logo"
          />
          <span className="navbar-brand-text">Huella Solidaria</span>
        </a>

        {/* CAMBIO: toggler básico para móviles (no afecta desktop, mejora UX en pantallas pequeñas). */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="mainNavbar" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto align-items-center">
            {/* Otros links... */}

            {/* CAMBIO: botón del carrito con ícono controlado, badge lavanda y mejoras de accesibilidad */}
            <li className="nav-item dropdown">
              <button
                type="button"
                className="btn btn-link nav-link position-relative cart-toggle-btn" // Mantenemos los estilos
                onClick={onOpenCart} // CAMBIO: Llama a la función para abrir el panel
                aria-label={`Abrir carrito. ${itemsCount} artículo${itemsCount === 1 ? '' : 's'} en el carrito`}
              >
                {/* CAMBIO: icono más “grueso” usando la versión rellena y color controlado por CSS */}
                <i className="bi bi-cart-fill" aria-hidden="true"></i>

                {itemsCount > 0 && (
                  <span className="badge rounded-pill cart-count-badge cart-badge">
                    {itemsCount}
                    <span className="visually-hidden">artículos en el carrito</span>
                  </span>
                )}
              </button>
            </li>

            {/* Login / Registro */}
            <li className="nav-item ms-2">
              <button className="btn btn-sm btn-lavanda-outline" onClick={onOpenLogin}>Ingresar</button>
            </li>
            <li className="nav-item ms-2">
              <button className="btn btn-sm btn-lavanda" onClick={onOpenRegister}>Registrarme</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
