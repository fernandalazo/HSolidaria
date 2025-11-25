// Setup global para Vitest
// Configuracuion de jsdom, mock de localStorage y cualquier mock necesario

import { vi } from "vitest";

// Mock simple de localStorage para evitar errores en useCart
class LocalStorageMock {
  constructor() {
    this.store = {};
  }
  clear() {
    this.store = {};
  }
  getItem(key) {
    return this.store[key] || null;
  }
  setItem(key, value) {
    this.store[key] = value.toString();
  }
  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();

// Mock de Bootstrap Modal para evitar errores en LoginModal y RegistroModal
vi.mock("bootstrap", () => {
  return {
    Modal: class {
      show() {}
      hide() {}
    },
  };
});
