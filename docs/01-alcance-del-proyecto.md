# 01 - Alcance del proyecto

## Nombre
**Plataforma de Gestión de Cursos e Inscripciones**

## Descripción
Sistema web orientado a la administración académica básica de cursos, docentes, estudiantes e inscripciones. El proyecto servirá como hilo conductor del curso para integrar frontend, backend, tipado estático, autenticación, consumo de APIs, despliegue y seguridad.

## Problema que resuelve
En muchos contextos académicos, la gestión de cursos e inscripciones se realiza con procesos fragmentados, formularios dispersos o herramientas poco integradas. Esto genera errores, duplicidad de datos y poca trazabilidad. La plataforma propone un flujo organizado y escalable para gestionar oferta académica e interacción con estudiantes.

## Objetivo general
Construir progresivamente una aplicación web moderna que permita administrar cursos e inscripciones mediante una arquitectura separada en frontend, backend y base de datos, aplicando buenas prácticas de desarrollo.

## Objetivos específicos

1. Diseñar una interfaz visual base del sistema.
2. Aplicar JavaScript moderno y TypeScript para estructurar mejor el código.
3. Construir un panel administrativo con Angular.
4. Implementar una API REST con Node.js, Express y MongoDB.
5. Crear un portal del estudiante con React.
6. Optimizar una parte pública con Next.js.
7. Desplegar la solución en la nube.
8. Aplicar medidas básicas de seguridad web.

## Alcance funcional

### Módulo público
- ver landing del sistema
- visualizar cursos disponibles
- consultar detalle de curso

### Módulo de autenticación
- registro de usuarios
- inicio de sesión
- gestión de token JWT
- control de acceso por rol

### Módulo administrativo
- gestionar cursos
- gestionar docentes
- gestionar estudiantes
- visualizar métricas básicas

### Módulo del estudiante
- ver cursos disponibles
- inscribirse a cursos
- revisar sus inscripciones
- consultar su perfil

## Alcance técnico

- **Diseño:** HTML + CSS
- **Tipado:** TypeScript
- **Admin:** Angular
- **Portal alumno:** React
- **Landing pública:** Next.js
- **Backend:** Node.js + Express
- **Base de datos:** MongoDB
- **Autenticación:** JWT + bcrypt
- **Despliegue:** Vercel + Render + MongoDB Atlas

## Entregable final esperado
Una solución funcional con:
- API desplegada
- base de datos remota
- panel administrativo
- portal del estudiante
- landing pública
- autenticación
- flujo de inscripción completo

## Alcance mínimo viable por el curso
Si el tiempo del ciclo obliga a priorizar, el mínimo viable debe ser:

1. backend con autenticación y CRUD de cursos
2. panel Angular para administración de cursos
3. portal React para consultar cursos e inscribirse
4. despliegue básico del backend y un frontend
