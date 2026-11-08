# FinanceUp · Aplicación web

Interfaz de **FinanceUp**, una plataforma para aprender a manejar el dinero y llevar el control de las finanzas personales: ingresos, gastos, metas de ahorro e inversiones.

Este repositorio contiene la parte visual, es decir, lo que ve y usa la persona. Los servicios que la complementan están en [FINANCEUP_BEE](https://github.com/F3SHARITH/FINANCEUP_BEE).

> **Estado:** proyecto académico en equipo. Las pantallas funcionan con datos de ejemplo y el inicio de sesión es simulado: todavía no se conecta con los servicios reales.

## ¿Qué incluye?

| Sección | Contenido |
|---|---|
| **Cuenta** | Inicio de sesión, registro y recuperación de contraseña |
| **Finanzas** | Panel de finanzas personales |
| **Metas** | Objetivos de ahorro |
| **Inversiones** | Seguimiento de inversiones |
| **Educación** | Módulos y lecciones de educación financiera |
| **Alianzas** | Información de aliados |
| **Soporte** | Centro de ayuda, línea de ayuda, contacto y PQR (peticiones, quejas y reclamos) |

## Herramientas

| Herramienta | Para qué se usa |
|---|---|
| [Angular 22](https://angular.dev/) | Construir la interfaz y organizar las pantallas |
| [TypeScript](https://www.typescriptlang.org/) | Lenguaje del proyecto: JavaScript con tipos que ayudan a evitar errores |
| [RxJS](https://rxjs.dev/) | Manejar datos y eventos que cambian con el tiempo |
| [Vitest](https://vitest.dev/) | Pruebas automáticas |
| [Prettier](https://prettier.io/) | Mantener el código con un formato uniforme |

## Cómo está organizado

```text
frontend_proyecto/
├── public/           → Imágenes y archivos públicos
└── src/app/
    ├── layout/       → Encabezado, menú lateral y pie de página
    ├── pages/        → Una carpeta por cada sección de la aplicación
    └── services/     → Lógica compartida, como la sesión del usuario
```

## Cómo ejecutarlo

Necesitas tener instalado [Node.js](https://nodejs.org/).

```bash
cd frontend_proyecto
npm install
npm start
```

Después abre <http://localhost:4200> en el navegador.

## Equipo

Desarrollado por F3SHARITH, F4Harold, F5Alejo y J-ohan.
