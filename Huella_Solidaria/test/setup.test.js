// test/setup.test.js
// Se ejecuta ANTES de cada suite. Limpia estados globales.

// Limpia storages entre tests

beforeEach(() => {
  try {
    localStorage.clear();
    sessionStorage.clear();
  } catch (_) {}
});

// React 18
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

// Opcion para esperar el siguiente frame en tests asincronicos
export const nextTick = () => new Promise(requestAnimationFrame);
