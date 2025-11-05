const { calcularTotalPedido } = require('./pedido');

function validarDescuento(productos, descuento) {
  if (typeof descuento !== 'number' || descuento < 0 || descuento > 50)
    return "Error: descuento invalido";
  return calcularTotalPedido(productos, descuento);
}

module.exports = { validarDescuento };


