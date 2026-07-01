const configuracion = {
  api: {
    urlBase: process.env.REACT_APP_API_URL || 'http://localhost:5000/api'
  },
  entorno: process.env.REACT_APP_ENTORNO || 'desarrollo',
  logs: {
    habilitados: process.env.REACT_APP_HABILITAR_LOGS === 'true'
  },
  monitoreo: {
    sentryDsn: process.env.REACT_APP_SENTRY_DSN || ''
  }
};

export default configuracion;