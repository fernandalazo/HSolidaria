import React from 'react';

export default function ProductCard({
  producto, addToCart
}) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card h-100 shadow-sm">
        <img
          src={producto.imagen}
          alt={producto.titulo}
          className="card-img-top img-fluid product-img"
          onError={(e) => { e.currentTarget.src = '/img/placeholder.webp'; }}
          loading="lazy"
        />
        <div className="card-body d-flex flex-column">
          {producto.categoria && <span className="badge bg-secondary mb-2">{producto.categoria}</span>}
          <h5 className="card-title text-black">{producto.titulo}</h5>
          <div className="precio-container">
            {producto.precioAntiguo && (
              <div className="text-decoration-line-through" style={{ color: '#d9534f' }}>
                ${producto.precioAntiguo}
              </div>
            )}
            {producto.precioNuevo && <div className="fs-5 fw-semibold precio-oferta">${producto.precioNuevo}</div>}
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
  );
}
