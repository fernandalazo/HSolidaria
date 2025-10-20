// src/utils/format.test.js
// OBJETIVO: probar la función formatCLP que convierte números a pesos chilenos.
// - Caso base: 5490 → "$ 5.490"
// - Caso nulo o NaN → string vacío.
// Comentarios: este test comprueba la función pura de utilidades (sin React).

import { formatCLP } from './format';

describe('formatCLP', () => {
  it('formatea 5490 como $ 5.490', () => {
    const out = formatCLP(5490);
    expect(out).toContain('$');
    expect(out).toMatch(/5[.\s]490/);
  });

  it('retorna vacío si el valor es nulo o NaN', () => {
    expect(formatCLP(null)).toBe('');
    expect(formatCLP('texto')).toBe('');
  });
});
