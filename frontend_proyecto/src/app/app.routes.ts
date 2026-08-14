import { Routes } from '@angular/router';
<<<<<<< HEAD
import { LoginComponent } from './pages/login/login/login';
import { RegisterComponent } from './pages/register/register';

=======
import { CentroAyudaConponent } from './pages/soporte/centro-ayuda/centro-ayuda';
import { LineaAyudaComponent } from './pages/soporte/linea-ayuda/linea-ayuda';
>>>>>>> ffdef95aca6ba3fc7e27c8d5ced9ebb2a8bcb90c

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
<<<<<<< HEAD
    path: 'register',
    component: RegisterComponent,
  }

];
=======
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
>>>>>>> ffdef95aca6ba3fc7e27c8d5ced9ebb2a8bcb90c
