const { validarDescuento } = require('./funcionGrupo2');

describe('validarDescuento', () => {
  const productosValidos = [{ precio: 100, cantidad: 2 }];

  test('caso éxito: descuento válido', () => {
    const res = validarDescuento(productosValidos, 10);
    expect(typeof res).toBe('number');
    expect(res).toBeCloseTo(180);
  });

  test('caso error: descuento inválido', () => {
    const res = validarDescuento(productosValidos, 60);
    expect(res).toBe("Error: descuento invalido");
  });
});
