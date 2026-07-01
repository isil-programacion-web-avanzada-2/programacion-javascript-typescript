export const formatearFecha = (fecha) => {
  return new Date(fecha).toLocaleDateString('es-ES');
};

export const validarEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const calcularImpuesto = (monto) => {
  return monto * 0.18;
};