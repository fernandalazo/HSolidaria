// test/setup.test.js
// Se ejecuta ANTES de cada suite. Limpia estados globales.

beforeEach(() => {
  try {
    localStorage.clear();
    sessionStorage.clear();
  } catch (_) {}
});

// Opcion para esperar el siguiente frame en tests asincronicos
export const nextTick = () => new Promise(requestAnimationFrame);
