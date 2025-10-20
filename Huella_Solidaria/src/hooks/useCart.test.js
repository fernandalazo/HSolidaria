
// OBJETIVO: Validar la lógica del hook useCart con un "harness" mínimo de React (estado real)


// Razon: prueba de negocio del carrito con estado real (React) y DOM mínimo
// Verifica flujos del hook: add / inc / dec / remove / clear + totales




// CAMBIOS CLAVE RESPECTO A LA VERSIÓN ANTERIOR:

// 1) React 18: usamos `act` desde 'react' (NO desde 'react-dom/test-utils')
//    Motivo: la API de react-dom/test-utils está deprecada para act en React 18
// 2) Un `act` POR CADA CLICK + un `await nextTick()` luego de cada acción
//    Motivo: garantizar que React procese cada actualización de estado antes de aserciones
// 3) Helper `nextTick()` para ceder el event loop y asegurar render estable.
//    Motivo: evitar condiciones de carrera en assertions justo después de eventos
// 4) Limpieza de localStorage antes de cada test
//    Motivo: evitar que el carrito persista entre tests y contamine resultados


import React, { act } from 'react';         // CAMBIO: act desde 'react'
import ReactDOM from 'react-dom/client';
import { useCart } from './useCart';

const P = { id: 99, imagenSrc: '/img/placeholder.svg', titulo: 'Test', precioNuevo: 1000 };

// Espera un "tick" para permitir que React procese microtareas/renders
const nextTick = () => new Promise((r) => setTimeout(r, 0));

// Harness que usa el hook en un árbol React real
function Harness() {
  const {
    cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart
  } = useCart();

  const qty = cart.find((it) => it.id === P.id)?.quantity ?? 0;
  const total = cart.reduce((acc, it) => acc + (it.precioNuevo ?? 0) * (it.quantity ?? 1), 0);

  return (
    <div>
      <div data-testid="qty">{qty}</div>
      <div data-testid="total">{total}</div>

      {/* Botones de prueba para disparar acciones */}
      <button id="add" onClick={() => addToCart(P)}>add</button>
      <button id="inc" onClick={() => increaseQuantity(P.id)}>inc</button>
      <button id="dec" onClick={() => decreaseQuantity(P.id)}>dec</button>
      <button id="rm"  onClick={() => removeFromCart(P.id)}>rm</button>
      <button id="clr" onClick={() => clearCart()}>clr</button>
    </div>
  );
}

// Montaje asíncrono con act + nextTick (React 18)
const mount = async (ui) => {
  const el = document.createElement('div');
  document.body.appendChild(el);
  const root = ReactDOM.createRoot(el);
  await act(async () => { root.render(ui); await nextTick(); });
  return {
    el,
    root,
    cleanup: () => { root.unmount(); document.body.removeChild(el); }
  };
};

// Helpers DOM
const q = (el, sel) => el.querySelector(sel);
const num = (n) => Number(n?.textContent || '0');

describe('useCart (harness)', () => {
  let el, cleanup;

  beforeEach(async () => {
    try { localStorage.clear(); } catch (_) {}   // CAMBIO: evitar fuga de estado entre tests
    ({ el, cleanup } = await mount(<Harness />));
  });

  afterEach(() => cleanup());

  it('add / inc / dec actualizan qty y total', async () => {
    const qty = q(el, '[data-testid="qty"]');
    const total = q(el, '[data-testid="total"]');

    expect(num(qty)).toBe(0);
    expect(num(total)).toBe(0);

    // CAMBIO: un act por click + tick
    await act(async () => { q(el, '#add').click(); await nextTick(); });
    expect(num(qty)).toBe(1);
    expect(num(total)).toBe(1000);

    await act(async () => { q(el, '#inc').click(); await nextTick(); });
    expect(num(qty)).toBe(2);
    expect(num(total)).toBe(2000);

    await act(async () => { q(el, '#dec').click(); await nextTick(); });
    expect(num(qty)).toBe(1);
    expect(num(total)).toBe(1000);
  });

  it('remove y clear dejan qty en 0', async () => {
    const qty = q(el, '[data-testid="qty"]');

    await act(async () => { q(el, '#add').click(); await nextTick(); });
    expect(num(qty)).toBe(1);

    await act(async () => { q(el, '#rm').click(); await nextTick(); });
    expect(num(qty)).toBe(0);

    // añade 2 para luego limpiar
    await act(async () => { q(el, '#add').click(); await nextTick(); });
    await act(async () => { q(el, '#add').click(); await nextTick(); });
    expect(num(qty)).toBe(2);

    await act(async () => { q(el, '#clr').click(); await nextTick(); });
    expect(num(qty)).toBe(0);
  });
});
