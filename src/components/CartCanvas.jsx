import React, { useEffect, useRef } from 'react';
import { Offcanvas } from 'bootstrap';
import { formatCLP } from '../utils/format';

export default function CartCanvas({
  isOpen,
  onClose,
  cart,
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
  clearCart,
}) {
  const offcanvasRef = useRef(null);
  const offcanvasInstance = useRef(null);

  // Calcular total y contador de items
  const total = cart.reduce((acc, it) => acc + (it.precioNuevo ?? 0) * (it.quantity ?? 1), 0);
  const itemsCount = cart.reduce((acc, it) => acc + (it.quantity ?? 1), 0);

  // Inicializar y controlar la instancia de Bootstrap Offcanvas
  useEffect(() => {
    if (offcanvasRef.current) {
      offcanvasInstance.current = new Offcanvas(offcanvasRef.current);
      // Escuchar el evento de cierre de Bootstrap para sincronizar el estado de React
      offcanvasRef.current.addEventListener('hidden.bs.offcanvas', onClose);
    }

    return () => {
      // Limpiar el listener al desmontar el componente
      if (offcanvasRef.current) {
        offcanvasRef.current.removeEventListener('hidden.bs.offcanvas', onClose);
      }
    };
  }, [onClose]);

  // Mostrar u ocultar el offcanvas cuando el estado `isOpen` cambie
  useEffect(() => {
    if (isOpen) {
      offcanvasInstance.current?.show();
    } else {
      offcanvasInstance.current?.hide();
    }
  }, [isOpen]);

  return (
    <div className="offcanvas offcanvas-end" tabIndex="-1" ref={offcanvasRef} id="cartOffcanvas" aria-labelledby="cartOffcanvasLabel">
      <div className="offcanvas-header border-bottom">
        <h5 className="offcanvas-title" id="cartOffcanvasLabel">Mi Carrito ({itemsCount})</h5>
        {/* CAMBIO: El onClick ahora usa la instancia de Bootstrap para cerrar el panel.
            El listener 'hidden.bs.offcanvas' se encargará de llamar a onClose para sincronizar el estado de React. */}
        <button
          type="button"
          className="btn-close"
          onClick={() => offcanvasInstance.current?.hide()}
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        {cart.length === 0 ? (
          <div className="text-center text-muted mt-5">Tu carrito está vacío</div>
        ) : (
          <>
            <div className="d-flex flex-column gap-3">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.imagenSrc} alt={item.titulo} className="cart-item-img" onError={(e) => { e.currentTarget.src = '/img/placeholder.webp' }} loading="lazy" />
                  <div>
                    <p className="cart-item-title">{item.titulo}</p>
                    <div className="cart-item-prices">
                      {item.precioAntiguo != null && <span className="old">{formatCLP(item.precioAntiguo)}</span>}
                      <span className="new">{formatCLP(item.precioNuevo ?? 0)}</span>
                    </div>
                    <div className="cart-actions d-flex align-items-center gap-2 mt-1">
                      <button type="button" className="btn btn-sm btn-lavanda-outline" onClick={() => decreaseQuantity(item.id)} aria-label={`Disminuir cantidad de ${item.titulo}`}>-</button>
                      <span className="px-2" aria-live="polite">{item.quantity ?? 1}</span>
                      <button type="button" className="btn btn-sm btn-lavanda" onClick={() => increaseQuantity(item.id)} aria-label={`Aumentar cantidad de ${item.titulo}`}>+</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary ms-2" onClick={() => removeFromCart(item.id)} aria-label={`Quitar ${item.titulo} del carrito}`}>
                        <i className="bi bi-trash" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                  <div className="text-end">
                    <div className="fw-semibold">{formatCLP((item.precioNuevo ?? 0) * (item.quantity ?? 1))}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer del carrito */}
            <div className="cart-footer mt-auto pt-3 d-flex flex-column gap-2" style={{ position: 'sticky', bottom: 0, background: 'white', paddingBottom: '1rem' }}>
              <div className="d-flex justify-content-between">
                <span className="fw-semibold">Total</span>
                <span className="fw-bold" aria-live="polite">{formatCLP(total)}</span>
              </div>
              <div className="d-flex gap-2">
                <button type="button" className="btn btn-sm btn-outline-secondary flex-grow-1" onClick={clearCart}>
                  Vaciar
                </button>
                <button type="button" className="btn btn-sm btn-lavanda flex-grow-1">
                  Pagar
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}