import configuracion from '../config/configuracion';

const niveles = {
  info: 'INFO',
  warn: 'ADVERTENCIA',
  error: 'ERROR',
  debug: 'DEPURACION'
};

export const logger = {
  info: (mensaje, datos = {}) => {
    if (configuracion.logs.habilitados) {
      console.info(`[${niveles.info}] ${mensaje}`, datos);
    }
  },
  warn: (mensaje, datos = {}) => {
    console.warn(`[${niveles.warn}] ${mensaje}`, datos);
  },
  error: (mensaje, datos = {}) => {
    console.error(`[${niveles.error}] ${mensaje}`, datos);
  },
  debug: (mensaje, datos = {}) => {
    if (configuracion.entorno === 'desarrollo') {
      console.debug(`[${niveles.debug}] ${mensaje}`, datos);
    }
  }
};