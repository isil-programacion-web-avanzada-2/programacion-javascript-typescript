import { logger } from '../utils/logger';

export const inicializarMonitoreo = () => {
  window.onerror = (mensaje, origen, linea, columna, error) => {
    logger.error('Error global detectado', {
      mensaje,
      origen,
      linea,
      columna,
      error
    });
  };
};