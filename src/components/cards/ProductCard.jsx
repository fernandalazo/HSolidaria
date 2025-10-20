import React from 'react'
import { formatCLP } from '../utils/format' // CAMBIO: usar el mismo formateador

export default function ProductCard({ producto, addToCart }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card h-100 shadow-sm">
        <img
          // CAMBIO: usar la propiedad correcta "imagenSrc" (antes podía ser producto.imagen).
          // Motivo: tu DB define imagenSrc; usar otra clave rompía las imágenes.
          src={producto.imagenSrc}
          alt={producto.titulo}
          className="card-img-top img-fluid product-img"
          // Recomendación: asegúrate de tener /public/img/placeholder.webp
          onError={(e) => { e.currentTarget.src = '/img/placeholder.webp' }}
          loading="lazy"
        />
        <div className="card-body d-flex flex-column">
          {producto.categoria && <span className="badge bg-secondary mb-2">{producto.categoria}</span>}
          <h5 className="card-title text-black">{producto.titulo}</h5>

          <div className="precio-container">
            {/* CAMBIO: formateo de precios con CLP (antes mostraba números crudos). */}
            {producto.precioAntiguo != null && (
              <div className="text-decoration-line-through" style={{ color: '#d9534f' }}>
                {formatCLP(producto.precioAntiguo)}
              </div>
            )}
            {producto.precioNuevo != null && (
              <div className="fs-5 fw-semibold precio-oferta">
                {formatCLP(producto.precioNuevo)}
              </div>
            )}
          </div>

          <div className="mt-auto d-flex gap-2">
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => addToCart(producto)}
            >
              Agregar al Carrito
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-sm"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Detalles
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
