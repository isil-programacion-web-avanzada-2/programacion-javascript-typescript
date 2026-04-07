# 00 - Estructura del proyecto

## Nombre del proyecto
**Plataforma de Gestión de Cursos e Inscripciones**

## Idea general
El curso trabajará un único proyecto integrador, pero dividido en módulos y subproyectos para evitar mezclar tecnologías en una sola carpeta. El objetivo es que cada sesión aporte una pieza real del producto final.

## Estructura recomendada del repositorio

```text
plataforma-cursos/
│
├── README.md
├── .gitignore
├── .env.example
│
├── docs/
│   ├── 00-estructura-del-proyecto.md
│   ├── 01-alcance-del-proyecto.md
│   ├── 02-historias-de-usuario.md
│   ├── 03-modelo-de-datos.md
│   ├── 04-api-endpoints.md
│
├── design/
│   └── prototipo-html-css/
│       ├── index.html
│       ├── login.html
│       ├── registro.html
│       ├── cursos.html
│       ├── detalle-curso.html
│       ├── dashboard-estudiante.html
│       ├── mis-inscripciones.html
│       ├── admin-dashboard.html
│       ├── admin-cursos.html
│       ├── admin-estudiantes.html
│       ├── admin-docentes.html
│       ├── perfil.html
│       ├── css/
│       └── assets/
│
├── sandbox/
│   └── typescript/
│       ├── 01-es6-repaso.js
│       ├── 02-tipos-basicos.ts
│       ├── 03-tipos-avanzados.ts
│       ├── 04-interfaces.ts
│       ├── 05-clases.ts
│       ├── 06-modulos/
│       └── tsconfig.json
│
├── apps/
│   ├── admin-angular/
│   ├── portal-react/
│   └── landing-next/
│
├── backend/
│   └── api-node-express/
│
├── database/
│   ├── schemas/
│   └── seeds/
│
└── deployment/
    ├── render/
    ├── vercel/
    └── atlas/
```

## Criterio de organización

### `docs/`
Documentación de negocio, arquitectura, sesiones y guías docentes.

### `design/prototipo-html-css/`
Prototipo visual inicial del sistema. No es el producto final, pero sirve como referencia visual para migrar luego a Angular, React y Next.js.

### `sandbox/`
Espacio de práctica para las primeras sesiones. Aquí se guardan ejercicios aislados de JavaScript moderno y TypeScript.

### `apps/admin-angular/`
Panel administrativo: cursos, docentes, estudiantes, dashboard, formularios, mantenimiento.

### `apps/portal-react/`
Portal del estudiante autenticado: catálogo interno, inscripciones, perfil, historial.

### `apps/landing-next/`
Sitio público optimizado: landing, catálogo público, detalle de curso con enfoque SEO.

### `backend/api-node-express/`
API REST, autenticación, reglas de negocio, conexión con MongoDB y seguridad.

### `database/`
Modelos conceptuales, scripts de inicialización y semillas de datos.

### `deployment/`
Guías y configuraciones de despliegue.

## Criterios de guardado por sesión

- **Sesiones 1 y 2:** `sandbox/` y `docs/`
- **Sesiones 3 y 4:** `apps/admin-angular/`
- **Sesiones 5 a 7:** `backend/api-node-express/`
- **Sesiones 8 a 11:** `apps/portal-react/`
- **Sesión 12:** `apps/landing-next/`
- **Sesiones 13 a 15:** `deployment/`, `docs/` y ajustes en todos los módulos
