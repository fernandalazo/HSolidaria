// Setup global para Vitest
// Este archivo corre antes de TODOS los tests y define mocks globales

import { vi } from "vitest";

// --- Mock de localStorage para evitar errores en useCart ---
class LocalStorageMock {
  constructor() { this.store = {}; }
  clear() { this.store = {}; }
  getItem(key) { return this.store[key] || null; }
  setItem(key, value) { this.store[key] = value.toString(); }
  removeItem(key) { delete this.store[key]; }
}
global.localStorage = new LocalStorageMock();

// --- Mock de Bootstrap.Modal para evitar errores en Login/Registro ---
vi.mock("bootstrap", () => {
  return {
    Modal: class {
      show() {}
      hide() {}
    },
  };
});
