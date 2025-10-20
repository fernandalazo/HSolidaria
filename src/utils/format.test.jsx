

// - Verificar la lógica de formateo de moneda CLP (función pura, sin UI)
// - Casos de uso: valores válidos, inválidos y números grandes.

import { formatCLP } from './format'; // Importa la función real

describe('formatCLP', () => {
  it('formatea enteros en CLP sin decimales', () => {
    const out = formatCLP(5490);
    expect(out).toContain('$'); // debe tener el símbolo $
    expect(out).toMatch(/5[.\s]490/); // debe incluir miles (5.490)
  });

  it('retorna string vacío para null o NaN (robustez)', () => {
    expect(formatCLP(null)).toBe('');
    expect(formatCLP(NaN)).toBe('');
  });

  it('formatea números grandes con miles', () => {
    const out = formatCLP(22500);
    expect(out).toMatch(/22[.\s]500/);
  });
});
