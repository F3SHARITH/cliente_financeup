import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'prueba',
    pathMatch: 'full',
  },
  {
    path: 'prueba',
    loadComponent: () =>
      import('./pages/prueba/prueba').then((m) => m.Prueba),
    title: 'Prueba - FinanceUp',
  },
  {
    path: 'cursos',
    loadComponent: () =>
      import('./pages/cursos/cursos').then((m) => m.Cursos),
    title: 'Cursos - FinanceUp',
  },
  {
    path: 'alianzas',
    loadComponent: () =>
      import('./pages/alianzas/alianzas').then((m) => m.Alianzas),
    title: 'Alianzas - FinanceUp',
  },
  {
    path: '**',
    redirectTo: 'prueba',
  },
];
