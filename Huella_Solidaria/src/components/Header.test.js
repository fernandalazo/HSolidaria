
// OBJETIVO: validar DOM del Header (navbar)

// - Validar la UI del Header: el badge del carrito refleja la cantidad y el total aparece formateado en CLP

// 1) React 18: usamos `act` desde 'react' para el montaje (consistencia con React 18)
// 2) Se extraen solo los dígitos del badge con un helper `digits(...)`
//    Motivo: el badge puede contener texto adicional (ej. "3 artículos en el carrito") y no solo el número
// 3) Se mantiene la comprobación del total en CLP mediante regex tolerante ($ 2.000 / $2 000)


// Verifica badge del carrito y total en CLP.
// CAMBIO: el badge muestra la SUMA de quantities, no el número de líneas--> comparacion contra sum(cart[i].quantity) no contra cart.length

import React, { act } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header.jsx';

const nextTick = () => new Promise((r) => setTimeout(r, 0));
const digits = (s) => Number((String(s).match(/\d+/) || [0])[0]);

const mount = async (ui) => {
  const el = document.createElement('div');
  document.body.appendChild(el);
  const root = ReactDOM.createRoot(el);
  await act(async () => { root.render(ui); await nextTick(); });
  return { el, root, cleanup: () => { root.unmount(); document.body.removeChild(el); } };
};

describe('<Header />', () => {
  it('muestra badge (suma de cantidades) y total en CLP', async () => {
    // 2 líneas, quantities 1 y 2 → unidades totales = 3
    const cart = [
      { id: 1, titulo: 'A', imagenSrc: '/img/placeholder.svg', precioNuevo: 1000, quantity: 1 },
      { id: 2, titulo: 'B', imagenSrc: '/img/placeholder.svg', precioNuevo: 500,  quantity: 2 },
    ];
    const noop = () => {};
    const unidades = cart.reduce((acc, it) => acc + (it.quantity ?? 1), 0); // CAMBIO: suma de quantities

    const { el, cleanup } = await mount(
      <Header
        cart={cart}
        removeFromCart={noop}
        decreaseQuantity={noop}
        increaseQuantity={noop}
        clearCart={noop}
        onOpenLogin={noop}
        onOpenRegister={noop}
      />
    );

    const badge = el.querySelector('.cart-count-badge');
    expect(badge).withContext('No se encontró el badge .cart-count-badge').toBeTruthy();

    // CAMBIO: comparacion de dígitos del badge con la suma de quantities (3) con cart.length (2)
    expect(digits(badge.textContent)).toBe(unidades);

    // Total esperado: 1000*1 + 500*2 = $ 2.000 (admitimos . o espacio)
    expect(el.textContent).toMatch(/\$\s*2[.\s]?000/);

    cleanup();
  });
});
