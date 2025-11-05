const { calcularTotalPedido } = require('./pedido');
const { validarDescuento } = require('./funcionGrupo6');

describe('Integración: calcularTotalPedido + validarDescuento', () => {
  test('flujo completo: calcular total y validar descuento', () => {
    const productos = [{ precio: 100, cantidad: 3 }];
    const total = calcularTotalPedido(productos, 10);
    const resultado = validarDescuento(productos, 10);
    expect(resultado).toBe(total);
  });
});



