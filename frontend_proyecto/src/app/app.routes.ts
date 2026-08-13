import { Routes } from '@angular/router';
import { CentroAyudaConponent } from './pages/soporte/centro-ayuda/centro-ayuda';
import { LineaAyudaComponent } from './pages/soporte/linea-ayuda/linea-ayuda';

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
    path: 'educacion',
    loadComponent: () =>
      import('./pages/educacion/educacion/educacion').then((m) => m.EducacionComponent),
    title: 'Educacion - FinanceUp',
  },
  {
    path: 'alianzas',
    loadComponent: () =>
      import('./pages/alianzas/alianzas/alianzas').then((m) => m.AlianzasComponent),
    title: 'Alianzas - FinanceUp',
  },
  {
    path: '**',
    redirectTo: 'prueba',
  },
];
