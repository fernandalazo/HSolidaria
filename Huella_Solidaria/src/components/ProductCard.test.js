
// OBJETIVO: validar un componente de UI con DOM real

// - Renderiza título e importes en CLP (usa formatCLP dentro del componente)
// - Dispara la acción "Agregar al Carrito" y verifica que se llama con el producto

// Razon--> asegura comportamiento visible y conexión con la lógica del carrito



// Verifica render (título, precio CLP) + click "Agregar al Carrito".

import React, { act } from 'react';   
import ReactDOM from 'react-dom/client';
import ProductCard from './ProductCard.jsx';

const nextTick = () => new Promise((r) => setTimeout(r, 0));

const mount = async (ui) => {
  const el = document.createElement('div');
  document.body.appendChild(el);
  const root = ReactDOM.createRoot(el);
  await act(async () => { root.render(ui); await nextTick(); });
  return { el, root, cleanup: () => { root.unmount(); document.body.removeChild(el); } };
};

describe('<ProductCard />', () => {
  it('muestra título y precio CLP y llama addToCart', async () => {
    const fakeProducto = {
      id: 4,
      imagenSrc: '/img/churu_gato_pollo.webp',
      categoria: 'Gato',
      titulo: 'Churu Gato Pollo & Pollo Ostión (10 und)',
      precioAntiguo: 5990,
      precioNuevo: 5490,
    };
    const addToCart = jasmine.createSpy('addToCart');

    const { el, cleanup } = await mount(<ProductCard producto={fakeProducto} addToCart={addToCart} />);

    expect(el.textContent).toContain(fakeProducto.titulo);
    expect(el.textContent).toMatch(/\$\s*5[.\s]?490/);

    const addBtn = Array.from(el.querySelectorAll('button'))
      .find((b) => b.textContent.includes('Agregar al Carrito'));
    expect(addBtn).toBeDefined();

    await act(async () => { addBtn.click(); await nextTick(); });
    expect(addToCart).toHaveBeenCalledWith(fakeProducto);

    cleanup();
  });
});
